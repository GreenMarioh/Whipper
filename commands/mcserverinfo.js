const axios = require("axios");
const Discord = require("discord.js");
var https = require("https");
const fetch = require("node-fetch");

module.exports = {
  commands: ["mcserver2", "minecraftserver2", "minecraft2", "mc2"],
  expectedArgs: "[Server IP] [Port(optional)]",
  permissionerror: "You dont have the perms",
  minArgs: 1,
  maxArgs: 2,
  callback: (message, arguments, text) => {
    var url = arguments[0];
    var port = "25565";
    if (arguments[1] != undefined) {
      port = arguments[1];
    }

    fetch(`https://mcapi.us/server/status?ip=${url}&port=${port}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        var serverStatus = data.online;
        var serverOn = "Offline";
        if (serverStatus != false) {
          serverOn = "Online";
        }

        var maxPlayers = data.players.max;
        var currentPlayers = data.players.now;
        var error = data.error;
        var playerObjectList = data.players.sample;
        var description = data.motd;
        var playersList = "No one is playing currently";

        playersList = [];
        for (var i = 0; i < playerObjectList.length; i++) {
          const Players = playerObjectList[i].name;

          playersList.push(Players);
        }

        if (playersList.length == 0) {
          playersList =
            "Cannot fetch list of players: Either the server is empty or players list beyond limit.";
        }

        const mcServer = new Discord.MessageEmbed()
          .setColor("#55FF55")
          .setTitle(`Minecraft server info for ${url}`)
          .setAuthor(`${currentPlayers} playing out of ${maxPlayers}.`)
          .setDescription(`${description}`)
          .addField("Online players", `${playersList}`)
          .setThumbnail(
            `https://cdn.discordapp.com/emojis/587505418406723584.gif?v=1`
          )
          .setFooter(
            `Invoked by ${message.author.username}`,
            message.author.avatarURL()
          );

        if (error === null) {
          message.channel.send(mcServer);
        }

        // message.channel.send(`Server is currently ${serverOn}. ${currentPlayers} playing out of ${maxPlayers}.`)

        if (error != null) {
          message.channel.send(
            `Error: **${error}**. Server may be offline or unreachable.`
          );
        }

        // message.channel.send(serverOn)
        // message.channel.send(data.status)
      })
      .catch(console.error);
  },
  requiredRoles: [],
  permissions: [],
};
