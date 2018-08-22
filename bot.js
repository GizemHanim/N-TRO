const Discord = require('discord.js');
const bot = new Discord.Client();
const RichEmbed = new Discord.RichEmbed();
var fs = require('fs');

// -->COMMANDS<--

bot.on('guildMemberAdd',member =>{
    member.send(':stuck_out_tongue: Merhaba Kanka Nasılsın Yeni Bİ Sunucu Actık Gelmek İstermisin Link:https://discord.gg/9QaYx9m :stuck_out_tongue:');

    //member.guild.defaultChannel.sendmessage(`stuck_out_tongue: Merhaba Kanka Nasılsın Yeni Bİ Sunucu Actık Gelmek İstermisin Link:https://discord.gg/9QaYx9m :stuck_out_tongue:"`);

});


bot.on('guildMemberRemove', member=>{
   
});



bot.on('ready',()=> {
console.log('NEGRONN');

});

bot.login(process.env.BOT_TOKEN);
