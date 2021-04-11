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
        .setTitle('SoonTM')
        .setAuthor(`SoonTM`)
        .setImage()
        .setDescription(`Total number of cases: ${res.data[93].cases}`)
        .addFields(
            {name: 'Total Cases', value: 'Soon:tm:'},
            {name: 'Total Recovered', value: 'Sooon:tm:'},
            {name: 'Active Cases', value: 'I SAID SOONTM'},
        )
        .setThumbnail()
        .setFooter(`Invoked by ${message.author.username}`)

        
            message.channel.send(covidEmbed)
            .catch(console.error)
                })
    // message.channel.send(catEmbed)
  
    .catch((err) => {
        console.error('ERR:', err)
    })
}
}