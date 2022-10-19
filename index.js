const { Client, Collection, Guild} = require('discord.js');
const Discord = require('discord.js')
const client = new Discord.Client();

const fs = require('fs')

const Prefix = 'Tu prefix';

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./comandos').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./comandos/${file}`);
  client.commands.set(command.name, command);
}

client.on("ready", () => {
  function presence() {
    client.user.setPresence({
      status: 'on',
      activity: {
        name: 'AYUDA? KX!help',
        type: 'WACHTING'
      }
    })
  }

client.on('message', (message) =>{

    if(!message.content.startsWith(Prefix)) return;
    if(message.author.bot) return;

    let usuario = message.mentions.members.first() || message.member;
    const args = message.content.slice(Prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    let cmd = client.commands.find((c) => c.name === command || c.alias && c.alias.includes(command));
    if(cmd){
      cmd.execute(client, message, args)
    }
});

  
  presence();
    console.log("hora de xd");
 }); 

client.on('guildMemberAdd', (member) => { 
const embed = new Discord.MessageEmbed()

.setTitle(`${member.user.username} Bienvenid@`)
.setDescription(`Bienvenid@ a este clan`)
.setFooter("Gracias por entrar UwU")
.setColor("RANDOM")
.setTimestamp()


client.channels.cache.get('1031663626890780719').send(embed)
    
})

client.on('guildMemberRemove', (member) => {

  const embed = new Discord.MessageEmbed()
  
  .setTitle("Se nos fue uno del clan")
  .setDescription(`El usuario **${member.user}** ah abandonado el servidor`)
  .setColor("BLACK")
  .setFooter("xd >:c")
  .setTimestamp()


  client.channels.cache.get('1031663626890780720').send(embed)
})

//Código Anti-Crasheo
process.on("unhandledRejection", async (err) => {
  const channel = client.channels.cache.get("1031663627608006715");
  channel.send(`Error en consola!\n\`\`\`js\n${err}\`\`\``);
});

client.login("tu token your token");
