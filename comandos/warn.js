const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed} = require('discord.js');
const db = require('megadb')
const warns = new db.crearDB('warns')

module.exports = {
  name: "warn",
  alias: [],

  execute (client, message, args){

    var perms = message.member.hasPermission("KICK_MEMBERS")
    if(!perms) return message.channel.send("No tienes permisos suficientes")

    let persona = message.mentions.users.first()
    if(!persona) return message.channel.send("Debes mencionar a alguien")

    var razon = args.slice(1).join(' ')
    if(!razon) {
      razon = 'No especificado'
    }

    if(!warns.tiene(`${message.guild.id}.${persona.id}`))
    warns.establecer(`${message.guild.id}.${persona.id}`, 0)

    warns.sumar(`${message.guild.id}.${persona.id}`, 1)
    
    message.channel.send(`El moderador **${message.author.tag}** warneo ah **${persona.tag}** por **${razon}**`)

    persona.send(`Fuiste warneado en **${message.guild.name}** por **${razon}**`)

  }

}