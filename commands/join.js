module.exports = {
    name: 'join',
    description: "this is love command!",
    execute(client, message, args, Discord){
        const VoiceChannel = message.member.voice.channel;
        if(!VoiceChannel) return message.reply("not connected")

        VoiceChannel.join().then(connection=>{
            connection.voice.setSelfDeaf(true);
        })

    }
}