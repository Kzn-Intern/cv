const Discord = require('discord.js')
const mysql = require('mysql')

const db = mysql.createConnection({
        host: "localhost",
        password: "",
        user: "root",
        database: "kznbot"
})
module.exports.run = async(bot,message,args) => {

    let result = args[0]
    db.query(`UPDATE user SET message = '${result}' WHERE user = ${message.author.id}`)

    message.channel.send(new Discord.MessageEmbed()
    .setDescription(`** \<a:856075500342214656:859483640698372106> Votre message enregistré est maintenant** : \`${result}\``)
    .setColor('GREEN')
    )}

module.exports.config = {
    name: 'updateuser'
}