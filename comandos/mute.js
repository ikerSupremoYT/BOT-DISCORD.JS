const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed} = require('discord.js');
const ms = require('ms');
const db = require('megadb');
const muterol = new db.crearDB("muterol")

module.exports = {
  name: "mute",
  alias: [],

 async execute (client, message, args){

    var perms = message.member.hasPermission("MANAGE_ROLES")

    if(!perms) return message.channel.send("No tienes permisos :(")
    
    let time = args[1]
    const embedmute = new Discord.MessageEmbed()
    .setTitle("Oh no...")
    .addField("Como usar",'{mute [usuario] [tiempo] [razon]')
    .addField("Descripccion",'mutea a un usuario')
    if(!time) return message.channel.send(embedmute)
    
    let timer = ms(time)
    let mencionado = message.mentions.members.first()
    if(!mencionado) return message.channel.send("Debes mencionar a alguien")

    var razon = args[2]
    if(!razon){
        razon = 'No especificado'
    }

    if(!muterol.tiene(message.guild.id)) return message.channel.send("Este servidor no tiene rol para mutear")

    let rol = await muterol.obtener(message.guild.id)

    if(mencionado.roles.cache.has(rol)) return message.channel.send("Este usuario ya esta muteado")

    mencionado.roles.add(rol)
    message.channel.send(`${mencionado} ah sido muteado durante ${time} por ${razon}`)
    mencionado.send(` sido muteado durante ${time} por ${razon}`)
    await setTimeout(async function(){
        await mencionado.roles.remove(rol)

        await message.channel.send("Se acabo el mute").catch(error => {
            message.channel.send(`Hubo un error ${error} :(`)
        })
    }, timer)

  }

}