const Discord = require('discord.js')
const mysql = require('mysql')

const db = mysql.createConnection({
        host: "localhost",
        password: "",
        user: "root",
        database: "kznbot"
})
module.exports.run = async(bot,message,args) => {

    // SELECTIONNER DES INFOS
        db.query(`SELECT * FROM user WHERE user = ${message.author.id}`, async (err, req) => {

        message.channel.send(new Discord.MessageEmbed()
        .setAuthor(message.author.tag)
        .setThumbnail(message.author.displayAvatarURL({dynamic: true, size: 512}))
        .addField('\<a:849639525945049168:859521749594800180>  Nom de l\'utilisateur :', `${message.author.username}`)
        .addField('\<:824621245190504462:859522125522272257>  Tag :', `#${message.author.discriminator}`)
        .addField('\<:824620658243010570:859522577637572708>  ID :', message.author.id)
        .addField('\<:844537666719449098:859523383816355860>  Status :', message.author.presence.status)
        .addField('\<:783422895799009310:859523933849387070>  Created :', message.author.createdAt)
        .addField('Information de la base de données', '\<:833675610126942269:859525281823195196> \<:833675610126942269:859525281823195196> \<:833675610126942269:859525281823195196> \<:833675610126942269:859525281823195196> \<:833675610126942269:859525281823195196> \<:833675610126942269:859525281823195196> \<:833675610126942269:859525281823195196> \<:833675610126942269:859525281823195196> \<:833675610126942269:859525281823195196> \<:833675610126942269:859525281823195196>')
        .addField('\<:830170294605054013:859500277999992873>  Id enregistré :', req[0].user)
        .addField('<:823538221257588737:859524448909656075>  Username enregirsté :', req[0].username)
        .addField('\<:783422874748584007:859524749982040084>  Message enregistré :', req[0].message)
        .setColor('PURPLE')
        .setFooter('✤ Information sur vous ✤')
        .setTimestamp()

            )}
        )}

module.exports.config = {
    name: 'userinfo'
}