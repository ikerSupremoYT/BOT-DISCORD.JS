const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
  name: "howgay",//Nombre del comando
  alias: ["gay"],//Alias del comando (Por si quieres activar el comando de 2 maneras)
  execute (client, message, args) {

 
    let respuestas = [Math.floor(Math.random() * 100)]
    let random = respuestas[Math.floor(Math.random() * respuestas.length)];
    let dinero = [Math.floor(Math.random() * 100)]
    let dn = dinero[Math.floor(Math.random() * respuestas.length)];
   let salud = [Math.floor(Math.random() * 100)]
    let sl = salud[Math.floor(Math.random() * respuestas.length)];
   let suerte = [Math.floor(Math.random() * 100)]
    let sr = suerte[Math.floor(Math.random() * respuestas.length)];
    const embed = new Discord.MessageEmbed()
    .setTitle("Que tan gey eres?")
    .addField("Eres" ,`\n**${random}%** **gei :gay_pride_flag:**`)
    .setTimestamp()
    .setColor(0x00ffeb)
    .setFooter("Consultado por " + message.member.displayName, message.author.displayAvatarURL())

    message.channel.send({ embeds: [embed] })

  }

} 