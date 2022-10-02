var Discord = require('discord.js');
var client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })

client.once('ready', () => {
    console.log('Logged in!');
});

//Message - current usage: !msg pings the bot to say "Hello World!"
//Change as needed
client.on('message', message => {
    var prefix = '!'
    var msg = message.content;
    if (msg === prefix + 'msg') {
        message.channel.send(`Hello World!`)
        .then(console.log)
        .catch(console.error);
    }
});

//Note: change 'token' to bot's token
client.login('OTg0MjI1NzgyOTYyNDU4Njg0.GE7ICi.00dk335LkNeeJ4nvyKgc_y50tnO7tU0yzkgY0c');
