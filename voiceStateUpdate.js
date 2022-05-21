async function voiceFunction(bot, message, oldVS, newVS) {
    let oldChannelID = oldVS.channelId; // Obtain oldVoicestate channel id
    let newChannelID = newVS.channelId; // Obtain newVoiceState channel id
    let tag = bot.users.cache.get(newVS.id).tag; // Get username and determinant
    let result;

    if (oldChannelID === null && newChannelID !== null) {
        // User Joins a voice channel
        let channelName = bot.channels.cache.get(newChannelID).name;
        result = `${tag} is connected to ${channelName}!`;
    } else if (newChannelID === null) {
        // User leaves a voice channel
        result = `${tag} is disconnected.`;
    }

    if (!(result === undefined || result == null)) {
        console.log(result);
        return result;
    }
}

module.exports = { voiceFunction }