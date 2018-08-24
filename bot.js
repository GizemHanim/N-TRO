const Discord = require('discord.js');
const bot = new Discord.Client();
const RichEmbed = new Discord.RichEmbed();
var fs = require('fs');

// -->COMMANDS<--

bot.on('guildMemberAdd',member =>{
    member.send(':trophy: ŁłGҢƮ ØΓ ÐΛΓКΠΞSS https://discord.gg/Zdpn45c ▬▬▬▬▬▬▬▬▬▬▬ Sunucumuza Bekliyoruz..:trophy: Sorumluluk Sahibi Yetkililer :trophy: Uygun Ortam:trophy: Güzel Etkinlikler :trophy: Samimi Üyeler Sizde Aramıza Katılın.. -ŁØÐ Tagı Alarak takımımıza Katılabilirsiniz ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ https://cdn.discordapp.com/attachments/482554144020889611/482560523087642624/LIGHT_OF_DARKNESS.gif');

    //member.guild.defaultChannel.sendmessage(`Welcome "${member.user.username}"! Be sure to set your platform by typing "!role"`);

});


bot.on('guildMemberRemove', member=>{
   
});



bot.on('ready',()=> {
console.log('NEGRONN');

});

bot.login(process.env.BOT_TOKEN);
 
