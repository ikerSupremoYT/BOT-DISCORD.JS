const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed} = require('discord.js');
const db = require('megadb')
const datosserver = new db.crearDB('datosserver')

module.exports = {
  name: "svlist",
  alias: [],

execute (client, message, args){

  const user = message.author;

datosserver.get(`${user.id}, ${message.content}`)

message.channel.send(`${datosserver}`)

  }

}