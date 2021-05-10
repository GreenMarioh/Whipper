const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  commands: ["apelegs"],
  expectedArgs: "(Origin username)",
  permissionerror: "You dont have the perms",
  minArgs: 0,
  maxArgs: null,
  callback: (message, arguments, text) => {
    const username = arguments[0];
    fetch(`https://api.mozambiquehe.re/servers?auth=3AK36upGBaXIzUydMd7W`)
      .then((res) => res.json())
      .then((data) => {
        // if (data.global == null) {message.channel.send("Error lol, have cate -> :cat:")} else {
        //   }

        // Origin Login Vars
        var oAsia = data.Origin_login.Asia.Status;
        var oEUW = data.Origin_login["EU-West"].Status;
        var oEUE = data.Origin_login["EU-East"].Status;
        var oUSW = data.Origin_login["US-West"].Status;
        var oUSC = data.Origin_login["US-Central"].Status;
        var oUSE = data.Origin_login["US-East"].Status;
        var oSA = data.Origin_login.SouthAmerica.Status;

        // Apex Oatuh Vars
        var aAsia = data.ApexOauth_Crossplay.Asia.Status;
        var aEUW = data.ApexOauth_Crossplay["EU-West"].Status;
        var aEUE = data.ApexOauth_Crossplay["EU-East"].Status;
        var aUSW = data.ApexOauth_Crossplay["US-West"].Status;
        var aUSC = data.ApexOauth_Crossplay["US-Central"].Status;
        var aUSE = data.ApexOauth_Crossplay["US-East"].Status;
        var aSA = data.ApexOauth_Crossplay.SouthAmerica.Status;

        // NovaFusion Vars
        var nAsia = data.EA_novafusion.Asia.Status;
        var nEUW = data.EA_novafusion["EU-West"].Status;
        var nEUE = data.EA_novafusion["EU-East"].Status;
        var nUSW = data.EA_novafusion["US-West"].Status;
        var nUSC = data.EA_novafusion["US-Central"].Status;
        var nUSE = data.EA_novafusion["US-East"].Status;
        var nSA = data.EA_novafusion.SouthAmerica.Status;

        // EA Account Vars
        var eAsia = data.EA_accounts.Asia.Status;
        var eEUW = data.EA_accounts["EU-West"].Status;
        var eEUE = data.EA_accounts["EU-East"].Status;
        var eUSW = data.EA_accounts["US-West"].Status;
        var eUSC = data.EA_accounts["US-Central"].Status;
        var eUSE = data.EA_accounts["US-East"].Status;
        var eSA = data.EA_accounts.SouthAmerica.Status;

        // EA Accounts

        const OriginEmbed = new Discord.MessageEmbed()
          .setTitle("Origin Logins")
          .setThumbnail(
            "https://cdn.discordapp.com/emojis/549638412391677952.png?v=1"
          )
          .addField("Asia", oAsia, true)
          .addField("EU West", oEUW, true)
          .addField("EU East", oEUE, true)
          .addField("US West", oUSW, true)
          .addField("US East", oUSE, true)
          .addField("US Central", oUSC, true)
          .addField("South America", oSA, true)
          .setFooter(
            `Invoked by ${message.author.username}#${message.author.discriminator} • API Provided by https://apexlegendsstatus.com`,
            message.author.displayAvatarURL()
          )
          .setColor("#f36a12");
        // message.channel.send(OriginEmbed);

        const NovaEmbed = new Discord.MessageEmbed()
          .setTitle("EA Novafusion")
          .setThumbnail(
            "https://cdn.discordapp.com/emojis/687049204618756100.png?v=1"
          )
          .addField("Asia", nAsia, true)
          .addField("EU West", nEUW, true)
          .addField("EU East", nEUE, true)
          .addField("US West", nUSW, true)
          .addField("US East", nUSE, true)
          .addField("US Central", nUSC, true)
          .addField("South America", nSA, true)
          .setFooter(
            `Invoked by ${message.author.username}#${message.author.discriminator} • API Provided by https://apexlegendsstatus.com`,
            message.author.displayAvatarURL()
          )
          .setColor("#f36a12");
        // message.channel.send(NovaEmbed);

        const EAAEmbed = new Discord.MessageEmbed()
          .setTitle("EA Accounts")
          .setThumbnail(
            "https://cdn.discordapp.com/emojis/687049204618756100.png?v=1"
          )
          .addField("Asia", eAsia, true)
          .addField("EU West", eEUW, true)
          .addField("EU East", eEUE, true)
          .addField("US West", eUSW, true)
          .addField("US East", eUSE, true)
          .addField("US Central", eUSC, true)
          .addField("South America", eSA, true)
          .setFooter(
            `Invoked by ${message.author.username}#${message.author.discriminator} • API Provided by https://apexlegendsstatus.com`,
            message.author.displayAvatarURL()
          )
          .setColor("#f36a12");
        // message.channel.send(EAAEmbed);

        const ApexEmbed = new Discord.MessageEmbed()
          .setTitle("Apex Legends Crossplay auth Status")
          .setThumbnail(
            "https://cdn.discordapp.com/emojis/679605434994393118.png?v=1"
          )
          .addField("Asia", aAsia, true)
          .addField("EU West", aEUW, true)
          .addField("EU East", aEUE, true)
          .addField("US West", aUSW, true)
          .addField("US East", aUSE, true)
          .addField("US Central", aUSC, true)
          .addField("South America", aSA, true)
          .setFooter(
            `Invoked by ${message.author.username}#${message.author.discriminator} • API Provided by https://apexlegendsstatus.com`,
            message.author.displayAvatarURL()
          )
          .setColor("#f36a12");
        // message.channel.send(ApexEmbed);

        message.channel
          .createWebhook("Whipper", {
            avatar: "https://greenmario.hep.gg/pQGsKcbav.png",
          })
          .then((w) =>
            w.send({ embeds: [OriginEmbed, NovaEmbed, EAAEmbed, ApexEmbed] })
          );

        //  console.log(data.Origin_login.Asia)

        // console.log(data.Origin_login["EU-West"])
        //  console.log(data.ApexOauth_Crossplay)

        // message.channel.send("Error lol, have cate -> :cat:")
      })
      .catch(console.error);
  },
  requiredRoles: [],
  permissions: [],
};
