const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed} = require('discord.js');
const db = require('megadb')
const warns = new db.crearDB('warns')

module.exports = {
  name: "unwarn",
  alias: [],

async  execute (client, message, args){

    var perms = message.member.hasPermission("KICK_MEMBERS")
    if(!perms) return message.channel.send("No tienes permisos")

    const user = message.mentions.members.first()
    if(!user) return message.channel.send("debes mencionar a un usuario")

    if(!warns.tiene(`${message.guild.id}.${user.id}`)) {
        warns.establecer(`${message.guild.id}.${user.id}`, 0)

        message.channel.send("este usuario no tiene warns")
    }

    const cantidad = await warns.obtener(`${message.guild.id}.${user.id}`)

    if(cantidad < 1) return message.channel.send("este usuario no tiene warns ")

    warns.restar(`${message.guild.id}.${user.id}`, 1)

    message.channel.send(`se le ah quitado **${cantidad}** warn ah **${user}**`)

    }

}