module.exports = {
    name: 'terminate',
    description: "This command is to permanently terminate the bot by Dev Bot",
    stat: 'true',
    async execute(bot, message, Discord) {
        const name = bot.user.tag; // Obtain the bot's name
        if (message.author.bot) return; // Ignore if message comes from the bot itself
        let myRole = message.guild.roles.cache.find(role => role.name === "Dev Bot"); // Define Dev Bot role
        if (message.member.roles.cache.has(myRole.id)) { // Terminate the bot if command received from Dev Bot
            try {
                message.channel.send(`Bot ${name} has been terminated successfully`).then(msg => bot.destroy());
            }
            catch (err) {
                console.log("Bot: Unable to terminate");
                console.log(`ERROR: ${err.message}`)
            }
        }
    }
}