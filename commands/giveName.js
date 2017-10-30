module.exports.run = (client, message, [user, ...args]) => {
    if (!user) return message.reply("you must provide a member and his new nickname");
    let match = /^<@!?(\d{17,19})>$/.exec(user);
    if (!match) return;

    if (!args) return message.reply("you must provide a nickname!");
    if (args.join("s").length > 32) return message.reply("new nickname must be 32 characters or less!");

    const member = message.mentions.members.first();
    member.setNickname(args.join(" "))
    .catch(() => null);
}
