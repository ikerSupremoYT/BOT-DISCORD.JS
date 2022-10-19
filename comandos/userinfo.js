const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed} = require('discord.js');
const db = require ('megadb')
const blacklist = new db.crearDB('blacklist')

module.exports = {
  name: "userinfo",
  alias: ["info"],

  execute (client, message, args){

    const user = message.author;

    if(blacklist.tiene(user.id)) return message.channel.send("No puedes usar este comando")

let estados = {
  "online": "En Linea",
  "idle": "Ausente",
  "dnd": "No Molestar",
  "offline": "Desconectado/Invisible"
};

const member = message.mentions.members.first() || message.member;

function formatDate (template, date){
  var tiempo = 'YYYY:MM:DD:HH:mm:ss'.split(':')
  date = new Date(date || Date.now() - new Date().getTimezoneOffset() * 6e4)
  return date.toISOString().split(/[-:.TZ ]/).reduce(function (template, item, i) {
    return template.split(tiempo[i]).join(item)


}, template)
}

const embedinfo = new Discord.MessageEmbed()

.setColor("BLUE")
.setDescription(`**Informacion de ${member}**`)
.addField(`**Nombre**:`, `**${member.user.tag}**`)
.addField("**ID**:", `**${member.user.id}**`)
.addField("**Apodo del usuario:**", `${member.nickname !== null ?  `${member.nickname}`: 'ninguno'}`)
.addField("**Union al servidor:**", formatDate('DD/MM/YYYY, a las HH:mm:ss', member.joinedAt))
.addField("**Roles:**", member.roles.cache.map(roles => `\`${roles.name}\``).join(', '))
.addField("**Boost:**", member.premiumSince ? 'usuario booster' : 'usuario no booster')
.addField("Estado", estados[member.user.presence.status])
.setThumbnail(member.user.displayAvatarURL ({format: 'png', dynamic: 'true'}))


    message.channel.send(embedinfo)

  }

}