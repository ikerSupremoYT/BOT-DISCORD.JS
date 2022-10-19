const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed} = require('discord.js');
const db = require ('megadb')
const blacklist = new db.crearDB('blacklist')

module.exports = {
  name: "snipe",
  alias: [],

  execute (client, message, args){

        const user = message.author;

    if(blacklist.tiene(user.id)) return message.channel.send("No puedes usar este comando")

    const channel = message.mentions.channels.first() || message.channel;
    const msg = client.snipes.get(channel.id)
    if(!msg){
        message.channel.send("No se ah borrado ningun mensaje")
    }else{
        const embed = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setTitle("Snipe")
        .setAuthor(`Mensaje de ${msg.delete.tag}`, msg.delete.displayAvatarURL())
        .addField("Canal",`<#${msg.canal.id}>`)
        .setDescription(msg.content)
        
        message.channel.send(embed)
    }



  }

}