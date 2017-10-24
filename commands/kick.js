exports.run = (client, message, [mention, ...reason]) => {
  let member = message.mentions.members.first();

  if (!member) return message.reply("Please mesntion a user.");

  member.kick();
  message.reply(message.mentions.members.first()+ "was succesfully kicked.");
    };