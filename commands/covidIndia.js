const axios = require('axios')
const Discord = require ('discord.js')

module.exports = {
    commands: 'covidIndia',
    callback: (message, arguments, text) => {
        axios.get('https://corona.lmao.ninja/v2/countries?yesterday&sort')
        .then((res) => {
            // console.log('RES:', res.data[0].url)
            // message.channel.send(res.data[0].url)
            const covidEmbed = new Discord.MessageEmbed()
        .setColor('#00ff00')
        .setTitle('India')
        .setAuthor(`Covid - 19 stats`)
        .setThumbnail('https://greenmario.hep.gg/Ekosa4oqR.png')
        .setDescription(`Total number of cases: ${res.data[93].cases}`)
        .addFields(
            {name: 'New Cases', value: res.data[93].todayCases},
            {name: 'Total Recovered', value: res.data[93].recovered},
            {name: 'Recovered Today', value: res.data[93].todayRecovered},
            {name: 'Active Cases', value: res.data[93].active},
        )
        .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL())

        
            message.channel.send(covidEmbed)
            .catch(console.error)
                })
    // message.channel.send(catEmbed)
  
    .catch((err) => {
        console.error('ERR:', err)
    })
}
}