module.exports = client => {

    const channelID = '826338678401925120'
    client.on('guildMemberAdd', (member) =>{
        // console.log(member)

        const message = `Sup <@${member.id}>`
        const channel = member.guild.channels.cache.get(channelID)
        channel.send(message)
    })
}