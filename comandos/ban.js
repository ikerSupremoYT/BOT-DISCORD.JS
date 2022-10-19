const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed} = require('discord.js');

module.exports = {
  name: "ban",
  alias: [],

  execute (client, message, args){

if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("No tengo suficientes permisos :c")

let user = message.mentions.members.first();

let banReason = args.join(' ').slice(22);

if(!user) return message.channel.send("Debes mencionar a alguien")

if(message.member.roles.highest.comparePositionTo(user.roles.highest) <= 0)
return message.channel.send("No puedes banear a una persona de igual o mayor rango que tu!")

if(user === message.author) return message.channel.send("No te puedes banear a ti mismo ._.")

if(!banReason) return message.channel.send("Debes escribir una razon")

user.ban({reason: banReason})

    message.channel.send(`El usuario **${user}** fue baneado por **${banReason}** correctamente :D!`)

  }

}