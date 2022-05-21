# VoiceChatNotifier
Discord Bot to notify subscribers that a user has entered a voice chat
Users do not have to be in a voice chat to receive notificaiton from the bot

Commands: contains all the commands to function the VC bot
    - hello.js: trigger the bot to greet back
    - ping.js: trigger the bot to respond back if it is there
    - voice.js: trigger the bot to notify users logging in and out of the voice channel
    - toggle.js: disable a specific command
    - restart.js: restart the bot on the server (specific role required)
    - terminate.js: log the bot out of the session and terminate the program (specific role required)
Events: contains all the listeners for the bots events
    - client: contains events from the client (the bot)
        - ready.js: announce if the bot is ready/available in the server
    - guild: contains events from the servers, channels, and users
        - messageCreate.js: listen to any commands and respond with messages if needed
        - voiceStateUpdate.js: listen to voice channels for users' state changes
Handlers: contains how the bot would handle each command and event
    - command_handler.js: responsible for handling all the commands in the Command folder
    - event_handle.js: responsible for handling all the events from the Command folder triggered by the commands

In progress/Not working:
    - toggle.js: 
        - re-enabling feature does not work
    - voice.js: 
        - the bot does not private message to the subscriber
        - canceling the subscription is unsuccessful