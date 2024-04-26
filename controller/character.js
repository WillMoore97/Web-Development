exports.createCharacter = (req, res, next) => {
    const nameCharacter = req.body.nameCharacter;
    const raceName = req.body.raceName;
    const className = req.body.className;
    
    const character = new character({
        Name: nameCharacter,
        Race: raceName,
        Class: className
    });
    character
    .save()
    .then(characterSaved => {
        res.status(201).json({
            message: "Character created!",
            character: characterSaved
        });
    })
    .catch(err => console.log("err", err))
}