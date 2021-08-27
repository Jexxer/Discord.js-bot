# SEI-712 Discord Bot

## Description
SEI-712 is currently under development as a side project while I attend General Assembly's SEI (Software Engineering Immersive) with the intent of storing all the resources and useful links I encounter. 

This Discord bot was built in JavaScript using the Discord.js module found [here](https://discord.js.org/#/) along with there [documentation](https://discord.js.org/#/docs/main/stable/general/welcome)
- NOTE: This bot is built in discord.js 13.2.0, this is managed from the `package.json`

## Commands
### !ping
This was the first command I built for testing purpose. Will be removed in the future.

![ping image](https://i.imgur.com/SZoezrO.png)

### !links
This command hosts the main links that my classmates and I visit almost everyday in a single embed. Very useful when someone asks for to the calendar or zoom link.

![link image](https://i.imgur.com/z4xpRGp.png)

### !outcomes
This command will reply to the user the current week's homework assignment. Right now the data is manually written in. The reason for this comman is because outcomes is a seperate class we attend at GA designed to help students prepare for their job searches after completing the bootcamp and gives WEEKLY homework rather than daily. It's nice to have a helpful link and description available at a moments notice.

![outcomes image](https://i.imgur.com/iqcAEBw.png)

### !calendar
This link serves to provide a quick link to the GA SEI-712 classes calendar. This is semi-redundant after creating the !links command but lives on for now. Will be removed in the future.

![calendar image](https://i.imgur.com/WyyfpQl.png)

# Getting Started
[node.js](https://nodejs.org/en/download/) 16.6.0 or newer is required to run the bot.

Clone down the repo like normal and cd into the directory to run the following command in your terminal.
```
npm i
```
After the dependancies have been installed, you will need to create a `config.json` inside the `/Data` directory.
Here you will store any and all variables you will consider private. For example: I store my zoom call link here because I do not wish to let all of the internet crash in on my class.

Anytime you want to use a variable inside your files you will need to use this syntax or ES6 equivalent:
```js
// import config
const config = require('../Data/config.json')

// example usage:
client.start(config.token)
```

![config.json image](https://i.imgur.com/tc0zEeQ.png)



Open your terminal and navigate to the `/src` directory and run:
```
node index.js
```


# Contributions
Contributions are HIGHLY encouraged. I am very new to programming in js and am still attending classes until Oct, 2021.
- Do not change anything in the Structures Directory. This will cause Commands and Events to fail.
- Try to use similar naming conventions as closely as possible.