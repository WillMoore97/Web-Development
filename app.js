const express = require("express");
const path = require("path");
const chalk = require("chalk");
const debug = require("debug");
const morgan = require("morgan");
const mongoose = require("mongoose");
const character = require("./models/character");
const feedRoutes = require("./src/routes/feed");

//database
mongoose.connect("mongodb+srv://william97uk:wmoore@summative.kfxsdw8.mongodb.net/character?retryWrites=true&w=majority");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function (){
  console.log("connected to MongoDB");
});

//port
const app = express();
const port = process.env.PORT || PORT;
//uses
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/images', express.static(path.join(__dirname, "public/images")));
//sets
app.set("views", "./src/views");
app.set("view engine", "ejs");
//bootstrap uses
app.use(express.static(path.join(__dirname, "/public")));
app.use("/css", express.static(path.join(__dirname, "/node_modules/bootstrap/dist/css")));
app.use("/js", express.static(path.join(__dirname, "/node_modules/bootstrap/dist/js")));
app.use("/js", express.static(path.join(__dirname, "/node_modules/jquery/dist")));
//routes
const MainRoutes = require("./src/routes/MainRoutes");
app.use("/", MainRoutes);
app.use("/feed", feedRoutes);

//get
app.get('/', (req, res) => {
  res.render('main');
});

//listen
app.listen(port, function(){
    debug('listening on port ${chalk.green(port)}');
});