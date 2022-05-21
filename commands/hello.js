module.exports = {
    name: 'hello',
    description: "this is a hello command",
    stat: 'true',
    execute(bot, message, args) {
        message.channel.send(`Hi ${message.author.username}!`); // Send a greeting message to the user
    }
}