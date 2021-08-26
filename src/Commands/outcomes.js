const Command = require("../Structures/Command.js")

module.exports = new Command({
    name: "outcomes",
    description: "Displays homework due for the week",

    async run(message, args, client){

        switch(args[1]){
            case "homework": 
                message.reply(`DUE: Monday, Aug 30, 3:30pm EST\n\nA. Identify a platform that you will use to create and maintain your portfolio.\nSpend some time on different sites to see what is most intuitive/ works best for you. Share the link below (i.e. Wix, Squarespace, Wordpress, etc.) Remember, you will be adding to this/editing it constantly so be sure to choose something that is comfortable for you.\n\nB. Practice writing one case study for project 1 or 2. Check out [this case study template]:\nhttps://docs.google.com/document/d/1Mfvkh7EsAoQvUCr5K3pW6vxt8rryrbd8NzfeY5R3hu8/edit?usp=sharing\nUse the link to ensure you’re including enough relevant information (you don’t need to include ALL of this info, but consider what’s important).\n\n- Think critically about how you “tell the story” of your work (i.e. what do you want to showcase/highlight for a potential employer?)\n- Include things like: scope of project, skills & tools used, links to code, images, etc.\n- Use class examples from previous student portfolios as inspiration.\nNOTE: You will share this for feedback with a peer group next week`)
                break;
            case "test": 
                message.reply("test works!");
                break;
            default:
                message.reply(`Available commands for !outcomes:\n- homework\n- test`)

        }
    
    }
})