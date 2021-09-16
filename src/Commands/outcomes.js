const Command = require("../Structures/Command.js")

module.exports = new Command({
    name: "outcomes",
    description: "Displays homework due for the week",

    async run(message, args, client){

        switch(args[1]){
            case "homework": 
                message.reply(`Work on your cover letters!`)
                break;
            case "test": 
                message.reply("test works!");
                break;
            default:
                message.reply(`Available commands for !outcomes:\n- homework\n- test`)

        }
    
    }
})