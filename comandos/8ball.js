const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed} = require('discord.js');

module.exports = {
  name: "8ball",
  alias: ["bola8"],

  execute (client, message, args){

  const pregunta = args.join(' ')
  if(!pregunta) return message.channel.send('Debes escribir lo que vas a preguntar')

  let respuestas = ['si','no','nose','talvez','puede','probablemente','exacto','VIVA PTC','a dormir carajo']

  const repuestafinal = respuestas[Math.floor(Math.random() * respuestas.length)]

  message.channel.send(`${repuestafinal}`)

  }

}