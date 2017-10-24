exports.run = (client, message, args) => {
    let member = message.mentions.members.first();
    var rated = Math.floor(Math.random() * 100) + 1;

    if (!member) return message.reply("Please mention a user.");

    return message.channel.send(`I rate ${member} **${rated}/100**`);
}
