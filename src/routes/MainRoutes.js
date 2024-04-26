const express = require("express");
const Router = express.Router();
const mongoose = require("mongoose");
const character = require('../../models/character');

Router.route("/main")
    .get((req, res) => {
        res.render("main", {
            nav: [
                {link: "/index", title: "Characters"},
                {link: "/about", title: "About"},
            ],
            title: "Main",
        });
    });

    Router.route("/index")
    .get(async (req, res) => {
        try {
            let characters = await character.find({});
            console.log(characters);
            res.render("index", {
                nav: [
                    {link: "/", title: "Main"},
                    {link: "/about", title: "About"},
                ],
                title: "Characters",
                character: characters
            });
        } catch (err) {
            console.log(err);
        }
    });


Router.route("/about")
    .get((req, res) => {
        res.render("about", {
            nav: [
                {link: "/", title: "Main"},
                {link: "/index", title: "Characters"},
            ],
            title: "About",
        });
    });

    Router.route("/char_view/:id")
    .get((req, res) => {
      character.findById(req.params.id)
        .then(character => {
          res.render("char_view", {
            nav: [
              {link: "/", title: "Main"},
              {link: "/index", title: "Characters"},
              {link: "/about", title: "About"},
            ],
            title: "Character",
            character: character
          });
        })
        .catch(err => {
          console.log(err);
          res.redirect("/index");
        });
    });
  
  
module.exports = Router;