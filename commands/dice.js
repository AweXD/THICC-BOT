exports.run = (client, message, args) => {
    var dice = Math.floor(Math.random()*6+1);
    message.channel.send(message.author.toString() + " rolled a **"+ dice + "** .").catch(console.error);
}
