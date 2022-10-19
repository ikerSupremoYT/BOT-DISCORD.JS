const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed} = require('discord.js');
const db = require ('megadb')
const blacklist = new db.crearDB('blacklist')

module.exports = {
  name: "kiss",
  alias: [],

  execute (client, message, args){

    let user = message.mentions.users.first()
    if(!user) return message.channel.send("Debes mencionar a alguien")
    if(user == message.author) return message.channel.send("no te puedes besar a ti mismo")
    if(blacklist.tiene(user.id)) return message.channel.send("No puedes usar este comando")

    const embed1 = new Discord.MessageEmbed()    

    .setTitle(`${message.author.username} beso a ${user.username} UwU`)
    .setImage('https://media.giphy.com/media/bGm9FuBCGg4SY/giphy.gif')
    .setColor("#db7dfd")
    .setFooter("v0.0")
    
    const embed2 = new Discord.MessageEmbed()    

    .setTitle(`${message.author.username} beso a ${user.username} OwO`)
    .setImage('https://media.giphy.com/media/lBGj9wHG59Xr2/giphy.gif')
    .setColor("#db7dfd")
    .setFooter("v0.0")

    const embed3 = new Discord.MessageEmbed()    

    .setTitle(`${message.author.username} beso a ${user.username} 0///0`)
    .setImage('https://media.giphy.com/media/vUrwEOLtBUnJe/giphy.gif')
    .setColor("#db7dfd")
    .setFooter("v0.0")
    
    const embed4 = new Discord.MessageEmbed()    

    .setTitle(`${message.author.username} beso a ${user.username} U3U`)
    .setImage('https://media.giphy.com/media/jR22gdcPiOLaE/giphy.gif')
    .setColor("#db7dfd")
    .setFooter("v0.0")

    const embed5 = new Discord.MessageEmbed()    

    .setTitle(`${message.author.username} beso a ${user.username} UvU`)
    .setImage('https://media.giphy.com/media/zkppEMFvRX5FC/giphy.gif')
    .setColor("#db7dfd")
    .setFooter("v0.0")
    
    const embed6 = new Discord.MessageEmbed()    

   .setTitle(`${message.author.username} beso a ${user.username} Ewe`)
    .setImage('https://media.giphy.com/media/87vvTexnItOkE/giphy.gif')
    .setColor("#db7dfd")
    .setFooter("v0.0")
    
    const embed7 = new Discord.MessageEmbed()    

   .setTitle(`${message.author.username} beso a ${user.username} 💜`)
    .setImage('https://media.giphy.com/media/Ka2NAhphLdqXC/giphy.gif')
    .setColor("#db7dfd")
    .setFooter("v0.0")
    
    const embed8 = new Discord.MessageEmbed()    

   .setTitle(`${message.author.username} beso a ${user.username} UwU`)
    .setImage('https://media.giphy.com/media/bGm9FuBCGg4SY/giphy.gif')
    .setColor("#db7dfd")
    .setFooter("v0.0")

    const embeds = [embed1, embed2, embed3, embed4, embed5, embed6, embed7, embed8]

    let embedfinal = embeds[Math.floor(Math.random() * embeds.length)]

    message.channel.send(embedfinal)

  }

}