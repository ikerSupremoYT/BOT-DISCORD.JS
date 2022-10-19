const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed} = require('discord.js');
const db = require('megadb')
const datosserver = new db.crearDB('datosserver')

module.exports = {
  name: "save",
  alias: [],

  execute (client, message, args){

    const user = message.author;
    
    const guarda = args.join(' ')
    if(!guarda) return message.channel.send('Debes escribir lo que guardas;\nun nombre un numero una frase etc (no se guardaran archivos como imagenes)')

datosserver.set(`${user.id}${message.content}`, 1)

message.channel.send(`Se ah Guardado con exito!\nsi quieres ver la lista de cosas guardadas escribe **.svlist**`)

  }

}