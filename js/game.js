// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "intro-bg.jpg",
    levels: {

        start: {
            message: "You have two pills in your hand",
            choices: [
                {
                    text: "Red pill you have unintentionally summoned a demon",
                    nextLevel: "darkvoid",
                },

                {
                    text: "Blue pill you have unintentionally summoned a genie",
                    nextLevel: "lightvoid",
                },
            ]
        },

        darkvoid: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You come across a fire monster or something!",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },

        field: {
            message: "Some adventurer you are...",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },

    }
};
