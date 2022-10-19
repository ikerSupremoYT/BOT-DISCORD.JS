const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed} = require('discord.js');
const db = require ('megadb')
const blacklist = new db.crearDB('blacklist')

module.exports = {
  name: "ppt",
  alias: [],

  execute (client, message, args){

    const user = message.author;

    if(blacklist.tiene(user.id)) return message.channel.send("No puedes usar este comando")

    const opcion = args[0]
    if(!opcion) return message.channel.send("Debes elejir entre **Piedra**, **Papel** o **Tijera**")

    let opcionesbot = ['papel', 'piedra', 'tijera']
    let opcionbot = opcionesbot[Math.floor(Math.random() * opcionesbot.length)]

    if(opcion === 'tijera') {

    if(opcionbot === 'tijera'){

        const embed = new Discord.MessageEmbed()

        .setTitle("Empate")
        .setDescription(`El bot elijio **${opcionbot}** y tu **${opcion}**`)
        .setColor("PURPLE")

        return message.channel.send(embed)
    }
            if(opcionbot === 'papel'){
    
            const embed = new Discord.MessageEmbed()
    
            .setTitle("has Perdido")
            .setDescription(`El bot elijio **${opcionbot}** y tu **${opcion}**`)
            .setColor("RED")
    
            return message.channel.send(embed)
        }
        if(opcionbot === 'piedra'){
    
            const embed = new Discord.MessageEmbed()

            .setTitle("has Ganado")
            .setDescription(`El bot elijio **${opcionbot}** y tu **${opcion}**`)
            .setColor("BLUE")
    
            return message.channel.send(embed)
        }
}
if(opcion === 'piedra') {

    if(opcionbot === 'piedra'){

        const embed = new Discord.MessageEmbed()

        .setTitle("Empate")
        .setDescription(`El bot elijio **${opcionbot}** y tu **${opcion}**`)
        .setColor("PURPLE")

        return message.channel.send(embed)
    }
            if(opcionbot === 'papel'){
    
            const embed = new Discord.MessageEmbed()
    
            .setTitle("has Perdido")
            .setDescription(`El bot elijio **${opcionbot}** y tu **${opcion}**`)
            .setColor("RED")
    
            return message.channel.send(embed)
        }
        if(opcionbot === 'tijera'){
    
            const embed = new Discord.MessageEmbed()

            .setTitle("has Ganado")
            .setDescription(`El bot elijio **${opcionbot}** y tu **${opcion}**`)
            .setColor("BLUE")
    
            return message.channel.send(embed)
        }
}
if(opcion === 'papel') {

    if(opcionbot === 'papel'){

        const embed = new Discord.MessageEmbed()

        .setTitle("Empate")
        .setDescription(`El bot elijio **${opcionbot}** y tu **${opcion}**`)
        .setColor("PURPLE")

        return message.channel.send(embed)
    }
            if(opcionbot === 'tijera'){
    
            const embed = new Discord.MessageEmbed()
    
            .setTitle("has Ganado")
            .setDescription(`El bot elijio **${opcionbot}** y tu **${opcion}**`)
            .setColor("BLUE")
    
            return message.channel.send(embed)
        }
        if(opcionbot === 'piedra'){
    
            const embed = new Discord.MessageEmbed()
    
            .setTitle("has Perdido")
            .setDescription(`El bot elijio **${opcionbot}** y tu **${opcion}**`)
            .setColor("RED")
    
            return message.channel.send(embed)
        }
}

  }

}