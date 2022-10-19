const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed} = require('discord.js');
const db = require ('megadb')
const blacklist = new db.crearDB('blacklist')

module.exports = {
  name: "saych",
  alias: [],

  execute (client, message, args){

    const user = message.author;

    if(blacklist.tiene(user.id)) return message.channel.send("No puedes usar este comando")

let canal = message.mentions.channels.first()

let texto = args.slice(1).join(' ')

canal.send(texto)

  }

}