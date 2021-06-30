const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')
const config = require('../db/config.json')

const mysql = require('mysql');

const db = mysql.createConnection({
    host: "localhost",
    password: "",
    user: "root",
    database: "kznbot"
})
let sql;
module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send(new Discord.MessageEmbed()
    .setDescription('**\<a:856075535876751380:859543820366250004>  Vous n\'avez pas la permission d\'utiliser cette commande.**')
    .setColor('RED')
    )

    db.query(`SELECT * FROM server WHERE guild = ${message.guild.id}`, (err, req) => {


        if(req[0].setinsulte === 'off') {
            sql = `UPDATE server SET setinsulte = 'on' WHERE guild = ${message.guild.id}`
            db.query(sql, function (err) {
                if(err) throw err;
            })
            message.channel.send(new Discord.MessageEmbed()
            .setDescription(` **L\'anti-insulte à été activé par ${message.author.username} \<:Protect:858303959264919567>**`, message.guild.iconURL({dynamic: true, size: 512}))
            .setColor('GREEN')
        )}  else {
            sql = `UPDATE server SET setinsulte = 'off' WHERE guild = ${message.guild.id}`
            db.query(sql, function (err) {
                if(err) throw err;
            })
            message.channel.send(new Discord.MessageEmbed()
            .setDescription(`**L'anti-insulte à été désactivé par ${message.author.username} \<:Protect:858303959264919567>**`)
            .setColor('GREEN')
            )}
    })
}

module.exports.config = {
    name: 'anti-insulte'
}