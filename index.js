const Discord = require("discord.js");
const client = new Discord.Client();

const { TextChannel } = require('discord.js');

const fs = require("fs");
const config = require("./config.json");

// This loop reads the /events/ folder and attaches each event file to the appropriate event.
/**
 * @returns {[Error]}
 * @description Load all files
 * @function
 */
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    // super-secret recipe to call events with all their proper arguments *after* the `client` var.
    client.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
});

client.on("ready", () => console.log(`\n\x1b[45m\x1b[30m[BOT]\x1b[0m Sucessfully connected to Discord as ${client.user.tag} at ${new Date()}`))

client.on("message", message => {
  if (message.author.bot) return;
  if (message.content.indexOf(config.prefix) !== 0) return;
  if (!(message.channel instanceof TextChannel)) return;


  // This is the best way to define args. Trust me.
  let args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // The list of if/else is replaced with those simple 2 lines:
  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error(err);
  }
});

client.login(config.token);
