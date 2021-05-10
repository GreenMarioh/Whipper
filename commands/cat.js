const axios = require("axios");
const Discord = require("discord.js");

module.exports = {
  commands: "cat",
  callback: (message, arguments, text) => {
    axios
      .get("https://api.thecatapi.com/v1/images/search")
      .then((res) => {
        // console.log('RES:', res.data[0].url)
        // message.channel.send(res.data[0].url)
        const catEmbed = new Discord.MessageEmbed()
          .setColor("#00ff00")
          .setTitle("Cat")
          .setAuthor(`Cats?`)
          .setImage(`${res.data[0].url}`)
          .setThumbnail()
          .setFooter(`Invoked by ${message.author.username}`);

        message.channel.send(catEmbed).catch(console.error);
      })
      // message.channel.send(catEmbed)

      .catch((err) => {
        console.error("ERR:", err);
      });
  },
};
