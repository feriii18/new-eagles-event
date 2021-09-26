const { clear } = require('console');
const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = 'i';
const fs = require('fs');


client.on("ready", () =>{
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setPresence({
      status: "idle",  // You can show online, idle... Do not disturb is dnd
      game: {
          name: "-help",  // The message shown
          type: "PLAYING" // PLAYING, WATCHING, LISTENING, STREAMING,
      }
  });
});







client.on('ready', async () => {
  try {
     let serverIn = client.guilds.size;
     console.log(client.user.tag + ' has logged in!');

     function pickStatus() {
       let status = ['𝐄𝐀𝐆𝐋𝐄𝐒 𝐄𝐕𝐄𝐍𝐓'];
       let Status = Math.floor(Math.random() * status.length);

       client.user.setActivity(status[Status], {
         type: "PLAYING"
       });
    };
     setInterval(pickStatus, 10000);
   } catch (err) {
     console.log(err);
   }
});





  client.on("ready", function() {
    const channel = client.channels.cache.get("872354928109174825");
      if (!channel) return console.error("The channel does not exist!");
      channel.join()
    console.log("[*] Logged in ")
  })
  
  setInterval(async function() {
    const channel = client.channels.cache.get("872354928109174825");
    if (!channel) return console.error("The channel does not exist!");
    channel.join()
  }, 60000)
  





