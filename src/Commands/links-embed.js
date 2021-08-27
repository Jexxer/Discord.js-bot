const Command = require("../Structures/Command.js");

const Discord = require("discord.js");

module.exports = new Command({
    name: "links",
    description: "Display useful links to member",

    async run(message, args, client){

        const embed = new Discord.MessageEmbed();

        embed
            .setTitle("SEI Links")
            .setAuthor(
            message.author.username,
            message.author.avatarURL({dynamic: true}),
            "https://github.com/Jexxer"
            )
            .setDescription("Here are some useful links for the SEI")
            .setColor('ORANGE')
            .setThumbnail(client.user.avatarURL({dynamic: true}))
            .setTimestamp()
            .setImage("https://res.cloudinary.com/practicaldev/image/fetch/s--ehenNuS9--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/ken191h31mp562g66c2w.jpg")
            .addFields([
                {
                    name: "Calendar",
                    value: "[Google Sheet](https://docs.google.com/spreadsheets/d/124WEkwXKAUV83DaftPJHIt-LA5nCogB3F0cRYoJgtQE/edit#gid=1142831674)",
                    inline: true
                },
                {
                    name: "Zoom",
                    value: "[Join now](https://generalassembly.zoom.us/j/93372299074?pwd=TnZ0NnpqWlVyNXpERGxXRjZVWExOdz09)",
                    inline: true
                },
                {
                    name: '\u200B', 
                    value: '\u200B'
                },
                {
                    name: "Outcomes",
                    value: "[Google Classroom](https://classroom.google.com/u/0/c/MzcyNzYyMzQ4OTI3)",
                    inline: true
                },
                {
                    name: "GA Github",
                    value: "[sei-712](https://git.generalassemb.ly/sei-712)",
                    inline: true
                },
                {
                    name: '\u200B', 
                    value: '\u200B'
                },
                {
                    name: "Study Music",
                    value: "[Playlist](https://www.youtube.com/watch?v=tOKak8MSeqY)",
                    inline: true
                },
                {
                    name: "???",
                    value: "[Link](https://www.youtube.com/watch?v=dQw4w9WgXcQ)",
                    inline: true
                },
                {
                    name: '\u200B', 
                    value: '\u200B'
                }
            ])
            .setFooter("Made by Jesse Watson", "https://i.imgur.com/H4Cca0E.png")
            


        message.channel.send({ embeds: [embed] });

    }
})
