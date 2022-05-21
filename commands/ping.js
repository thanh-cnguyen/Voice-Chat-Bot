module.exports = {
    name: 'ping',
    description: "this is a ping command",
    stat: 'true',
    execute(client, message, args) {
        message.reply("Pong!"); // Respond to user message on the channel
    }
}