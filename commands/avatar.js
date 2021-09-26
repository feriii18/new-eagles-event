const Discord = require("discord.js");
module.exports = {
    name: "avatar",
    aliases: ['icon', 'pfp', 'profilepic', 'av'],
    description: "Displays users avatar",
      execute (Client, message, args, client) {
         if (message.channel.id === '805425292180848640') {
            const user = message.mentions.users.first() || message.author;
            message.channel.send(
               new Discord.MessageEmbed()
               .setTitle(`𝐄𝐀𝐆𝐋𝐄𝐒 𝗦𝗲𝗿𝘃𝗲𝗿 **${user.tag}'s Avatar **`)
               .setAuthor("𝐄𝐀𝐆𝐋𝐄𝐒 𝗦𝗲𝗿𝘃𝗲𝗿r","https://cdn.discordapp.com/attachments/881657474296447016/881927588564586506/81d23143-1176-4af0-abf0-7e9708de96b9.gif")
               .setFooter(`𝐄𝐀𝐆𝐋𝐄𝐒 Requested By ${message.author.username}`, message.author.displayAvatarURL())
               .setColor("#RANDOM")
               .setImage(user.displayAvatarURL({size: 4096, dynamic: true}))
                
               
   
            ).then((msg) => {
               msg.react('<a:004:853333209626837031>');
               msg.react('<a:804672611086368600:861273299560169502>');
               msg.react('<a:804672611086368503:861273764464427018>');
               msg.react('<a:85032530837687507775:861271252831698944>');
               msg.react('<a:80467261108636879999:861273114860453938>');
               msg.react('<a:804672611086368509:861273676023857152>');
               msg.react('<a:804672611086368604:861273453548797972>');
               
               
               message.delete();
               
           });
         }
         
         
             }
}