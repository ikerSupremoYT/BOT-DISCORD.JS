const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed} = require('discord.js');
const db = require ('megadb')
const blacklist = new db.crearDB('blacklist')

module.exports = {
  name: "ship",
  alias: [],

  execute (client, message, args){

    let user = message.mentions.users.first()
    if(!user) return message.channel.send("Debes mencionar a alguien")
    if(blacklist.tiene(user.id)) return message.channel.send("No puedes usar este comando")

    const embed1 = new Discord.MessageEmbed()    

    .setTitle("Ship")
    .setDescription(`${message.author.username} y ${user.username} se quieren un 2%\n no digas mamadas meriyein`)
    .setColor("RANDOM")
    .setFooter('v0.0 proximanente sera identico al de nekotina 🥶')
    
    const embed2 = new Discord.MessageEmbed()    

    .setTitle("Ship")
    .setDescription(`${message.author.username} y ${user.username} se quieren un 12%\npanas 🤝`)
    .setColor("RANDOM")
    .setFooter('v0.0 proximanente sera identico al de nekotina 🥶')

    
    const embed3 = new Discord.MessageEmbed()    

    .setTitle("Ship")
    .setDescription(`${message.author.username} y ${user.username} se quieren un 23%\nno`)
    .setColor("RANDOM")
    .setFooter('v0.0 proximanente sera identico al de nekotina 🥶')

    
    const embed4 = new Discord.MessageEmbed()    

    .setTitle("Ship")
    .setDescription(`${message.author.username} y ${user.username} se quieren un 63%\n puede ser?`)
    .setColor("RANDOM")
    .setFooter('v0.0 proximanente sera identico al de nekotina 🥶')

    const embed5 = new Discord.MessageEmbed()    

    .setTitle("Ship")
    .setDescription(`${message.author.username} y ${user.username} se quieren un 74%\n amor 💖`)
    .setColor("RANDOM")
    .setFooter('v0.0 proximanente sera identico al de nekotina 🥶')
    
    const embed6 = new Discord.MessageEmbed()    

    .setTitle("Ship")
    .setDescription(`${message.author.username} y ${user.username} se quieren un 85%\n UwU`)
    .setColor("RANDOM")
    .setFooter('v0.0 proximanente sera identico al de nekotina 🥶')
    
    const embed7 = new Discord.MessageEmbed()    

    .setTitle("Ship")
    .setDescription(`${message.author.username} y ${user.username} se quieren un 99%\n no man falto 1 para el 100`)
    .setColor("RANDOM")
    .setFooter('v0.0 proximanente sera identico al de nekotina 🥶')
    
    const embed8 = new Discord.MessageEmbed()    

    .setTitle("Ship")
    .setDescription(`${message.author.username} y ${user.username} se quieren un 100%\n mucho sexo`)
    .setColor("RANDOM")
    .setFooter('v0.0 proximanente sera identico al de nekotina 🥶')

    const embeds = [embed1, embed2, embed3, embed4, embed5, embed6, embed7, embed8]

    let embedfinal = embeds[Math.floor(Math.random() * embeds.length)]

    message.channel.send(embedfinal)

  }

}