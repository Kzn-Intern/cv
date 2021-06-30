const { DiscordAPIError } = require("discord.js")
const Discord = require('discord.js')
const config = require('../db/config.json')


module.exports = {
    run: async (bot, message, args) => {
        if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send(new Discord.MessageEmbed()
        .setDescription('**\<a:856075535876751380:859543820366250004> | Vous n\'avez pas la permission d\'utiliser cette commande.**')
        .setColor('RED'))
        
        const member = message.mentions.members.first()
        if (!member) return message.channel.send(new Discord.MessageEmbed()
        .setDescription('**\<a:820748245584052286:859558158602993686> | Veuillez mentionner le membre à exclure.**')
        .setColor('RED'))
        if (member.id === message.guild.ownerID) return message.channel.send(new Discord.MessageEmbed()
        .setDescription('**\<a:855006243432300574:859558544936402944> - Vous ne pouvez pas exclure le propriétaire du serveur.**')
        .setColor('RED'))

        if (message.member.roles.highest.comparePositionTo(member.roles.highest) < 1 && message.author.id !== message.guild.ownerID) return message.channel.send(new Discord.MessageEmbed()
        .setDescription('**\<a:856075535876751380:859543820366250004> | Vous ne pouvez pas exclure ce membre.**')
        .setColor('RED'))

        if (!member.kickable) return message.channel.send(new Discord.MessageEmbed()
        .setDescription('**\<a:856075535876751380:859543820366250004> | Le bot ne peut pas exclure ce membre.**')
        .setColor('RED'))
        const reason = args.slice(1).join(' ') || 'Aucune raison fournie'
        await member.kick(reason)
        message.channel.send(new Discord.MessageEmbed()
        .setDescription(`**\<a:856075500342214656:859483640698372106> | ${member.user.tag} a été exclu par ${message.author.username} !**`)
        .setColor('GREEN'))
    }
}
module.exports.config = {
    name: 'kick'
}
 