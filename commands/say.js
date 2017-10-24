exports.run = (client, message, args) => {
    // Say what you just sent, and then delete your message
    let text = args.slice(0).join(" ");
    message.delete();
    message.channel.send(text);
}
