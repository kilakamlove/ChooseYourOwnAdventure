// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "red-pill-blue-pill-750x400.jpg",
    levels: {

        start: {
            message: "You have two pills in your hand",
            choices: [
                {
                    text: "Red pill ",
                    nextLevel: "field",
                },

                {
                    text: "Blue pill ",
                    nextLevel: "lightvoid",
                },
            ]
        },

        lightvoid: {
            background_image: "source.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You now have a genie how will you use your wishes",
            choices: [
                {
                    text: "Good",
                    nextLevel: "clouds",
                },

                {
                    text: "bad",
                    nextLevel: "rockymountains",
                },
            ]
        },

        field: {
            background_image: "50cent.jpg",
            message: "great you took a tylenol you didn't have any pain but its alright",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },
        rockymountains: {
            background_image: "nice.jpg",
            message: "It seems you have decided to reconsider",
            choices: [
                {
                    text: "lets see what you are capable of",
                    nextLevel: "kingdom",
                },
            ]
        },
        clouds: {
            background_image: "tenor.gif",
            message: "",
            choices: [
                {
                    text: "care to reconsider",
                    nextLevel: "start"
                },
            ]
        },
        kingdom: {
            background_image: "spee.gif",
            message: "You have achieved world domination",
            choices: [
                {
                    text: "I'm proud of you",
                    nextLevel: "start"
                },
            ]
        }
    }
};
