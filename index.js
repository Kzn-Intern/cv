const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./db/config.json');
const fs = require('fs');

bot.commands = new Discord.Collection();

fs.readdir('./cmds/', (err, files) => {
    if(err) console.log(err)
    let jsfile = files.filter(f => f.split('.').pop() === 'js')
    if(jsfile.length <= 0) {
        console.log('[HANDLER]: Aucune commande trouvée')
    }

    jsfile.forEach((f, i) => {
        let props = require(`./cmds/${f}`);
        console.log(`[HANDLER]: ${f} Lancé !`)
        bot.commands.set(props.config.name, props)
    })
})

bot.on("ready", async () => {


    console.log(`(${bot.user.username}): Online`)


    const status = [
        () => `${bot.guilds.cache.size} Servers | ${config.prefix}help`,
    ]
    let i = 0
    setInterval(() => {
        bot.user.setActivity(status[i](), { type: 'WATCHING' })
        i = ++i % status.length
    }, 1e4)
})

bot.on("message", async message => {



    if (message.author.bot) return;
    if(message.channel.type === "dm") return;
    db.query(`SELECT * FROM server WHERE guild = ${message.guild.id}`, (err, req) => {

        console.log(req)

        if(req[0].setinsulte === 'off') {
            return;
        } else {

        let blacklisted = ['fdp', 'ntm', 'connard', 'pute', 'putain', 'ta gueule', 'nique', 'salope', 'PD', 'batard', 'putin', 'enfoiré', 'connare', 'fils de pute', 'bâtard', 'bicot', 'conasse', 'couille molle', 'débile', 'ducon', 'dugland', 'enculé', 'fachiste', 'imbécile', 'lavette']
        


        for(var i in blacklisted) {
            if(message.content.toLocaleLowerCase().includes(blacklisted[i].toLocaleLowerCase())) message.delete()


        
        }

    }
    })


    
    let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);

    // SELECT *
    db.query(`SELECT * FROM user WHERE user = ${message.author.id}`, async (err, req) => {
        if(err) throw err;

        if(req.length < 1) {
            message.channel.send('Nous allons vous enregistrer dans la base de données.')
            // INSERT
            db.query(`INSERT INTO user (user, username, message) VALUES (${message.author.id}, ?, ?)`, [message.author.username,message.content] ,function(err){
                if(err) throw err;
            })
        } else {
            return;
        }
    });


    let commandFile = bot.commands.get(command.slice(prefix.length))
    if (commandFile) commandFile.run(bot, message, args)



})
bot.on('guildMemberRemove', async member => {
    // DELETE
    db.query(`DELETE FROM user WHERE user = ${member.id}`)
})

bot.on('guildCreate', async guild => {
    db.query(`SELECT * FROM server WHERE guild = ${guild.id}`, async (err, req) => {
        if(err) throw err;

        if(req.length < 1) {
            sql = `INSERT INTO server (guild, setinsulte) VALUES (${guild.id}, 'off')`
            db.query(sql, function(err){
                if(err) throw err;
            })
        } else {
            return;
        }
    });
})


bot.login(process.env.token);

