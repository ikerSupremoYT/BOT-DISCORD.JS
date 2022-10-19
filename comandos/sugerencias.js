const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed} = require('discord.js');
const db = require('megadb')
const cosa = new db.crearDB('canalsugerencias')
const blacklist = new db.crearDB('blacklist')

module.exports = {
  name: "sugerencia",
  alias: ["sgr"],

async execute (client, message, args){

  const user = message.author;

  if(blacklist.tiene(user.id)) return message.channel.send("No puedes usar este comando")

    const canal = await cosa.obtener(`${message.guild.id}`, `${message.channel.id}`)
    const canalsugerencia = client.channels.cache.get(canal)
  
    if(!cosa.tiene(`${message.guild.id}`, `${message.channel.id}`)) {
    message.channel.send("Este servidor no tiene un canal de sugerencias")

    return;
    }

    const usuario = message.author

    const sugerencia = args.join(" ")
    if(!sugerencia) return message.channel.send("Debes poner que quieres sugerir")

    const embed = new Discord.MessageEmbed()

    .setTitle("llego una Sugerencia")
    .setAuthor(usuario.tag, message.author.displayAvatarURL())
    .setDescription(`${sugerencia}`)
    .setColor("RANDOM")
    .setFooter("Si quieres mandar una sugerencia escribe .sugerencia o .sgr")

    const embedbueno = new Discord.MessageEmbed()

    .setTitle("Todo salio bien")
    .setDescription("La sugerencia fue enviada al canal <#1027611352828743710>")
    .setColor("BLUE")

    message.channel.send(embedbueno)

    canalsugerencia.send(embed).then(async msg => {
        await msg.react('✅');
        await msg.react('❌')
    })

  }

}