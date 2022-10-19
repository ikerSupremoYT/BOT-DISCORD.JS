const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed} = require('discord.js');

module.exports = {
  name: "clear",
  alias: [],

 execute (client, message, args){

const cantidad = args.join(" ");

var perms = message.member.hasPermission("MANAGE_MESSAGES")
if(!perms) return message.channel.send("No tienes permisos")

if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No tengo suficientes permisos")

if(!cantidad) return message.channel.send("Debes escribir una cantidad")

if(cantidad === '0') return message.channel.send("Escribe una cantidad mayor a 0")
if(cantidad === '100') return message.channel.send("Debes escribir una cantidad entre 100 y 0")

message.channel.bulkDelete(cantidad).then(() => {
   message.channel.send(`**${cantidad}** mensajes borrados correctamente`).then(msg => {
     msg.react('✅')
           msg.awaitReactions((reaction, user) => {
        if(message.author.id !== user.id)
        return;
        if(reaction.emoji.name === '✅'){
          msg.delete()
        }
      })
      })
       })
}}