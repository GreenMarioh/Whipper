const Discord = require ('discord.js')
const client = new Discord.Client()
const config = require ('./config.json')
const command = require('./command')
const sendMessage = require ('./send-message')
const { prefix } = require ('./config.json')

const path = require('path')
const fs = require('fs')



client.on('ready', ()=>{
    console.log('Bot is online!')

    const baseFile = 'command-base.js'
    const commandBase = require(`./commands/${baseFile}`)

    const readCommands = dir => {
        const files = fs.readdirSync(path.join(__dirname, dir))
        for (const file of files){
            const stat = fs.lstatSync(path.join(__dirname, dir, file))
            if (stat.isDirectory()){
                readCommands(path.join(dir, file))
            } else if (file !== baseFile){
                const option = require(path.join(__dirname, dir, file))
                commandBase(client, option)
            }

            }
        }
        readCommands('commands')
    


    client.user.setPresence({
        activity: {
            name: 'with the boys.',
            type: 0,
        },
    })
    
   
    command(client, 'servers', message =>{
        if (message.author.id != 301773357072908290){
            message.channel.send('You ain\'t the Bot owner fam, won\'t work for ya');
            return
        }
        client.guilds.cache.forEach((guild) => {message.channel.send(`**${guild.name}** has a total of **${guild.memberCount}** members`)})
    })
    
    command(client, 'bunger', message =>{
        message.channel.send('https://tenor.com/view/bunger-gif-20251450')
    })

    command(client, 'status', message =>{
        if (message.author.id != 301773357072908290){
            message.channel.send('Only GreenMario may set the status');
            return
        } else{
        const content = message.content.replace('>status ', '')
        client.user.setPresence({
            activity: {
                name: content,
                type: 0,
            },
        })
        message.channel.send('Bot status updated!')
    }
    
    })

    

    

    command(client, 'ping', message =>{
        let thumbnails = ['https://cdn.discordapp.com/emojis/666720748391497758.png?v=1', 'https://cdn.discordapp.com/emojis/730555338973249596.gif?v=1',
    'https://cdn.discordapp.com/emojis/741561706022567956.gif?v=1', 'https://cdn.discordapp.com/emojis/715578711801462865.gif?v=1',
'https://cdn.discordapp.com/emojis/585838219166351389.gif?v=1', 'https://cdn.discordapp.com/emojis/779276228724654100.png?v=1', 'https://cdn.discordapp.com/emojis/387639044961730563.png?v=1',
'https://cdn.discordapp.com/emojis/408369856220495873.png?v=1', 'https://cdn.discordapp.com/emojis/726382468994695201.png?v=1']
        let epic = Math.floor(Math.random() * thumbnails.length)
        
        randomTh = thumbnails[epic]
        const pingEmbed = new Discord.MessageEmbed()
        .setColor('#86bgh4')
        .setTitle('Ping')
        .setAuthor(`Pong`)
        .setDescription(`Ping is **${Date.now() - message.createdTimestamp}ms**. API Latency is ***${Math.round(client.ws.ping)}ms***`)
        .setThumbnail(randomTh)
        .setFooter(`Invoked by ${message.author.username}`)
    message.channel.send(pingEmbed)
    });

    command(client, 'legend', message=>{
        let legends = ['Bloodhound', 'Bangalore', 'Crypto', 'Gibraltar', 'Lifeline', 'Fuse', 'Pathfinder', 'Horizon', 'Loba', 'Mirage', 'Rampart', 'Octane', 'Caustic', 'Wattson', 'Wraith', 'Revenant']
        let legendThumbnails = ['https://cdn.discordapp.com/emojis/543148999700512768.png?v=1', 'https://cdn.discordapp.com/emojis/544634720965623811.png?v=1', 'https://cdn.discordapp.com/emojis/645173676203048963.png?v=1',
    'https://cdn.discordapp.com/emojis/543149031812104223.png?v=1', 'https://cdn.discordapp.com/emojis/543149042427756544.png?v=1', 'https://cdn.discordapp.com/emojis/801052875434098701.png?v=1', 'https://cdn.discordapp.com/emojis/543149075248185344.png?v=1',
'https://cdn.discordapp.com/emojis/773859165587636235.png?v=1', 'https://cdn.discordapp.com/emojis/736589673622798437.png?v=1', 'https://cdn.discordapp.com/emojis/543149053853302874.png?v=1', 'https://cdn.discordapp.com/emojis/744979953136697375.png?v=1',
'https://cdn.discordapp.com/emojis/743264763026604047.png?v=1', 'https://cdn.discordapp.com/emojis/543149022035312641.png?v=1', 'https://cdn.discordapp.com/emojis/587000606657609743.png?v=1', 'https://cdn.discordapp.com/emojis/543149085847322662.png?v=1', 
'https://cdn.discordapp.com/emojis/674311901517447179.png?v=1']
        let random2 = Math.floor(Math.random() * legends.length)
        let randomLegendThumbnail = legendThumbnails[random2]
        let randomLegend = legends[random2]
        const legendsEmbed = new Discord.MessageEmbed()
        .setColor('#f36a12')
        .setAuthor('Apex Legends randomizer', 'https://cdn.discordapp.com/emojis/679605434994393118.png')
        .setThumbnail(randomLegendThumbnail)
        .setTitle(randomLegend)
        .setDescription(`<@${message.author.id}> should play **${randomLegend}**`)
        .setFooter('Courtesy of The Boys', message.author.displayAvatarURL())

        message.channel.send(legendsEmbed)
    })

    command(client, 'agent', message=>{
        let agents = ['Yoru', 'Viper', 'Sova', 'Skye', 'Sage', 'Reyna', 'Raze', 'Phoenix', 'Omen', 'Killjoy', 'Jett', 'Cypher', 'Brimstone', 'Breach', 'Astra']
        let agentThumbnails = ['https://cdn.discordapp.com/emojis/798624357261508618.png?v=1', 'https://cdn.discordapp.com/emojis/709827557654134870.png?v=1', 'https://cdn.discordapp.com/emojis/709827547302723657.png?v=1',
    'https://cdn.discordapp.com/emojis/771887035774533672.png?v=1', 'https://cdn.discordapp.com/emojis/709827534052655237.png?v=1', 'https://cdn.discordapp.com/emojis/717152051767017522.png?v=1', 'https://cdn.discordapp.com/emojis/709827522338226237.png?v=1',
'https://cdn.discordapp.com/emojis/709827510552100898.png?v=1', 'https://cdn.discordapp.com/emojis/709827500120997958.png?v=1', 'https://cdn.discordapp.com/emojis/803711976307949619.png?v=1', 'https://cdn.discordapp.com/emojis/709827488141803590.png?v=1',
'https://cdn.discordapp.com/emojis/709827472816078858.png?v=1', 'https://cdn.discordapp.com/emojis/709827460916576266.png?v=1', 'https://cdn.discordapp.com/emojis/709827450107985920.png?v=1', 'https://cdn.discordapp.com/emojis/818987103022743562.png?v=1']
        let random3 = Math.floor(Math.random() * agents.length)
        let randomAgentThumbnail = agentThumbnails[random3]
        let randomAgent = agents[random3]
        const agentsEmbed = new Discord.MessageEmbed()
        .setAuthor('VALORANT Randomizer', 'https://cdn.discordapp.com/emojis/683973971984777299.png')
        .setColor('#FF4655')
        .setThumbnail(randomAgentThumbnail)
        .setTitle(randomAgent)
        .setDescription(`<@${message.author.id}> should play **${randomAgent}**`)
        .setFooter('Courtesy of The Boys', message.author.displayAvatarURL(), 'https://discord.gg/QNsGN4V')

        message.channel.send(agentsEmbed)
    })

    

    

   

    command(client, 'serverinfo', message =>{
        const {guild} = message
        const {name, region, memberCount, owner, createdAt, features, maximumMembers} = guild
        
        
        const icon = guild.iconURL()
        const GuildEmbed = new Discord.MessageEmbed()
        .setColor('33eebe')
        .setTitle(`Server info for **${name}**`)
        .setThumbnail(icon)
        .addFields({
            name: 'Name',
            value: name,
        },
        {
            name: 'Region',
            value: region,
        },
        {
            name: 'Members',
            value: `${memberCount} / ${maximumMembers}`,
        },
        {
            name: 'Owner',
            value: owner,
        },
        {
            name: 'Created at',
            value: createdAt,
        },
        {
            name: 'Features',
            value: `${features}` || `Private server`,
        }
        
        )

    message.channel.send(GuildEmbed)
    })
    
    


    })

    



