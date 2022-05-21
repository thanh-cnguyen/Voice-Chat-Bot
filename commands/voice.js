vf = require('../voiceStateUpdate.js')
module.exports = {
    name: 'voice',
    description: "this is VC Notify command",
    stat: 'true',
    async execute(bot, message, Client) {
        // Alert the system and user about the subscription
        console.log(`Bot: ${message.author.username} has subscribed to Voice Chat Notification!`);
        // message.author.send("You have successfully subscribed to Voice Chat Notification!")
        
        console.log("VCN: " + await vf.voiceFunction(bot, message));
        //message.author.send(result).then(status => console.log(status)).catch(err => console.error(err));


        // bot.on("voiceStateUpdate", async (oldVS, newVS, result) => { // Create a handler function for the voiceStateUpdate event
        //     let oldChannelID = oldVS.channelId; // Obtain oldVoicestate channel id
        //     let newChannelID = newVS.channelId; // Obtain newVoiceState channel id
        //     let tag = bot.users.cache.get(newVS.id).tag; // Get username and determinant

        //     if (oldChannelID === null && newChannelID !== null) {
        //         // User Joins a voice channel
        //         let channelName = bot.channels.cache.get(newChannelID).name;
        //         result = `${tag} is connected to ${channelName}!`;
        //     } else if (newChannelID === null) {
        //         // User leaves a voice channel
        //         result = `${tag} is disconnected.`;
        //     }

        //     // message.author.send(result).then(status => console.log(status)).catch(err => console.error(err));
        // })

    }
}
