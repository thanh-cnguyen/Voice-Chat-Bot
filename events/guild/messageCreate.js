require('dotenv').config();
const Prefix = process.env.PREFIX;

module.exports = (bot, Client, message) => {
    if (!message.content.startsWith(Prefix) || message.author.bot) return; // Ignore if the message does not start with an appropriate prefix or is from the bot

    const args = message.content.slice(Prefix.length).split(/ +/); // Eliminate the prefix and spaces
    const cmd = args.shift().toLowerCase(); // Shift to lowercase

    const command = bot.commands.get(cmd);

    if (command) // If command exists then proceeds the execution
        command.execute(bot, message, args, Client);
}