client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.on('message', message =>{
  if(!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if(command === 'erfan'){
    client.commands.get('erfan').execute(message, args);
} else if (command == 'rules'){
    client.commands.get('rules').execute(message, args, Discord);
} else if (command == 'age'){
    client.commands.get('age').execute(message, args, Discord);
} else if (command == 'bdm'){
    client.commands.get('bdm').execute(message, args, Discord);
} else if (command == 'fotoon'){
    client.commands.get('fotoon').execute(message, args, Discord);
} else if (command == 'zoha'){
    client.commands.get('zoha').execute(message, args, Discord);
} else if (command == "ali"){
    client.commands.get('ali').execute(message, args);
} else if (command == 'mhdie'){
    client.commands.get('mhdie').execute(message, args, Discord);
} else if (command == 'elnaz'){
    client.commands.get('elnaz').execute(message, args, Discord);
} else if (command == 'feri'){
    client.commands.get('feri').execute(message, args, Discord);
} else if (command == 'colorone'){
    client.commands.get('colorone').execute(message, args, Discord);
} else if (command == 'fafa'){
    client.commands.get('fafa').execute(message, args, Discord);
} else if (command == 'colortwo'){
    client.commands.get('colortwo').execute(message, args, Discord);
} else if (command == 'tag'){
    client.commands.get('tag').execute(message, args, Discord);
} else if (command == 'melika'){
    client.commands.get('melika').execute(message, args, Discord);
} else if (command == 'commands'){
    client.commands.get('commands').execute(message, args, Discord);
} else if (command == 'love'){
    client.commands.get('love').execute(message, args);
} else if (command == 'colorthree'){
    client.commands.get('colorthree').execute(message, args, Discord);
} else if (command == 'pvbotcommands'){
    client.commands.get('pvbotcommands').execute(message, args, Discord);
} else if (command == 'mafiaroles'){
    client.commands.get('mafiaroles').execute(message, args, Discord);
} else if (command == 'mafiakeycode10'){
    client.commands.get('mafiakeycode10').execute(message, args, Discord);
} else if (command == 'music'){
    client.commands.get('music').execute(message, args, Discord);
} else if (command == 'city1'){
    client.commands.get('city1').execute(message, args, Discord);
} else if (command == 'city2'){
    client.commands.get('city2').execute(message, args, Discord);
} else if (command == 'mafiakeycode12'){
    client.commands.get('mafiakeycode12').execute(message, args, Discord);
} else if (command == 'mafiarules'){
    client.commands.get('mafiarules').execute(message, args, Discord);
} else if (command == 'game'){
    client.commands.get('game').execute(message, args, Discord);
} else if (command == 'outofiran'){
    client.commands.get('outofiran').execute(message, args, Discord);
} else if (command == 'music2'){
    client.commands.get('music2').execute(message, args, Discord);
} else if (command == 'panyyz'){
    client.commands.get('panyyz').execute(message, args, Discord);
} else if (command == 'esps'){
    client.commands.get('esps').execute(message, args, Discord);
} else if (command == 'avatar'){
    client.commands.get('avatar').execute(client, message, args);
} else if (command == 'embed'){
    client.commands.get('embed').execute(client, message, args, Discord);
} else if (command == 'ping'){
    client.commands.get('ping').execute(message, args, Discord, client);
} else if (command == 'embedvote'){
    client.commands.get('embedvote').execute(client, message, args, Discord);
} else if (command == 'namecommands'){
    client.commands.get('namecommands').execute(message, args, Discord);
} else if (command == 'meme'){
    client.commands.get('meme').execute(message, args, Discord);
} else if (command == 'server'){
    client.commands.get('server').execute(message, args, Discord);
} else if (command == 'goth'){
    client.commands.get('goth').execute(message, args, Discord);
} else if (command == 'sajad'){
    client.commands.get('sajad').execute(message, args, Discord);
} else if (command == 'movie'){
    client.commands.get('movie').execute(message, args, Discord);
} else if (command == 'uptime'){
    client.commands.get('uptime').execute(client, message, args, Discord);
} else if (command == 'emojiinfo'){
    client.commands.get('emojiinfo').execute(client, message, args, Discord);
} else if (command == 'iq'){
    client.commands.get('iq').execute(client, message, args, Discord);
} else if (command == 'matin'){
    client.commands.get('matin').execute(message, args, Discord);
} else if (command == 'jeyda'){
  client.commands.get('jeyda').execute(message, args, Discord);
} else if (command == 'embd'){
  client.commands.get('embd').execute(message, args, Discord);
} else if (command == 'join'){
  client.commands.get('join').execute(client, message, args, Discord);
} else if (command == 'kiss'){
  client.commands.get('kiss').execute(client, message, args, Discord);
} else if (command == 'pat'){
  client.commands.get('pat').execute(client, message, args, Discord);
} else if (command == 'slap'){
  client.commands.get('slap').execute(client, message, args, Discord);
} else if (command == 'hug'){
  client.commands.get('hug').execute(client, message, args, Discord);
} else if (command == 'help'){
  client.commands.get('help').execute(client, message, args, Discord);
} else if (command == 'loopy'){
  client.commands.get('loopy').execute(client, message, args, Discord);
} else if (command == 'falhafez'){
  client.commands.get('falhafez').execute(client, message, args, Discord);
} else if (command == 'colorrole'){
  client.commands.get('colorrole').execute(client, message, args, Discord);
} else if (command == 'gameaddrole'){
  client.commands.get('gameaddrole').execute(client, message, args, Discord);
} else if (command == 'ghad'){
  client.commands.get('ghad').execute(client, message, args, Discord);
} else if (command == 'mafiarole'){
  client.commands.get('mafiarole').execute(client, message, args, Discord);
} else if (command == 'djad'){
  client.commands.get('djad').execute(client, message, args, Discord);
} else if (command == 'srel'){
  client.commands.get('srel').execute(client, message, args, Discord);
}




  if(command === 'join'){
    client.commands.get('join').execute(client, message, args, Discord);
}


  if(command === "unban"){
    if(!message.member.hasPermission("BAN_MEMBERS")) {
      return message.channel.send({
        embed: {
            "color": 0x909090,
            "author": {
              "name": ` **${message.author.username}**, Shoma Permission Lazem Baraye UnBan kardan Kasi Ro Nadarid! `
            }
          }
      })
    }
    
    if(!message.guild.me.hasPermission("BAN_MEMBERS")) {
      return message.channel.send({
        embed: {
            "color": 0x909090,
            "author": {
              "name": ` **${message.author.username}**, Shoma Permission Lazem Baraye UnBan kardan Kasi Ro Nadarid! `
            }
          }
      })
    }
    
    let userID = args[0]
      message.guild.fetchBans().then(bans=> {
      if(bans.size == 0) return 
      let bUser = bans.find(b => b.user.id == userID)
      if(!bUser) return
      message.guild.members.unban(bUser.user)
      return message.channel.send({
        embed: {
            "color": 0x909090,
            "author": {
              "name": ` **${message.author.username}**, User ${bUser.user} UnBan Shod `
            }
          } 
      });

  }) 

  }
});


client.login("ODkxODIzNjAzMTgyNjA0NDAw.YVD9dA.b4d1mpmbSHrZ45SzQOxj0x9Mu_Y");
