const Character = require('../models/character');

exports.getCharacter = (req, res, next) => {
    Character.find()
        .then(characters => {
            res.status(200).json(
                {
                nameCharacter :"Gertrude Bolt",
                raceName : "Dwarf",
                className: "Ranger"
            });
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to fetch posts.' });
        });
};

exports.createCharacter = (req, res, next) => {
    const nameCharacter = req.body.nameCharacter;
    const raceName = req.body.raceName;
    const className = req.body.className;

    const character = new Character({
        nameCharacter,
        raceName,
        className
    });

    character.save()
        .then(createdCharacter => {
            res.status(201).json({
                message: "Post created successfully!",
                post: createdCharacter
            });
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to create post.' });
        });
};
