const { Client, Intents, Collection } = require('discord.js');
const bot = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_VOICE_STATES,
        Intents.FLAGS.GUILD_PRESENCES
    ]
});

require('dotenv').config(); // Initialize configuration

bot.commands = new Collection(); // Create Command Collection
bot.events = new Collection();  // Create Event Collection

['command_handler', 'event_handler'].forEach(handlers => { // Loop to find handlers
    require(`./handlers/${handlers}`)(bot, Client);
});

bot.login(process.env.DISCORD_TOKEN).catch(err => console.log(`Invalid Token Provided!`)); // Log the bot into Discord