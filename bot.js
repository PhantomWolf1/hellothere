const Discord = require("discord.js");
const bot = new Discord.Client();


bot.on("ready", () => {
  bot.user.setStatus("\"Hello there\" - General Kenobi.");
});

bot.login(process.env.FuckYouToo);
