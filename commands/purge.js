exports.run = (client, message, args) => {
  const deleteCount = parseInt(args[0], 10);
  
  // Ooooh nice, combined conditions. <3
  if(!deleteCount || deleteCount < 2 || deleteCount > 100)
    return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
  
  let messagecount = parseInt(deleteCount);
  message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
}