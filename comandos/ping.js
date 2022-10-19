const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed} = require('discord.js');
const db = require ('megadb')
const blacklist = new db.crearDB('blacklist')

module.exports = {
  name: "ping",
  alias: [],

  execute (client, message, args){

    const user = message.author;

    if(blacklist.tiene(user.id)) return message.channel.send("No puedes usar este comando")

    message.channel.send(`mi ping es de __**${client.ws.ping}**__`)

  }

}