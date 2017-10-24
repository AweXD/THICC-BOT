exports.run = (client, message, args) => {
    let text = args.slice(0).join(" ");
    client.user.setStatus(text);
}