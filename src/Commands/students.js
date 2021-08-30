const Command = require("../Structures/Command.js");

const Discord = require("discord.js");

const config = require('../Data/config.json')

module.exports = new Command({
    name: "students",
    description: "Display useful links to member",

    async run(message, args, client){

        const embed = new Discord.MessageEmbed();

        embed
            .setTitle("SEI-712 Students")
            .setAuthor(
            message.client.user.username,
            message.client.user.avatarURL({dynamic: true}),
            "https://github.com/Jexxer/Discord.js-bot"
            )
            .setDescription("Here are the students that are attending General Assembly's\nSEI-712 class.")
            .setColor('DARK_PURPLE')
            .setThumbnail(client.user.avatarURL({dynamic: true}))
            .setTimestamp()
            .addFields([
                {
                    name: 'Ahzam Bardai',
                    value: `[Github](https://github.com/AhzamBardai)`,
                    inline: true
                },
                {
                    name: "Alec Johnson",
                    value: `[Github](https://github.com/wenjase)`,
                    inline: true
                },
                {
                    name: 'Alex Kim', 
                    value: `[Github](https://github.com/alexkimcs)`,
                    inline: true
                },
                {
                    name: "Andy Zhong",
                    value: `[Github](https://github.com/andyjzhong)`,
                    inline: true
                },
                {
                    name: "Cole Rener",
                    value: `[Github](https://github.com/dishbin)`,
                    inline: true
                },
                {
                    name: 'Dylan Guma', 
                    value: `[Github](https://github.com/dguma)`,
                    inline: true
                },
                {
                    name: 'Jesse Watson',
                    value: `[Github](https://github.com/Jexxer) - [Linkedin](https://www.linkedin.com/in/jwatsoncode/)`,
                    inline: true
                },
                {
                    name: 'Johanna Trejo',
                    value: `[Github](https://github.com/johannat116)`,
                    inline: true
                },
                {
                    name: 'Kimberly Kruedelbach', 
                    value: `[Github](https://github.com/Kimberlybree)`,
                    inline: true
                },
                {
                    name: 'Lawrence Hau',
                    value: `[Github](https://github.com/LawrenceHau)`,
                    inline: true
                },
                {
                    name: 'Luke Marino',
                    value: `[Github](https://github.com/lmarin1197)`,
                    inline: true
                },
                {
                    name: 'Max Robbins',
                    value: `[Github](https://github.com/mjrobbins18)`,
                    inline: true
                },
                {
                    name: 'Menty Sisay',
                    value: `[Github](https://github.com/mentysisay)`,
                    inline: true
                },
                {
                    name: 'Michael Dunn-O\'Connor',
                    value: `[Github](https://github.com/dunnoconnor) - [Linkedin](https://www.linkedin.com/in/michael-dunn-o-connor/)`,
                    inline: true
                },
                {
                    name: 'Mohamud Qasim',
                    value: `[Github](https://github.com/moqasim)`,
                    inline: true
                },
                {
                    name: 'Naeem Gibson',
                    value: `[Github](https://github.com/naeemgibson)`,
                    inline: true
                },
                {
                    name: 'Nita Lo',
                    value: `[Github](https://github.com/nlo88)`,
                    inline: true
                },
                {
                    name: 'Omar Abudeh',
                    value: `[Github](https://github.com/evolvd444) - [Linkedin](https://www.linkedin.com/in/omar-abudeh/)`,
                    inline: true
                },
                {
                    name: 'Patrick Milligan',
                    value: `[Github](https://github.com/rinkratmilly)`,
                    inline: true
                },
                {
                    name: 'Roxie Schnoor',
                    value: `[Github](https://github.com/roxieetc)`,
                    inline: true
                },
                {
                    name: 'Samon Oum',
                    value: `[Github](https://github.com/oumsamon)`,
                    inline: true
                },
                {
                    name: 'Sean Coleman',
                    value: `[Github](https://github.com/seanclmn)`,
                    inline: true
                },
                {
                    name: 'Todd Peltzer',
                    value: `[Github](https://github.com/ToddPeltzer)`,
                    inline: true
                },
                {
                    name: 'Troi Vergara',
                    value: `[Github](https://github.com/tverg419)`,
                    inline: true
                },
                {
                    name: 'Zachary Rehbein',
                    value: `[Github](https://git.generalassemb.ly/zrehbein)`,
                    inline: true
                },
                {
                    name: 'Zavier Lowe',
                    value: `[Github](https://github.com/ZavierLowe)`,
                    inline: true
                }
            ])
            .setFooter("Made by Jesse Watson", "https://i.imgur.com/H4Cca0E.png")
            


        message.channel.send({ embeds: [embed] });

    }
    
})
