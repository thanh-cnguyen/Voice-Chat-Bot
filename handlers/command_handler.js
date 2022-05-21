const fs = require('fs'); // This structurize the files into a file system

module.exports = (bot, Client) => {
    const command_files = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

    for (const file of command_files) { // Loop to find all commands
        const command = require(`../commands/${file}`)
        if (command.name && command.stat === 'true') { // Execute commands if they have a name and a working stat
            bot.commands.set(command.name, command);
        }
    }
}