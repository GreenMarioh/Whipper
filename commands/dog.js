const axios = require("axios");
const Discord = require("discord.js");

module.exports = {
  commands: ["dog", "dogs"],
  callback: (message, arguments, text) => {
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((res) => {
        // console.log('RES:', res.data[0].url)
        // message.channel.send(res.data[0].url)
        const catEmbed = new Discord.MessageEmbed()
          .setColor("#00ff00")
          .setTitle("Dog")
          .setAuthor(`Dogs?`)
          .setImage(`${res.data.message}`)
          .setThumbnail()
          .setFooter(
            `Invoked by ${message.author.username}#${message.author.discriminator}`
          );

        message.channel.send(catEmbed).catch(console.error);
      })
      // message.channel.send(catEmbed)

      .catch((err) => {
        console.error("ERR:", err);
      });
  },
};
