exports.run = (client, message, args) => {
    var flip = Math.round(Math.random());
    if (flip == 0){
        message.channel.send(message.author.toString() + " flipped a coin: **Tails**");
    }
    else {
        message.channel.send(message.author.toString() + " flipped a coin: **Heads**");
    }
    }

    /* NOTE:
    message.channel.send();
    results: @NAME
    vs
    message.reply();
    results: @NAME,
    */