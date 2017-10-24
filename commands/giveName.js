exports.run = (client, message, args) => {
    if (!message.channel.permissionsFor(message.guild.me).has("MANAGE_NICKNAMES")) return message.reply("i do not have permission to change anyone's nickname!");

    const member = message.mentions.members.first();
    if (!member) return message.reply("you must mention someone!");

    for (const arg of args) {
        const match = new RegExp(`^<@!?${member.user.id}>`).exec(arg);
        if (match) {
            args = args.splice(args.indexOf(match[1]), 1);
        }
    }

    console.log(args);

    member.setNickname(args.join(" "))
    .catch(console.error);
}
