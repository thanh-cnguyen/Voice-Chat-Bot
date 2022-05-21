module.exports = {
    name: 'toggle',
    description: "This command is to disbale voice listener feature",
    stat: 'true',
    async execute(bot, message, Client) {
        const cmd = message.content.split(/ +/);
        if (message.author.bot) return; // Ignore if message comes from the bot itself

        if (bot.commands.has(`${cmd[1]}`)) { // Check if the command is registed by the bot
            const command = require(`./${cmd[1]}.js`);
            if (cmd[1] === 'voice') {
                command.voiceBot.isPaused = true;
            }
            try { // Validate on/off modes
                if (`${cmd[2]}` === 'off') {
                    if (command.stat === 'true') {
                        command.stat = 'false';
                        bot.commands.sweep(item => item.name === `${cmd[1]}`)
                        console.log("System: command is disabled!");
                    } else if (command.stat === 'false') {
                        console.log("System: command has already been disabled!");
                    }
                } else if (`${cmd[2]}` === 'on') {
                    if (command.stat === 'false') {
                        command.stat = 'true';
                        bot.commands.set(`${cmd[1]}`, command);
                        console.log("System: command is re-enabled!");
                    } else if (command.stat === 'true') {
                        console.log("System: command has already been enabled!");
                    }
                } else {
                    console.log("System Error: Invalid Toggle Mode!");
                    message.channel.send("Please add mode on/off after the command");
                }
            }
            catch (err) {
                console.error(err);
            }
        } else {
            message.channel.send("Command Not Found to toggle!");
        }


    }
}