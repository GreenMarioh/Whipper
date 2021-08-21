const axios = require("axios");
const Discord = require("discord.js");
var https = require("https");
const fetch = require("node-fetch");

module.exports = {
  commands: ["minecraft", "mc"],
  expectedArgs: "[Server IP]:[Port(40660 default, specify value if another port)]",
  permissionerror: "You dont have the perms",
  minArgs: 1,
  maxArgs: 2,
  callback: (message, arguments, text) => {
    var url = arguments[0];
    var port = "40660";
    if (arguments[1] != undefined) {
      port = arguments[1];
    }

    fetch(`https://api.mcsrvstat.us/2/${url}:${port}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        var serverStatus = data.online;
        var serverOn = "Offline";
        if (serverStatus != false) {
          serverOn = "Online";
        }

        var ipAd = data.ip;
        var port = data.port;
        
        if (data.players != undefined) {
          var maxPlayers = data.players.max;
          var currentPlayers = data.players.online; 
          var playerObjectList = data.players.list;
          var description = data.motd.clean;
          var version = data.version;      
            
       
        var playersList = "No one is playing currently";

        playersList = [];
        for (var i = 0; i < playerObjectList.length; i++) {
         const Players = playerObjectList[i];

          playersList.push(Players);
        }

        if (playersList.length == 0) {
          playersList =
            "Cannot fetch list of players: Either the server is empty or players list beyond limit.";
        }
        } else {(maxPlayers = '0') && ( currentPlayers == '0')}
        // var error = data.error;

        const mcServer = new Discord.MessageEmbed()
          .setColor("#55FF55")
          .setTitle(`Minecraft server info for ${url}`)
          .setAuthor(`${currentPlayers} playing out of ${maxPlayers}.`)
          .setDescription(`${description}`)
          .addField("IP Address:", `${ipAd}:${port}`, true)
          .addField("Server status", `${serverOn}`, true)
          .addField("Online players", `${playersList}`)
          .addField("Version", `${version}`)
          .setThumbnail(
            `https://cdn.discordapp.com/emojis/587505418406723584.gif?v=1`
          )
          .setFooter(
            `Invoked by ${message.author.username}#${message.author.discriminator}`,
            message.author.avatarURL()
          );

        // if (error === null) {
          message.channel.send(mcServer);
          
        // }

        // // message.channel.send(`Server is currently ${serverOn}. ${currentPlayers} playing out of ${maxPlayers}.`)

        // if (error != null) {
        //   message.channel.send(
        //     `Error: **${error}**. Server may be offline or unreachable.`
        //   );
        // }

        
      })
      .catch(console.error);
  },
  requiredRoles: [],
  permissions: [],
};
