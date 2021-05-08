const Discord = require('discord.js')
const fetch = require("node-fetch");

module.exports = {
    commands: ['csgo'],
    expectedArgs: '[Steam Identifier - Steam ID/Custom URL/UID]',
    permissionerror: 'You dont have the perms',
    minArgs: 1,
    maxArgs: 2,
    callback: (message, arguments, text) => {
        const username = arguments[0]
        const segment = arguments[1]
        fetch(`https://public-api.tracker.gg/v2/csgo/standard/profile/steam/${username}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'TRN-Api-Key': '2577e161-06c9-4a11-abaa-bdc0142906c0'
            }
        })
.then(res => res.json())
.then(data => {
    if (data.data == undefined){
        var errorEmbed = new Discord.MessageEmbed()
        .setTitle('Error')
        .setDescription(`<@${message.author.id}> Make sure your Steam profile is public, have game stats set to public and/or you have entered correct ID`)
        .setImage('https://greenmario.hep.gg/QHU0ePrGK.png')
        
        message.channel.send(errorEmbed)}
        else {
    
            var result = data.data.segments[0].stats
            var kills = result.kills.displayValue
            var deaths = result.deaths.displayValue
            var kd = result.kd.displayValue
            var damage = result.damage.displayValue
            var hsp = result.headshotPct.displayValue
            var matchesPlayed = result.matchesPlayed.displayValue;
            var wins = result.wins.displayValue;
            var name = data.data.platformInfo.platformUserHandle;
            var av = data.data.platformInfo.avatarUrl
            
            const csgoEmbed = new Discord.MessageEmbed()
            .setTitle(`CS:GO stats for ${name}`)
            .setColor('#ffec38')
            .setImage(av)
            .setThumbnail('https://greenmario.hep.gg/N_l0n4A5I.png')
            .addField('Kills', kills, true)
            .addField('Deaths', deaths, true)
            .addField('Damage Done', damage, true)
            .addField('K/D', kd, true)
            .addField('Hedshots percentage', hsp, true)
            
            .addField('Matches Played', matchesPlayed, true)
            .addField('Matches Won', wins, true)
            .setFooter(`Made by GreenMario#0001`, message.author.displayAvatarURL())

            message.channel.send(csgoEmbed)
            // console.log(data.data.platformInfo.platformUserHandle)
            // console.log(data.data.segments[0].stats)
        }
    }
)
  .catch(console.error)
},
    requiredRoles: [],
    permissions: []
}