const Command = require("../Structures/Command.js");

const Discord = require("discord.js");

const config = require('../Data/config.json')

module.exports = new Command({
    name: "students",
    description: "Display useful links to member",

    async run(message, args, client){

        const embed = new Discord.MessageEmbed();

        switch(args[1]?.toLowerCase()){
            case ("ahzam"): 
                embed
                    .setTitle("Ahzam Bardai")
                    .setDescription("This is a collection of information and links related to Ahzam Bardai")
                    .setColor('GOLD')
                    .setThumbnail(client.user.avatarURL({dynamic: true}))
                    .setTimestamp()
                    .setImage("https://media-exp1.licdn.com/dms/image/C4D03AQEX9aGEaaCz2w/profile-displayphoto-shrink_800_800/0/1628395696805?e=1639612800&v=beta&t=1LRtHsRwUOUnhRm9SOusUe1YbnOHTOMDAUM0IfrtktM") // link to pic of Ahzam
                    .addFields([
                        {
                            name: "Github",
                            value: `[Link](https://github.com/AhzamBardai)`,
                            inline: true
                        },
                        {
                            name: "Linkedin",
                            value: `[Link](https://www.linkedin.com/in/ahzam-bardai/)`,
                            inline: true
                        },
                        {
                            name: "Portfolio",
                            value: `[Link](https://www.ahzambardai.me/)`,
                            inline: true
                        },
                        {
                            name: '\u200B', // empty field for line breaks
                            value: '\u200B'
                        },
                        {
                            name: "Project1",
                            value: `[Github](https://github.com/AhzamBardai/Card-Switch)\n[Live Site](https://ahzambardai.github.io/Card-Switch/)`,
                            inline: true
                        },
                        {
                            name: "Project2",
                            value: `[Github](https://github.com/AhzamBardai/Dummy-Buy)\n[Live Site](https://dummy-buy.herokuapp.com/)`,
                            inline: true
                        },
                        {
                            name: '\u200B', 
                            value: '\u200B'
                        },
                        {
                            name: "Project3 Frontend",
                            value: `[Github](https://github.com/AhzamBardai/Zatta) - [Live](https://zatta.herokuapp.com/)`,
                            inline: true
                        },
                        {
                            name: "Project3 Backend",
                            value: `[Github](https://github.com/ToddPeltzer/Zatta-Backend) - [Live](https://zatta1.herokuapp.com/api/)`,
                            inline: true
                        },
                        {
                            name: '\u200B', 
                            value: '\u200B'
                        },
                        {
                            name: "Project4 Frontend",
                            value: `[Github](https://github.com/AhzamBardai/Stuco/tree/dev) - [Live](https://plano-stuco.herokuapp.com/)`,
                            inline: true
                        },
                        {
                            name: "Project4 Backend",
                            value: `[Github](https://github.com/AhzamBardai/Stuco-backend/tree/dev) - [Live](https://plano-stuco.herokuapp.com/api/)`,
                            inline: true
                        },
                        
                    ])
                    .setFooter("Made by Jesse Watson", "https://i.imgur.com/H4Cca0E.png")
                    message.channel.send({ embeds: [embed] });
                    break;
            case ("alec"): 
            embed
                .setTitle("Alec Johnson")
                .setDescription("This is a collection of information and links related to Alec Johnson")
                .setColor('NAVY')
                .setThumbnail(client.user.avatarURL({dynamic: true}))
                .setTimestamp()
                .setImage("https://media-exp1.licdn.com/dms/image/C4E03AQGlefBTTyprQw/profile-displayphoto-shrink_800_800/0/1628474543944?e=1639612800&v=beta&t=2eJON75v5NExJViLU7LvLFxGfnkxNac07q9F5nYT9Jk") // link to pic of Alec
                .addFields([
                    {
                        name: "Github",
                        value: `[Link](https://github.com/wenjase)`,
                        inline: true
                    },
                    {
                        name: "Linkedin",
                        value: `[Link](https://www.linkedin.com/in/alec-johnson-252a09212/)`,
                        inline: true
                    },
                    {
                        name: "Portfolio",
                        value: `[Link](https://alec-johnson.squarespace.com/)`,
                        inline: true
                    },
                    {
                        name: '\u200B', // empty field for line breaks
                        value: '\u200B'
                    },
                    {
                        name: "Project1",
                        value: `[Github](https://github.com/wenjase/dog-breeds)\n[Live Site](https://wenjase.github.io/dog-breeds/)`,
                        inline: true
                    },
                    {
                        name: "Project2",
                        value: `[Github](https://github.com/wenjase/Harvard-project)\n[Live Site](https://dota2-sei712.surge.sh/)`,
                        inline: true
                    },
                    {
                        name: '\u200B', 
                        value: '\u200B'
                    },
                    {
                        name: "Project3 Frontend",
                        value: `[Github](https://github.com/AhzamBardai/Zatta) - [Live](https://zatta.herokuapp.com/)`,
                        inline: true
                    },
                    {
                        name: "Project3 Backend",
                        value: `[Github](https://github.com/ToddPeltzer/Zatta-Backend) - [Live](https://zatta1.herokuapp.com/api/)`,
                        inline: true
                    },
                    {
                        name: '\u200B', 
                        value: '\u200B'
                    },
                    {
                        name: "Project4 Frontend",
                        value: `[Github](https://github.com/wenjase/frontend-project4)`,
                        inline: true
                    },
                    {
                        name: "Project4 Backend",
                        value: `[Github](https://github.com/wenjase/project-4/tree/dev)`,
                        inline: true
                    }
                    
                ])
                .setFooter("Made by Jesse Watson", "https://i.imgur.com/H4Cca0E.png")
                message.channel.send({ embeds: [embed] });
                break;
            case ("alex"): 
                embed
                    .setTitle("Alex Kim")
                    .setDescription("This is a collection of information and links related to Alex Kim")
                    .setColor('PURPLE')
                    .setThumbnail(client.user.avatarURL({dynamic: true}))
                    .setTimestamp()
                    .setImage("https://media-exp1.licdn.com/dms/image/C4D03AQGIiDULyjo1jQ/profile-displayphoto-shrink_800_800/0/1623282988413?e=1639612800&v=beta&t=dJrmLEa0zsVCgZwEoovNPbX4iZQeAAUCi6IYHAtVXV4") // link to pic of Alex
                    .addFields([
                        {
                            name: "Github",
                            value: `[Link](https://github.com/alexkimcs)`,
                            inline: true
                        },
                        {
                            name: "Linkedin",
                            value: `[Link](https://www.linkedin.com/in/alex-kim-303/)`,
                            inline: true
                        },
                        // {
                        //     name: "Portfolio",
                        //     value: `[Link](https://andyzhong.com/)`,
                        //     inline: true
                        // },
                        {
                            name: '\u200B', // empty field for line breaks
                            value: '\u200B'
                        },
                        {
                            name: "Project1",
                            value: `[Github](https://github.com/alexkimcs/Jeopardy)\n[Live Site](https://alexkimcs.github.io/Jeopardy/)`,
                            inline: true
                        },
                        {
                            name: "Project2",
                            value: `[Github](https://github.com/alexkimcs/React-NaturalDisasters-Tracker)\n[Live Site](https://disaster-react-app.herokuapp.com/)`,
                            inline: true
                        },
                        {
                            name: '\u200B', 
                            value: '\u200B'
                        },
                        {
                            name: "Project3 Frontend",
                            value: `[Github](https://github.com/alexkimcs/CHATT-E_frontend) - [Live](https://chatte-frontend.herokuapp.com/)`,
                            inline: true
                        },
                        {
                            name: "Project3 Backend",
                            value: `[Github](https://github.com/oumsamon/chatte_backke) - [Live](https://github.com/oumsamon/chatte_backke/settings/access)`,
                            inline: true
                        },
                        {
                            name: '\u200B', 
                            value: '\u200B'
                        },
                        {
                            name: "Project4 Frontend",
                            value: `[Github](https://github.com/alexkimcs/moon_app/tree/master/frontend)`,
                            inline: true
                        },
                        {
                            name: "Project4 Backend",
                            value: `[Github](https://github.com/alexkimcs/moon_app/tree/master)`,
                            inline: true
                        },
                        
                    ])
                    .setFooter("Made by Jesse Watson", "https://i.imgur.com/H4Cca0E.png")
                    message.channel.send({ embeds: [embed] });
                break;
            case ("andy"): 
                embed
                    .setTitle("Andy Zhong")
                    .setDescription("This is a collection of information and links related to Andy Zhong")
                    .setColor('ORANGE')
                    .setThumbnail(client.user.avatarURL({dynamic: true}))
                    .setTimestamp()
                    .setImage("https://i.imgur.com/C2nXTcr.jpg") // link to pic of Andy
                    .addFields([
                        {
                            name: "Github",
                            value: `[Link](https://github.com/andyjzhong)`,
                            inline: true
                        },
                        {
                            name: "Linkedin",
                            value: `[Link](https://www.linkedin.com/in/andyjzhong/)`,
                            inline: true
                        },
                        {
                            name: "Portfolio",
                            value: `[Link](https://andyzhong.com/)`,
                            inline: true
                        },
                        {
                            name: '\u200B', // empty field for line breaks
                            value: '\u200B'
                        },
                        {
                            name: "Project1",
                            value: `[Github](https://github.com/andyjzhong/roast)\n[Live Site](https://andyjzhong.github.io/roast/)`,
                            inline: true
                        },
                        {
                            name: "Project2",
                            value: `[Github](https://github.com/andyjzhong/seatfreak)\n[Live Site](https://seatfreak-ajz.herokuapp.com/)`,
                            inline: true
                        },
                        {
                            name: '\u200B', 
                            value: '\u200B'
                        },
                        {
                            name: "Project3 Frontend",
                            value: `[Github](https://github.com/porto-app/porto-client) - [Live](http://porto-app.herokuapp.com/)`,
                            inline: true
                        },
                        {
                            name: "Project3 Backend",
                            value: `[Github](https://github.com/porto-app/porto-server) - [Live](https://porto-app-server.herokuapp.com/profiles)`,
                            inline: true
                        },
                        {
                            name: '\u200B', 
                            value: '\u200B'
                        },
                        {
                            name: "Project4 Frontend",
                            value: `[Github](https://github.com/andyjzhong/flint) - [Live](https://flint-finance.herokuapp.com/)`,
                            inline: true
                        },
                        {
                            name: "Project4 Backend",
                            value: `[Github](https://github.com/andyjzhong/flint-server) - [Live](https://flint-server.herokuapp.com/)`,
                            inline: true
                        },
                        
                    ])
                    .setFooter("Made by Jesse Watson", "https://i.imgur.com/H4Cca0E.png")
                    message.channel.send({ embeds: [embed] });
                break;
            case ("cole"): 
                embed
                    .setTitle("Cole Rener")
                    .setDescription("This is a collection of information and links related to Cole Rener")
                    .setColor('ORANGE')
                    .setThumbnail(client.user.avatarURL({dynamic: true}))
                    .setTimestamp()
                    .setImage("https://media-exp1.licdn.com/dms/image/C5603AQEQhSV3Txwcmg/profile-displayphoto-shrink_800_800/0/1587762748337?e=1639612800&v=beta&t=bzZApfEoiqpg8_5FnH50KLY0Co6vwPVf2QAQWpjIRdk") // link to pic of Cole
                    .addFields([
                        {
                            name: "Github",
                            value: `[Link](https://github.com/dishbin)`,
                            inline: true
                        },
                        {
                            name: "Linkedin",
                            value: `[Link](https://www.linkedin.com/in/cole-rener/)`,
                            inline: true
                        },
                        {
                            name: "Portfolio",
                            value: `[Link](https://dishbin.github.io/)`,
                            inline: true
                        },
                        {
                            name: '\u200B', // empty field for line breaks
                            value: '\u200B'
                        },
                        {
                            name: "Project1",
                            value: `[Github](https://github.com/dishbin/ear-trainer)\n[Live Site](https://dishbin.github.io/ear-trainer/)`,
                            inline: true
                        },
                        {
                            name: "Project2",
                            value: `[Github](https://github.com/dishbin/paper-trail)\n[Live Site](https://the-paper-trail.herokuapp.com/)`,
                            inline: true
                        },
                        {
                            name: '\u200B', 
                            value: '\u200B'
                        },
                        {
                            name: "Project3 Frontend",
                            value: `[Github](https://github.com/Feedback-Loop-App/frontend) - [Live](https://feedbackloopapp.herokuapp.com/)`,
                            inline: true
                        },
                        {
                            name: "Project3 Backend",
                            value: `[Github](https://github.com/Feedback-Loop-App/backend) - [Live](https://feedbackloopbackend.herokuapp.com/)`,
                            inline: true
                        },
                        {
                            name: '\u200B', 
                            value: '\u200B'
                        },
                        {
                            name: "Project4 Frontend",
                            value: `[Github](https://github.com/DataCollectiveTeam/Data-Collective) - [Live](https://datacollective.herokuapp.com/)`,
                            inline: true
                        },
                        {
                            name: "Project4 Backend",
                            value: `[Github](https://github.com/DataCollectiveTeam/Data-Collective-Backend) - [Live](https://datacollectivebackend.herokuapp.com/)`,
                            inline: true
                        },
                        
                    ])
                    .setFooter("Made by Jesse Watson", "https://i.imgur.com/H4Cca0E.png")
                    message.channel.send({ embeds: [embed] });
                break;
            case ("dylan"): 
                embed
                    .setTitle("Dylan Guma")
                    .setDescription("This is a collection of information and links related to Dylan Guma")
                    .setColor('GREEN')
                    .setThumbnail(client.user.avatarURL({dynamic: true}))
                    .setTimestamp()
                    .setImage("https://avatars.githubusercontent.com/u/5438181?v=4") // link to pic of Dylan
                    .addFields([
                        {
                            name: "Github",
                            value: `[Link](https://github.com/dguma)`,
                            inline: true
                        },
                        {
                            name: "Linkedin",
                            value: `[Link](https://www.linkedin.com/in/dylan-guma-5217b255/)`,
                            inline: true
                        },
                        {
                            name: "Portfolio",
                            value: `[Link](https://dguma.github.io/)`,
                            inline: true
                        },
                        {
                            name: '\u200B', // empty field for line breaks
                            value: '\u200B'
                        },
                        {
                            name: "Project1",
                            value: `[Github](https://github.com/dguma/Galaga-Arcade-Game)\n[Live Site](https://dguma.github.io/Galaga-Arcade-Game/)`,
                            inline: true
                        },
                        {
                            name: "Project2",
                            value: `[Github](https://github.com/dguma/marvel-comics-project)\n[Live Site](https://marvel-comics-project.herokuapp.com/)`,
                            inline: true
                        },
                        {
                            name: '\u200B', 
                            value: '\u200B'
                        },
                        {
                            name: "Project3 Frontend",
                            value: `[Github](https://github.com/alexkimcs/CHATT-E_frontend) - [Live](https://chatte-frontend.herokuapp.com/)`,
                            inline: true
                        },
                        {
                            name: "Project3 Backend",
                            value: `[Github](https://github.com/oumsamon/chatte_backke) - [Live](https://github.com/oumsamon/chatte_backke/settings/access)`,
                            inline: true
                        },
                        {
                            name: '\u200B', 
                            value: '\u200B'
                        },
                        {
                            name: "Project4 Frontend",
                            value: `[Github](https://github.com/dguma/toMasterDev) - [Live](https://to-master-dev.herokuapp.com/)`,
                            inline: true
                        },
                        {
                            name: "Project4 Backend",
                            value: `[Github](https://github.com/dguma/toMasterDev-Backend) - [Live](https://warm-harbor-96907.herokuapp.com/)`,
                            inline: true
                        },
                        
                    ])
                    .setFooter("Made by Jesse Watson", "https://i.imgur.com/H4Cca0E.png")
                    message.channel.send({ embeds: [embed] });
                break;
            case ("jesse"): 
                embed
                    .setTitle("Jesse Watson")
                    .setDescription("This is a collection of information and links related to Jesse Watson")
                    .setColor('GREEN')
                    .setThumbnail(client.user.avatarURL({dynamic: true}))
                    .setTimestamp()
                    .setImage("https://avatars.githubusercontent.com/u/81524053?v=4") // link to pic of Jesse
                    .addFields([
                        {
                            name: "Github",
                            value: `[Link](https://github.com/Jexxer)`,
                            inline: true
                        },
                        {
                            name: "Linkedin",
                            value: `[Link](https://www.linkedin.com/in/jwatsoncode/)`,
                            inline: true
                        },
                        {
                            name: "Portfolio",
                            value: `[Link](https://www.jessewatson.dev/)`,
                            inline: true
                        },
                        {
                            name: '\u200B', // empty field for line breaks
                            value: '\u200B'
                        },
                        {
                            name: "Project1",
                            value: `[Github](https://github.com/Jexxer/Jexxer.github.io)\n[Live Site](https://jexxer.github.io/)`,
                            inline: true
                        },
                        {
                            name: "Project2",
                            value: `[Github](https://github.com/Jexxer/MarvelDB)\n[Live Site](https://marveldb-app.herokuapp.com/)`,
                            inline: true
                        },
                        {
                            name: '\u200B', 
                            value: '\u200B'
                        },
                        {
                            name: "Project3 Frontend",
                            value: `[Github](https://github.com/Jexxer/Project-3) - [Live](https://bugtrakker.herokuapp.com/)`,
                            inline: true
                        },
                        {
                            name: "Project3 Backend",
                            value: `[Github](https://github.com/Jexxer/Project-3-backend) - [Live](https://bugtracker-api-v1.herokuapp.com/)`,
                            inline: true
                        },
                        {
                            name: '\u200B', 
                            value: '\u200B'
                        },
                        {
                            name: "Project4 Frontend",
                            value: `[Github](https://github.com/Jexxer/flint) - [Live](https://flint-finance.herokuapp.com/)`,
                            inline: true
                        },
                        {
                            name: "Project4 Backend",
                            value: `[Github](https://github.com/Jexxer/flint-server) - [Live](https://flint-server.herokuapp.com/)`,
                            inline: true
                        },
                        
                    ])
                    .setFooter("Made by Jesse Watson", "https://i.imgur.com/H4Cca0E.png")
                    message.channel.send({ embeds: [embed] });
                break;
            case "test": 
                message.reply("test works!");
                break;
            default:
                embed
                    .setTitle("SEI-712 Students")
                    .setAuthor(
                    message.client.user.username,
                    message.client.user.avatarURL({dynamic: true}),
                    "https://github.com/Jexxer/Discord.js-bot"
                    )
                    .setDescription("Here are the students that completed General Assembly's\nSEI-712 class.")
                    .setColor('DARK_PURPLE')
                    .setThumbnail(client.user.avatarURL({dynamic: true}))
                    .setTimestamp()
                    .addFields([
                        {
                            name: 'Ahzam Bardai',
                            value: `[Github](https://github.com/AhzamBardai) - [Linkedin](https://www.linkedin.com/in/ahzam-bardai/)`,
                            inline: true
                        },
                        {
                            name: "Alec Johnson",
                            value: `[Github](https://github.com/wenjase) - [Linkedin](https://www.linkedin.com/in/alec-johnson-252a09212/)`,
                            inline: true
                        },
                        {
                            name: 'Alex Kim', 
                            value: `[Github](https://github.com/alexkimcs) - [Linkedin](https://www.linkedin.com/in/alex-kim-303/)`,
                            inline: true
                        },
                        {
                            name: "Andy Zhong",
                            value: `[Github](https://github.com/andyjzhong) - [Linkedin](https://www.linkedin.com/in/andyjzhong/)`,
                            inline: true
                        },
                        {
                            name: "Cole Rener",
                            value: `[Github](https://github.com/dishbin) - [Linkedin](https://www.linkedin.com/in/cole-rener/)`,
                            inline: true
                        },
                        {
                            name: 'Dylan Guma', 
                            value: `[Github](https://github.com/dguma) - [Linkedin](https://www.linkedin.com/in/dylan-guma-5217b255/)`,
                            inline: true
                        },
                        {
                            name: 'Jesse Watson',
                            value: `[Github](https://github.com/Jexxer) - [Linkedin](https://www.linkedin.com/in/jwatsoncode/)`,
                            inline: true
                        },
                        {
                            name: 'Kimberly Kruedelbach', 
                            value: `[Github](https://github.com/Kimberlybree) - [Linkedin](https://www.linkedin.com/in/kimberlybree/)`,
                            inline: true
                        },
                        {
                            name: 'Lawrence Hau',
                            value: `[Github](https://github.com/LawrenceHau) - [Linkedin](https://www.linkedin.com/in/lawrencechristopherhau/)`,
                            inline: true
                        },
                        {
                            name: 'Luke Marino',
                            value: `[Github](https://github.com/lmarin1197)`,
                            inline: true
                        },
                        {
                            name: 'Max Robbins',
                            value: `[Github](https://github.com/mjrobbins18) - [Linkedin](https://www.linkedin.com/in/maxwell-robbins-1b614a23/)`,
                            inline: true
                        },
                        {
                            name: 'Menty Sisay',
                            value: `[Github](https://github.com/mentysisay) - [Linkedin](https://www.linkedin.com/in/mentysisay/)`,
                            inline: true
                        },
                        {
                            name: 'Michael Dunn-O\'Connor',
                            value: `[Github](https://github.com/dunnoconnor) - [Linkedin](https://www.linkedin.com/in/michael-dunn-o-connor/)`,
                            inline: true
                        },
                        {
                            name: 'Mohamud Qasim',
                            value: `[Github](https://github.com/moqasim) - [Linkedin](https://www.linkedin.com/in/qasimmohamed/)`,
                            inline: true
                        },
                        {
                            name: 'Naeem Gibson',
                            value: `[Github](https://github.com/naeemgibson) - [Linkedin](https://www.linkedin.com/in/naeemgibson/)`,
                            inline: true
                        },
                        {
                            name: 'Nita Lo',
                            value: `[Github](https://github.com/nlo88) - [Linkedin](https://www.linkedin.com/in/nita-lo/)`,
                            inline: true
                        },
                        {
                            name: 'Omar Abudeh',
                            value: `[Github](https://github.com/evolvd444) - [Linkedin](https://www.linkedin.com/in/omar-abudeh/)`,
                            inline: true
                        },
                        {
                            name: 'Patrick Milligan',
                            value: `[Github](https://github.com/rinkratmilly) - [Linkedin](https://www.linkedin.com/in/pamilligan/)`,
                            inline: true
                        },
                        {
                            name: 'Roxie Schnoor',
                            value: `[Github](https://github.com/roxieetc) - [Linkedin](https://www.linkedin.com/in/roxieschnoor/)`,
                            inline: true
                        },
                        {
                            name: 'Samon Oum',
                            value: `[Github](https://github.com/oumsamon) - [Linkedin](https://www.linkedin.com/in/sam-oum/)`,
                            inline: true
                        },
                        {
                            name: 'Sean Coleman',
                            value: `[Github](https://github.com/seanclmn) - [Linkedin](https://www.linkedin.com/in/sean-coleman-6860661b9/)`,
                            inline: true
                        },
                        {
                            name: 'Todd Peltzer',
                            value: `[Github](https://github.com/ToddPeltzer) - [Linkedin](https://www.linkedin.com/in/todd-peltzer/)`,
                            inline: true
                        },
                        {
                            name: 'Troi Vergara',
                            value: `[Github](https://github.com/tverg419) - [Linkedin](https://www.linkedin.com/in/troi-vergara/)`,
                            inline: true
                        },
                        {
                            name: 'Zachary Rehbein',
                            value: `[Github](https://git.generalassemb.ly/zrehbein) - [Linkedin](https://www.linkedin.com/in/zacharyrehbein/)`,
                            inline: true
                        },
                        {
                            name: 'Zavier Lowe',
                            value: `[Github](https://github.com/ZavierLowe) - [Linkedin](https://www.linkedin.com/in/zavierlowe/)`,
                            inline: true
                        }
                    ])
                    .setFooter("Made by Jesse Watson", "https://i.imgur.com/H4Cca0E.png")
                    


                    message.channel.send({ embeds: [embed] });

        }

        

    }
    
})
