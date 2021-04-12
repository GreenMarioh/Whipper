const Discord = require('discord.js')

module.exports = {
    commands: ['random', 'r'],
    expectedArgs: '<Option 1> <Option 2> ... <Option 3>',
    permissionerror: 'You dont have the perms',
    minArgs: 2,
    maxArgs: null,
    callback: (message, arguments, text) => {
        
    var n = 0
    var optionsList = []
    while (n < arguments.length){
        const options = arguments[n];
        
        
        optionsList.push(options)
        n++
        
        
    }
    // console.log(optionsList)
    let random = Math.floor(Math.random() * optionsList.length)
    let randomOption = optionsList[random]
    
    const randomEmbed = new Discord.MessageEmbed()
    .setColor('#f36a12')
    .setAuthor('Randomizer', 'https://cdn.discordapp.com/emojis/807340361399140404.png?v=1')
    .setThumbnail('https://greenmario.hep.gg/l9tdWnZ47')
    .setTitle(randomOption)
    .setDescription(`<@${message.author.id}> got **${randomOption}**`)
    .setFooter('Courtesy of The Boys', message.author.displayAvatarURL())

    message.channel.send(randomEmbed)
    },
    requiredRoles: [],
    permissions: []
}