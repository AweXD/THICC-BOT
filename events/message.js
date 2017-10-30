const Discord = require("discord.js");
const client = new Discord.Client();
const { TextChannel } = require('discord.js');
const config = require("../config.json");

exports.run = (client, message) => {

    // Stops from emitting if author is a bot.
    if (message.author.bot) return;

    // Table Flip Response
    if (message.content.startsWith("(╯°□°）╯︵ ┻━┻")) return message.channel.send("┬─┬ ノ( ゜-゜ノ)")
    

    if (message.content.indexOf(config.prefix) !== 0) return;
    if (!(message.channel instanceof TextChannel)) return;
    // This is the best way to define args. Trust me.
    let args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    // The list of if/else is replaced with those simple 2 lines:
    try {
    let commandFile = require(`../commands/${command}.js`);
    commandFile.run(client, message, args);
    } catch (err) {
    console.error(err);
    }

}
