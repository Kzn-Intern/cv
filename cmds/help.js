const { MessageEmbed } = require('discord.js')
const config = require('../db/config.json')

module.exports.run = async (bot, message, args) => {

    if(args[0] == `help`) return message.channel.send(`Veuillez juste faire ${config.prefix}help.`);

    if(args[0]) {
        let command = args[0];
        if(client.commands.has(command)) {
            command = client.commands.get(command)
            let SHembed = new MessageEmbed()
            .setColor('ORANGE')
            .setAuthor(`${message.guild.name} | Kz\'N`, message.author.displayAvatarURL({dynamic: true, size: 512}))
            .setThumbnail(bot.user.displayAvatarURL({dynamic: true, size: 512}))
            .setDescription(`Le préfix du bot est : \`${config.prefix}\`\n\n`)
            message.channel.send(SHembed)
    }}

    let cmdmember = `\`help\`,  \`serverinfo\`,  \`userinfo\` | \`Soon...\``
    let cmdadmin = `\`clear\`,  \`kick\`,  \`ban\` | \`Soon...\`\n\n`
    let cmdlinks = `\<:830170294605054013:859500277999992873> Invite me`
    if(!args[0]) {
        message.delete()
        let embed = new MessageEmbed() 
        .setAuthor(`Commande d'aide`, message.guild.iconURL({dynamic: true, size: 512}))
        .setColor('GREEN')
        .setDescription(`**\<:Yes:858304343814963210> | ${message.author.username}, le help t'a été envoyé en mp !**`)

        let Sembed = new MessageEmbed()
        .setColor('ORANGE')
        .setAuthor(`${message.guild.name}`, message.guild.iconURL({dynamic: true, size: 512}))
        .setThumbnail(message.author.displayAvatarURL({dynamic: true, size: 512}))
        .setDescription(`\n \<:780727288903237663:859522291964182578> **-** Le préfix du bot est : \`${config.prefix}\` \n\n \<:743412344247418884:859497629717233664> **-** Voici l'intégralité des commandes du bot \`${bot.user.username}\` \n\n`)
        .addField('<:743412337888854046:859495945858056243>  |  Utilitaires :', cmdmember)
        .addField('\n\n<:815181750367682580:859523650801631232>  |  Admin :', cmdadmin)
        .addField('\n Links : \n\n', cmdlinks)
        .setTimestamp()
        .setURL(`https://discord.com/api/oauth2/authorize?client_id=829152323937894431&permissions=8&scope=bot`)
        .setFooter('Kz\'N | Développement', bot.user.displayAvatarURL({dynamic: true, size: 512}))
        .setImage('https://i.pinimg.com/originals/14/b8/8c/14b88c191bc43aba9bdca58abbfdda9c.gif')
        message.channel.send(embed)
        message.author.send(Sembed)
    }

}

module.exports.config = {
    name: 'help'
}