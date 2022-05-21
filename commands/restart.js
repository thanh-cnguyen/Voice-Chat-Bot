module.exports = {
    name: 'restart',
    description: "This command is to reboot the bot by Dev Bot",
    stat: 'true',
    async execute(bot, message, Discord) {
        if (message.author.bot) return; // Ignore if message comes from the bot itself
        let myRole = message.guild.roles.cache.find(role => role.name === "Dev Bot"); // Define Dev Bot role
        if (message.member.roles.cache.has(myRole.id)) { // Restart the bot if command received from Dev Bot
            try {
                bot.destroy();
                bot.login(process.env.DISCORD_TOKEN)
                message.channel.send(`${client.name} Restarted successfully`);
            }
            catch (err) {
                console.log("Bot: Unable to restart");
                message.channel.send(`ERROR: ${err.message}`)
            }
        }
    }
}