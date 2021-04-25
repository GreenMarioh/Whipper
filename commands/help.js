
const {prefix} = require('../config.json')

const Discord = require('discord.js')

module.exports = {
    commands: ['help', 'commands'],
    expectedArgs: '',
    permissionerror: 'You dont have the perms',
    minArgs: 0,
    maxArgs: null,
    callback: (message, arguments, text) => {

       const helpEmbed = new Discord.MessageEmbed()
       .setTitle(`Whipper#5710`)
       .setAuthor(`Bot Information: -`)
       .setURL('https://discord.gg/QNsGN4V')
       .setThumbnail('https://greenmario.hep.gg/pQGsKcbav')
       .setColor('#39f312')
       .setDescription(`**__Available Commands:-__**
       > ${prefix}**help**: HELP!
       > ${prefix}**ping**: Pong?!
       > ${prefix}**cat**: Cats?!
       > ${prefix}**agent**: Get suggestion to play a random VALROANT agent
       > ${prefix}**legend**: Get suggestion to play a random Apex Legend
       > ${prefix}**minecraft**: Minecraft server info for specified address
       > ${prefix}**ragemp**: RageMP server info for specified address
       > ${prefix}**meme**: Random meme
       > ${prefix}**strat**: Random strat for VALORANT
       > ${prefix}**bunger**: Bunger?! 
       > ${prefix}**purge**: Purge messages (Mod only)
       > ${prefix}**serverinfo**: Info about current server `)
       .addField('Other features', 'Welcomer, Word filter', true)
        .setFooter('Made by GreenMario#0001, for the Boys', message.author.avatarURL() )
       
        
       message.channel.send(helpEmbed)
       
    },
    requiredRoles: [],
    permissions: []
}