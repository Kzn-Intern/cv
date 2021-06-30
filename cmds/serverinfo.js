
const Discord = require('discord.js')

module.exports.run = async(bot,message,args) => {

    let ServerEmbed = new Discord.MessageEmbed()
    .setAuthor(message.guild.name)
    .setThumbnail(message.guild.iconURL({dynamic: true, size: 512}))
    .addField('Nom du serveur :', `\<:855778001782046750:859570571419189258> \<:855778001782046750:859570571419189258> ${message.guild.name} \<:855778001782046750:859570571419189258> \<:855778001782046750:859570571419189258>`)
    .addField('\<:824621335858249778:859533915545796624> Propriétaire du serveur :', `   ${message.guild.owner}`)
    .addField('\<:783422194415435856:859525810212700181>  Membres :', message.guild.memberCount)
    .addField('\<:815181750367682580:859523650801631232>  Roles :', message.guild.roles.cache.size)
    .setColor('PURPLE')
    .setFooter('Information du serveur')
    .setTimestamp()

    message.channel.send(ServerEmbed)

}

module.exports.config = {
    name: 'serverinfo'
}

