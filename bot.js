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

bot.login(process.env.FuckYouToo);
