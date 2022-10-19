const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed} = require('discord.js');
const db = require ('megadb')
const blacklist = new db.crearDB('blacklist')

module.exports = {
  name: "say",
  alias: [],

  execute (client, message, args){

    const user = message.author;

    if(blacklist.tiene(user.id)) return message.channel.send("No puedes usar este comando")

const palabra = args.join(' ')
if(!palabra) return message.channel.send('Debes poner algo para que lo pueda decir')
    message.channel.send(palabra)
    message.delete()

  }

}