const Discord = require('discord.js')
const fetch = require("node-fetch");

module.exports = {
    commands: ['apelegs'],
    expectedArgs: '(Origin username)',
    permissionerror: 'You dont have the perms',
    minArgs: 0,
    maxArgs: null,
    callback: (message, arguments, text) => {
        const username = arguments[0]
        fetch(`https://api.mozambiquehe.re/servers?auth=3AK36upGBaXIzUydMd7W`)
.then(res => res.json())
  .then(data => {
    // if (data.global == null) {message.channel.send("Error lol, have cate -> :cat:")} else {
 //   }

 // Origin parameters 
 var oAsia = data.Origin_login.Asia.Status;
 var oEUW =  data.Origin_login["EU-West"].Status;
 var oEUE = data.Origin_login["EU-East"].Status;
 var oUSW = data.Origin_login["US-West"].Status;
 var oUSC = data.Origin_login["US-Central"].Status;
 var oUSE = data.Origin_login["US-East"].Status;
 var oSA = data.Origin_login.SouthAmerica.Status;

 // Apex Parameters 
 var aAsia = data.ApexOauth_Crossplay.Asia.Status;
 var aEUW = data.ApexOauth_Crossplay["EU-West"].Status;
 var aEUE = data.ApexOauth_Crossplay["EU-East"].Status;
 var aUSW = data.ApexOauth_Crossplay["US-West"].Status;
 var aUSC = data.ApexOauth_Crossplay["US-Central"].Status;
 var aUSE = data.ApexOauth_Crossplay["US-East"].Status;
 var aSA = data.ApexOauth_Crossplay.SouthAmerica.Status;

 const OriginEmbed = new Discord.MessageEmbed()
 .setTitle('Origin Server Status')
 .setThumbnail('https://cdn.discordapp.com/emojis/549638412391677952.png?v=1')
 .addField('Asia', oAsia, true)
 .addField('EU West', oEUW, true)
 .addField('EU East', oEUE, true)
 .addField('US West', oUSW, true)
 .addField('US East', oUSE, true)
 .addField('US Central', oUSC, true)
 .addField('South America', oSA, true)
 .setFooter(`Invoked by ${message.author.username}#${message.author.discriminator} • API Provided by https://apexlegendsstatus.com`, message.author.displayAvatarURL())
 .setColor('#f36a12')
 message.channel.send(OriginEmbed)

 const ApexEmbed = new Discord.MessageEmbed()
 .setTitle('Apex Legends Status')
 .setThumbnail('https://cdn.discordapp.com/emojis/679605434994393118.png?v=1')
 .addField('Asia', aAsia, true)
 .addField('EU West', aEUW, true)
 .addField('EU East', aEUE, true)
 .addField('US West', aUSW, true)
 .addField('US East', aUSE, true)
 .addField('US Central', aUSC, true)
 .addField('South America', aSA, true)
 .setFooter(`Invoked by ${message.author.username}#${message.author.discriminator} • API Provided by https://apexlegendsstatus.com`, message.author.displayAvatarURL())
 .setColor('#f36a12')
 message.channel.send(ApexEmbed)



//  console.log(data.Origin_login.Asia)
 
// console.log(data.Origin_login["EU-West"])
//  console.log(data.ApexOauth_Crossplay)


// message.channel.send("Error lol, have cate -> :cat:")

})
  .catch(console.error)
},
    requiredRoles: [],
    permissions: []
}