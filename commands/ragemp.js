const axios = require("axios");
const Discord = require("discord.js");
var https = require("https");
const fetch = require("node-fetch");

module.exports = {
  commands: ["ragemp", "vmp"],
  expectedArgs: "[Server IP:Port]",
  permissionerror: "You dont have the perms",
  minArgs: 1,
  maxArgs: 1,
  callback: (message, arguments, text) => {
    var url = arguments[0];

    fetch(`https://cdn.rage.mp/master/`)
      .then((res) => res.json())
      .then((data) => {
        const server = data[url];
        // console.log(data[url])

        if (server == undefined) {
          message.channel.send(
            "Couldn't fetch info for the server, make sure the address is correct"
          );
        } else {
          const rageServer = new Discord.MessageEmbed()
            .setColor("#55FF55")
            .setTitle(`${server.name}`)
            .setAuthor(`Server info for ${url}`)

            .addField(
              "Online players",
              `${server.players} / ${server.maxplayers} `
            )
            .setThumbnail()
            .setFooter(
              `Invoked by ${message.author.username}`,
              message.author.avatarURL()
            );

          message.channel.send(rageServer);
        }
      })
      .catch(console.error);
  },
  requiredRoles: [],
  permissions: [],
};
