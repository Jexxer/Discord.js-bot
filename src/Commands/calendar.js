const Command = require("../Structures/Command.js")

module.exports = new Command({
    name: "calendar",
    description: "Sends link to calendar for GA SEI",

    async run(message, args, client){
        message.reply(`Hello ${message.author.username}\nHere's the link to the Calendar:\nhttps://docs.google.com/spreadsheets/d/124WEkwXKAUV83DaftPJHIt-LA5nCogB3F0cRYoJgtQE/edit#gid=1142831674`)
    }
})