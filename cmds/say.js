const { DiscordAPIError } = require("discord.js")
const Discord = require('discord.js')
const config = require('../db/config.json')
 
module.exports = {
    run: (bot, message, args) => {
        if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(new Discord.MessageEmbed()
        .setDescription('**\<a:856075535876751380:859543820366250004> | Vous n\'avez pas la permission d\'utiliser cette commande.**')
        .setColor('RED'))
        if (!args[0]) return message.channel.send(new Discord.MessageEmbed()
        .setDescription('**\<a:820748245584052286:859558158602993686> | Veuillez indiquer du texte à envoyer.**')
        .setColor('RED'))
        message.delete()
        message.channel.send(message.content.trim().slice(`${config.prefix}say`.length))
    },

}
module.exports.config = {
    name: 'say',
    cooldown: 10
}