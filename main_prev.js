//Previous Version Built of Xbot
var Discord = require("discord.js");
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

console.log("Logged in!");
const fs = require("fs");

//function to get random quote from quotes.txt
function getRandomQuote() {
  var data = fs.readFileSync("ProfessorX-Quotes.txt", "utf8"); // reads the file  as a buffer
  data = data.toString(); // makes the buffer into a readable string
  data = data.split("\n"); // splits the string into an array of strings
  var randomQuote = data[Math.floor(Math.random() * data.length)]; // gets a random quote from the array
  return randomQuote; // returns the random quote
}

client.on("messageCreate", (message) => {
  var msg = message.content.toLowerCase();
  if (msg === "!x") {
    message.channel.send(getRandomQuote());
    console.log("Message sent!");
  }
});

//Note: change 'token' to bot's token
client.login("token");
