const { DiscordAPIError } = require("discord.js");
const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
    commands: ["apexmap"],
  expectedArgs: "",
  permissionerror: "",
  minArgs: 0,
  maxArgs: 0,
  callback: (message, arguments, text) =>{
      fetch(`https://api.mozambiquehe.re/maprotation?version=2&auth=3AK36upGBaXIzUydMd7W`)
      .then(res => res.json())
      .then(data =>{
          

          // BR Vars
          var currentBR = data.battle_royale.current.map;
          var nextBR =  data.battle_royale.next.map;
          var timerBR = data.battle_royale.current.remainingTimer;
          var nextBRDuration = data.battle_royale.next.DurationInMinutes; 

          // Arena Vars
          var currentArena = data.arenas.current.map;
          var nextArena = data.arenas.next.map;
          var timerArena = data.arenas.current.remainingTimer;
          var nextArenaDuration = data.arenas.next.DurationInMinutes;

          // Ranked Vars
          var currentRanked = data.ranked.current.map;
          var nextRanked = data.ranked.next.map;

        const  mapEmbed = new Discord.MessageEmbed()
        .setTitle(`Current Apex Legends Maps in Rotation`)
        .setColor('#B00B69')
        .addFields(
            {name: `**BATTLE ROYALE**`, value: `**Current Map:** ${currentBR}
            **Time Remaining:** ${timerBR}
            **Next Map:** ${nextBR}
            **Next Map Duration:** ${nextBRDuration} minutes`},
            {name: `**ARENAS**`, value: `**Current Map:** ${currentArena}
            **Time Remaining:** ${timerArena}
            **Next Map:** ${nextArena}
            **Next Map Duration:** ${nextArenaDuration} minutes`},
            {name: `**RANKED**`, value: `**Current Map for the split:** ${currentRanked}
            **Next map for the split:** ${nextRanked}`}
            )
        .setThumbnail('https://greenmario.hep.gg/njXOAYGY5.png')
        .setFooter(`Made by GreenMario#0001`, message.author.displayAvatarURL())

        message.channel.send(mapEmbed)
        })
      .catch(console.error);
  }
}