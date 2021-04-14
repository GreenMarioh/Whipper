const axios = require ('axios')
const Discord = require ('discord.js')
var https = require ('https')
const fetch = require("node-fetch");

module.exports = {
    commands: ['mcserver', 'minecraftserver'],
    expectedArgs: '[Server IP] [Port(optional)]',
    permissionerror: 'You dont have the perms',
    minArgs: 1,
    maxArgs: 2,
    callback: (message, arguments, text) => {
        var url = arguments[0]
        var port = '22565'
        if (arguments[1] != undefined){
            port = arguments[1]
        }
        

        // console.log(url)
        // axios.get(`https://mcapi.us/server/status?ip=${url}&port=${port}`)
        // .then((res) => {
        //     var serverStatus = res.online;
        //     console.log(serverStatus)
            // var serverOn = 'Offline'
            // if (serverStatus = true){
            //     serverOn = 'Online'}
            // message.channel.send(serverOn)
        //     const catEmbed = new Discord.MessageEmbed()
        // .setColor('#00ff00')
        // .setTitle('Cat')
        // .setAuthor(`Cats?`)
        // .setImage(`${res.data[0].url}`)
        // .setThumbnail()
        // .setFooter(`Invoked by ${message.author.username}`)

        
        //     message.channel.send(catEmbed)
        // .catch(console.error)
        //        })

        fetch(`https://mcapi.us/server/status?ip=${url}&port=${port}`)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    var serverStatus = data.online
    var serverOn = 'Offline'
    if (serverStatus != false){
                serverOn = 'Online'}
    
    var maxPlayers = data.players.max;
    var currentPlayers = data.players.now;
    var error = data.error;
    var playerObjectList = data.players.sample;
    var description = data.motd;
    var playersList = []
    for (var i = 0; i < playerObjectList.length; i++){
        const Players = playerObjectList[i].name

        playersList.push(Players)
    }

    const mcServer = new Discord.MessageEmbed()
        .setColor('#55FF55')
        .setTitle(`Minecraft server info for ${url}`)
        .setAuthor(`Server is currently ${serverOn}. ${currentPlayers} playing out of ${maxPlayers}.`)
        .setDescription(`${description}`)
        .addField('Online players: ', ` ${playersList}`)
        .setThumbnail(`https://cdn.discordapp.com/emojis/587505418406723584.gif?v=1`)
        .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL())

        
     if (error === null){    message.channel.send(mcServer) }

    // message.channel.send(`Server is currently ${serverOn}. ${currentPlayers} playing out of ${maxPlayers}.`)
    
    if (error != null){
        message.channel.send(`Error: ${error}. Server is currently ${serverOn}.`)
    }

    // message.channel.send(serverOn)
    // message.channel.send(data.status)

})
  .catch(console.error)

    },
    requiredRoles: [],
    permissions: []
}