client.on('message', message => {

    var guild = client.guilds.cache.get(message.guild.id)

    

    if (message.content === '<:shut:759123030353510430>'){
        message.channel.send('<:Unshut:830511335078756372>')
     }

    
    if (message.channel.id == `832901660455206942`){
        if (message.author.bot && message.content.includes('Only Vibes')){return}
        else if (message.content != 'https://media.discordapp.net/attachments/238446384808722433/819929391748481034/catvibe.gif') {message.delete();
        var guild1 = client.guilds.cache.get('338731263697616897')
        var  channel1 = guild1.channels.cache.get('832901660455206942')
        sendMessage(channel1, `<@${message.author.id}> Only Vibes`, 5)
    }
    }
    

    
    let slur = ['nig ', 'niggu', 'nigg', 'n1g', 'nigger', 'kneeg ', 'knig ', 'negg ', 'negro ', 'kike ', 'fag ', 'faggot'];

    let foundInTextSlur = false;
    for (var i in slur) {
    if(message.content.toLowerCase().includes(slur[i].toLowerCase())) foundInTextSlur = true;
    }

    const deletedEmbed = new Discord.MessageEmbed()
        .setAuthor(`Deleted message in #${message.channel.name}.`)
        .setColor(`#1291f3`)
        .setDescription(`${message.content}`)
        .setThumbnail(message.author.avatarURL())
        .setFooter(`${message.author.username}#${message.author.discriminator}`, message.author.avatarURL());

    if(foundInTextSlur) {
    if (message.guild.id == 826338678401925120){
        
        
        var channel = guild.channels.cache.get('833640023139549236')
        sendMessage(channel, deletedEmbed, -1);
        message.delete();
        sendMessage(message.channel, `<@${message.author.id}> Watch your language`, 5)

    }

    if (message.guild.id == 338731263697616897){
        
        
        var channel = guild.channels.cache.get('758000180900397174')
        sendMessage(channel, deletedEmbed, -1);
        message.delete();
        sendMessage(message.channel, `<@${message.author.id}> Watch your language`, 5)

    }
    
    }
    
     if (message.activity!= null) 
     {
         if (message.activity.partyID == 'spotify:301773357072908290'){
         message.channel.send('Nah fam I don\'t have spotify Premium')
     }
    }

})




client.on('messageDelete', message =>{

    
    // var guild = client.guilds.cache.get(message.guild.id)
    
    // const deletedEmbed = new Discord.MessageEmbed()
    //     .setAuthor(`Deleted message in #${message.channel.name}`)
    //     .setColor(`#1291f3`)
    //     .setDescription(`${message.content}`)
    //     .setThumbnail(message.author.avatarURL())
    //     .setFooter(`${message.author.username}#${message.author.discriminator}`, message.author.avatarURL())

    

    // if (message.guild.id == 826338678401925120) 
    
    // {   
    //    var channel = guild.channels.cache.get('833640023139549236')
    //     sendMessage(channel, deletedEmbed, -1)
    // }

    // if (message.guild.id == 338731263697616897) 
    // {
    //     var channel = guild.channels.cache.get('758000180900397174')
    //     sendMessage(channel, deletedEmbed, -1)
    // }

})

client.login(config.token);
