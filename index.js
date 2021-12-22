const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const config = require('./config.json');
const TOKEN = config.token;

client.on('ready', () => {
    console.log('VCN bot is in!!!');
});

client.login(TOKEN);