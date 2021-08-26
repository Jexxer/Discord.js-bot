const Command = require("../Structures/Command.js")

module.exports = new Command({
    name: "hello",
    description: "Bot replys to Hello!",

    async run(message, args, client){
        message.reply(`Hello ${message.author.username}`)
    }
})