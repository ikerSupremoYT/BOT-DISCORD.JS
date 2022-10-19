const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed} = require('discord.js');

module.exports = {
  name: "report",
  alias: ['rpt'],

  execute (client, message, args){

const owner = message.guild.member('894623851261083689')
const user = message.author;

    const report = args.join(' ')
    if(!report) return message.channel.send('debes escribir lo que mandaras como reporte')

    const embed = new Discord.MessageEmbed()

.setTitle('Nuevo Reporte')
.addField("Usuario:",`${user.tag}`)
.addField("ID:",`${user.id}`)
.addField("Reporte:",`${report}`)
    .setTimestamp()
    .setColor('RED')
    .setThumbnail('https://media.discordapp.net/attachments/940768054915268618/941537925340995634/852643446589620226.png')

    message.channel.send('el reporte se envio correctamente')
    client.channels.cache.get('1027611352828743710').send(embed)
    owner.send(embed)

  }

}