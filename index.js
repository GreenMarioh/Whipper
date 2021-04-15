const Discord = require ('discord.js')
const client = new Discord.Client()
const config = require ('./config.json')
const command = require('./command')
const sendMessage = require ('./send-message')
const { prefix } = require ('./config.json')
const stratsList = require ('./script')
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
    // console.log(stratsList.bindStratsAttackers[1][0])

    // command(client, ['ping', 'ding'], message =>{
    //     message.channel.send(`Ping is **${Date.now() - message.createdTimestamp}ms**. API Latency is ***${Math.round(client.ws.ping)}ms***`)
    // })

    
    

    const guildMansion = client.guilds.cache.get('338731263697616897')
    const channelLounge = guildMansion.channels.cache.get('796449773938933810')
    
    // sendMessage(channelLounge, 'Send message test', 10)
    // const t = 1
    // while ( t > 0){
    //     sendMessage(channelLounge, 'Pin message test', 10);
        
    //     t++
    // }

    // command(client, 'spam', message =>{
    //     if (message.content.toLowerCase() === `${prefix}spam`){
    //         message.channel.send('You didn\'t specify anything');
    //         return;
    //     }
    //     var spamContent = message.content.replace(`${prefix}spam `, '') 
        
        // if (message.guild.id = guildMansion){
        //     message.channel.send('Disabled in this server');
        //     return;
        // }
    //     if(message.author.bot) return; 

    //     else if (spamContent.includes('301773357072908290')){
    //         message.channel.send('lmao don\'t spam GreenMario');
    //         return;
    //         }
        
        
            
    //         for (i =0; i < 5; i++){
    //             message.channel.send(spamContent)
    //         }
       
    // })

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

    // command(client, 'Cheesed', message=>{ 
    //     message.channel.send('Check DMs')
    // })
    // privateMessage(client, '>Cheesed', 'https://cdn.discordapp.com/emojis/755967495701004318.png?v=1')

    // command(client, 'textchannel', (message) =>{
    //     const name = message.content.replace('>textchannel ', '')

    //     message.guild.channel
    //     .create(name, {
    //         type: 'text',
    //     }).then((channel)=> {
    //         console.log(channel)
    //     })
    // }) 

    

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
    
    
    // command(client, 'userinfo', message =>{
    //     const {user} = message
    //     const {createdAt, username} = user
    //     const userEmbed = new Discord.MessageEmbed()
    //     .setColor('ohs28h')
    //     .setTitle(`Userinfo for ${username}`)
    //     .addFields({
    //         name: 'Created at',
    //         value: createdAt
    //     })
    //     message.channel.send(userEmbed)
    // })
    
    // command(client, 'ban', message =>{
    //     const {member, mentions} = message
    //     if (member.hasPermission('ADMIN') || member.hasPermission('BAN_MEMBER')){
    //             const target = mentions.users.first()
    //             if (target){
    //                 const targetMember = message.guild.members.cache.get(target.id)
    //                 targetMember.ban()
    //                 message.channel.send(`<@${member.id}> has been banned`)
    //             } else {
    //                 message.channel.send(`<@${member.id}> You did not specify someone to ban.`)
    //             }
    //     } else {
    //         message.channel.send(`<@${member.id}> You do not have the permission to use this command.`)
    //     }
    // })

    
    // command(client, 'kick', message =>{
    //     const {member, mentions} = message
    //     if (member.hasPermission('ADMIN') || member.hasPermission('KICK_MEMBER')){
    //             const target = mentions.users.first()
    //             if (target){
    //                 const targetMember = message.guild.members.cache.get(target.id)
    //                 targetMember.ban()
    //                 message.channel.send(`<@${member.id}> has been kicked`)
    //             } else {
    //                 message.channel.send(`<@${member.id}> You did not specify someone to kicked.`)
    //             }
    //     } else {
    //         message.channel.send(`<@${member.id}> You do not have the permission to use this command.`)
    //     }
    // })

    const guild = client.guilds.cache.get('826338678401925120')
    const channel = guild.channels.cache.get('826338678401925123')
    // sendMessage(channel, 'Test', 3)

    // Beginning of random strats list

 command(client, 'strat', message =>{
        const messageContent = message.content.replace('>strat ', '')
        var stratDescription
        var stratTitle
        
       if (messageContent.toLowerCase() === 'bind attack'){
            var choice = Math.floor(Math.random() * stratsList.bindStratsAttackers.length)
            stratNameBindAttack = stratsList.bindStratsAttackers[choice][0];
            stratBindAttack = stratsList.bindStratsAttackers[choice][1];
            
            stratTitle = stratNameBindAttack;
            stratDescription = stratBindAttack;
        }

        else if (messageContent.toLowerCase() === 'bind defense'){
            var choice = Math.floor(Math.random() * stratsList.bindStratsDefenders.length)
            stratNameBindDefense = stratsList.bindStratsDefenders[choice][0];
            stratBindDefense = stratsList.bindStratsDefenders[choice][1];

            stratTitle = stratNameBindDefense;
            stratDescription = stratBindDefense;
        }
        else if (messageContent.toLowerCase() === 'haven defense'){
            var choice = Math.floor(Math.random() * stratsList.havenStratsDefenders.length)
            stratNameHavenDefense = stratsList.havenStratsDefenders[choice][0];
            stratHavenDefense = stratsList.havenStratsDefenders[choice][1];

            stratTitle = stratNameHavenDefense;
            stratDescription = stratHavenDefense;
        }
        else if (messageContent.toLowerCase() === 'haven attack'){
            var choice = Math.floor(Math.random() * stratsList.havenStratsAttackers.length)
            stratNameHavenAttack = stratsList.havenStratsAttackers[choice][0];
            stratHavenAttack = stratsList.havenStratsAttackers[choice][1];

            stratTitle = stratNameHavenAttack;
            stratDescription = stratHavenAttack;
        }
        else if (messageContent.toLowerCase() === 'split attack'){
            var choice = Math.floor(Math.random() * stratsList.splitStratsAttackers.length)
            stratNameSplitAttack = stratsList.splitStratsAttackers[choice][0];
            stratSplitAttack = stratsList.splitStratsAttackers[choice][1];

            stratTitle = stratNameSplitAttack;
            stratDescription = stratSplitAttack;
        }
        else if (messageContent.toLowerCase() === 'split defense'){
            var choice = Math.floor(Math.random() * stratsList.splitStratsDefenders.length)
            stratNameSplitDefense = stratsList.splitStratsDefenders[choice][0];
            stratSplitDefense = stratsList.splitStratsDefenders[choice][1];

            stratTitle = stratNameSplitDefense;
            stratDescription = stratSplitDefense;
        }
        else if (messageContent.toLowerCase() === 'ascent attack'){
            var choice = Math.floor(Math.random() * stratsList.ascentStratsAttackers.length)
            stratNameAscentAttack = stratsList.ascentStratsAttackers[choice][0];
            stratAscentAttack = stratsList.ascentStratsAttackers[choice][1];

            stratTitle = stratNameAscentAttack;
            stratDescription = stratAscentAttack;
        }
        else if (messageContent.toLowerCase() === 'ascent defense'){
            var choice = Math.floor(Math.random() * stratsList.ascentStratsDefenders.length)
            stratNameAscentDefense = stratsList.ascentStratsDefenders[choice][0];
            stratAscentDefense= stratsList.ascentStratsDefenders[choice][1];

            stratTitle = stratNameAscentDefense;
            stratDescription = stratAscentDefense;
        }

        else if (stratTitle === undefined || stratDescription === undefined){
            message.channel.send(`**Usage:** \`${prefix}strat [mapName] [attack/defense]\``);
            return;}


            const stratEmbed = new Discord.MessageEmbed()
                .setAuthor('Random VALORANT Strat')
                .setColor('#FF4655')
                .setThumbnail('https://cdn.discordapp.com/emojis/683973971984777299.png')
                .setTitle(stratTitle)
                .setDescription(`<@${message.author.id}> ${stratDescription}`)
                .setFooter('Powered by valorantstratroulette.netlify.app and Captain Pre', message.author.displayAvatarURL())
                message.channel.send(stratEmbed)
            })    
           // End of strats list


    })

    



client.on('message', message => {

    if (message.content === '<:shut:759123030353510430>'){
        message.channel.send('<:Unshut:830511335078756372>')
    }

})


client.on('guildMemberAdd', member => {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.cache.find(ch => ch.name == 'fortnite-best-game');
    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    // Send the message, mentioning the member
    channel.send(`Hey ${member}`);
  });


client.login(config.token);
