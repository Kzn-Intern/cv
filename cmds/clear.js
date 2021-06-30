const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')
const config = require('../db/config.json')

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(new Discord.MessageEmbed()
    .setDescription('**\<a:856075535876751380:859543820366250004>  Vous n\'avez pas la permission d\'utiliser cette commande.**')
    .setColor('RED')
    )
    const count = args[0]
    if (!/\d+/.test(count)) return message.channel.send(new Discord.MessageEmbed()
    .setDescription('**\<a:820748245584052286:859558158602993686> | Veuillez indiquer un nombre de messages à supprimer.**')
    .setColor('RED'))
    
    if (count < 1 || count > 99) return message.channel.send(new Discord.MessageEmbed()
    .setDescription('**\<a:856075535876751380:859543820366250004> | Le nombre de message doit être compris entre 1 et 99.**')
    .setColor('RED'))

    const { size } = await message.channel.bulkDelete(Number(count) + 1, true)
    message.channel.send(new Discord.MessageEmbed()
    .setDescription(`**\<a:856075500342214656:859483640698372106> | ${message.author.username} à supprimé \`${size - 1}\` messages !**`)
    .setColor('GREEN')).then(sent => sent.delete({timeout: 5e3}))
}

module.exports.config = {
    name: 'clear'
}