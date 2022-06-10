const fetch = require("node-fetch");
const Discord = require("discord.js");

module.exports = {
  commands: "news",
  expectedArgs: "Stuff",
  permissionerror: "You dont have the perms",
  minArgs: 1,
  maxArgs: 99,
  callback: (message, arguments, text) => {
    const source = arguments
    fetch(
        `https://newsapi.org/v2/everything?q=${source}&sortBy=publishedAt&language=en`, 
        {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "X-Api-Key": "79f44b38c20d45d5aaf0bb4da6a44f0a",
            },
          }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.articles[0] == null) {
            message.channel.send("Enter a valid entity");
          } else {
            let title = data.articles[0].title;
            let description = data.articles[0].description;
            let url = data.articles[0].url;
            let image = data.articles[0].urlToImage;
            

            const newsEmbed = new Discord.MessageEmbed()
          .setColor("#00ff00")
          .setTitle(`${title}`)
          .setURL(`${url}`)
          .setDescription(`${description}`)
          .setImage(`${image}`)
          .setFooter(
            `Invoked by ${message.author.username}`,
            message.author.avatarURL()
          )

        message.channel.send(newsEmbed).catch(console.error);

          }
        console.log(data.articles[0])


        
      })
      // message.channel.send(catEmbed)

      .catch((err) => {
        console.error("ERR:", err);
      });
  },
};
