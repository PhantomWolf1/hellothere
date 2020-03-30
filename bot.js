const Discord = require("discord.js");
const bot = new Discord.Client();

var fuckyou = "~"

bot.on("ready", () => {
  bot.user.setStatus("\"Hello there\" - General Kenobi.");
});

bot.on("message", m => {
  if(m.content.startsWith("~")) {
    m.channel.send("Hello there.");
  } else {
    return console.log(m.content);
  };
});

bot.on("message", message => {
  let content = message.content;
  let sender = message.author;
  let senderid = message.author.id;
  let channel = "684808969222619241";
  
  bot.channels.get("684808969222619241").send(`Fuck you <@${senderid}>`);
  bot.channels.get("684808969222619241").send("Totaly hacker manned broooooooo")
  
})

bot.login(process.env.FuckYouToo);
