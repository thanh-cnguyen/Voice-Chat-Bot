const fs = require('fs'); //This structurize the files into a file system

module.exports = (bot, Client) => {
    const load_dir = (dirs) => { // This function loads every directory (we have two: guild and bot/events)
        const event_files = fs.readdirSync(`./events/${dirs}`).filter(file => file.endsWith('.js'));

        for (const file of event_files) { // Loop through all the directory paths to find events
            const event = require(`../events/${dirs}/${file}`);
            const event_name = file.split('.')[0];
            bot.on(event_name, event.bind(null, bot, Client));
        }
    }

    ['bot', 'guild'].forEach(events => load_dir(events)); // Call the function to handle each event
}