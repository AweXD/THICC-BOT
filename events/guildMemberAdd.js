exports.run = (client, member) => {
  const defaultChannel = member.guild.channels.find(c=> c.permissionsFor(member.guild.me).has("SEND_MESSAGES"));
  if (!defaultChannel) return;
  
  defaultChannel.send(`Welcome ${member.user} to this server.`).catch(console.error);
}
