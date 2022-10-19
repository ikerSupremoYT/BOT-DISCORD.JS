const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require('megadb')
const blacklist = new db.crearDB('blacklist')

module.exports = {
  name: "help",
  alias: [],

  execute(client, message, args) {

    const user = message.author;

    if (blacklist.tiene(user.id)) return message.channel.send("**No puedes usar este comando**\nsi quieres que te quiten de la black list ve a <#914019991232339968> y intenta convencer a <@!628019870524768256> de el por que no debes estar en la black list")

    const embed = new Discord.MessageEmbed()

      .setTitle("Comandos del Bot")
      .addField("Economia🤑", 'work(w) = gana dinero\ncrime(sin alias) = comete un crimen\nbal(banco) = revisa cuanto dinero tienes')
      .addField("Diversion🌟", '8ball(bola8) = pregunta algo y ve si tienes suerte\nppt(sin alias) = juega al piedra papel y tijeras')
      .addField("Entretenimiento😴", 'ship(sin alias) = emparejate con otro usuario y ve si tienen suerte como pareja\nkiss(sin alias) = besa a otro usuario\nsnipe(sin alias) = ve lo que borro un usuario')
      .addField("Otros😎", 'jumbo(sin alias) = agranda un emoji\nuserinfo(info) = revisa las estadisticar de un usario\nsugerencia(sgr) = manda una sugerencia para el servidor, el bot, o los videos de youtube\nping(sin alias) = revisa el ping del bot\navatar(sin alias) = agranda el avatar de un usuario')
      .addField("Ayuda😔", 'report(rpt) = envia un reporte sobre el bot o un usuario\n')
      .addField("Comandos de Moderacion🥵", 'clear = borra una cantidad determinada de mensajes\nban = banea a un usuario\nkick = expulsa a un usuario\nmute = mutea a un usuario\nblacklist = agrega a un usuario a la blacklist\nwarn = warnea a un usuario\nwarns = revisa cuantos warns tiene un usuario\npoll(sin alias) = crea una encuesta')
      .setColor("#FF9999")
      .setThumbnail('https://cdn.discordapp.com/attachments/939396501375959080/939970431216140338/1296-catmaid.png')

    message.channel.send(embed)

  }
}