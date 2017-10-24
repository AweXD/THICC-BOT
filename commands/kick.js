exports.run = (client, message, args) => {
  const member = message.mentions.members.first();

  if (!member) return message.reply("Please mesntion a user.");
  if (!member.kickable) return message.reply("i cannot kick this user.");

  const reason = args.splice(args.indexOf(member.toString()), 1).join(/ +/);

  member.kick(reason);
  message.reply(message.mentions.members.first() + "was succesfully kicked.");
}
