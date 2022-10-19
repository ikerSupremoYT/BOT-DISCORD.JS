const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed} = require('discord.js');

module.exports = {
  name: "poll",
  alias: [],

  execute (client, message, args){

    const user = message.author;

    var perms = message.member.hasPermission("ADMINISTRATOR")
    if(!perms) return message.channel.send('No tienes permisos')

    const titulo = args.join(' ')
    if(!titulo) return message.channel.send("debes decir el tema de la encuesta")

    const embed = new Discord.MessageEmbed()

    .setAuthor(`${user.username}`, user.displayAvatarURL({format: 'png', dynamic: 'true'}))
    .setTitle(`${titulo}`)
    .setDescription(`✅si\n❌no\n⭕talvez`)
    .setColor("#00ff7c")
    .setTimestamp()

    message.channel.send(embed).then(msg =>{
        msg.react('✅')
        msg.react('❌')
        msg.react('⭕')
    })
    message.delete()

  }

}