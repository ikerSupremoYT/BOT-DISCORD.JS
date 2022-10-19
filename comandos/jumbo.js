const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed} = require('discord.js');
const db = require ('megadb')
const blacklist = new db.crearDB('blacklist')


module.exports = {
  name: "jumbo",
  alias: [],

  execute (client, message, args){

    const user = message.author;

    if(blacklist.tiene(user.id)) return message.channel.send("No puedes usar este comando")

if(!args[0]) return message.channel.send("Debes poner un emoji...")

let emoji = message.guild.emojis.cache.find(x => x.name === args[0].split(":")[1])
if(!emoji)return message.channel.send("Ese no es un emoji valido...")

const embed = new Discord.MessageEmbed()
.setTitle("Emoji")
.setImage(emoji.url)
.setColor("RANDOM")

    message.channel.send(embed)

  }

}