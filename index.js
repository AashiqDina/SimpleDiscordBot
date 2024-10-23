const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

// Bot login with token
const token = '';
client.login(token);

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});


client.on('messageCreate', message => {

    const imRegex = /\bI['|’]?m (.+)/i;
    const match = message.content.match(imRegex);
    const DadJokesIgnoreUsers = ['', ''];
    const Content = message.content.toLowerCase();
    const GIFs = ['https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWpkNGV0ajk1bXRrb2FobXQ3d3dzaWFzbWo5aTBtaTNldzc2Z3pvbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ohhwfAa9rbXaZe86c/giphy.gif','https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2d0NTlnZ3gzb3hydnd1aHNkMWc0a3ZocHZkZXJlaDN5czBneDB4bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YrJp9LFIDkwms/giphy.gif','https://tenor.com/bBX3k.gif', 'https://tenor.com/mnAdgbR5acL.gif', 'https://tenor.com/bz6iS.gif', 'https://tenor.com/bLCLF.gif','https://tenor.com/bSS2n.gif','https://tenor.com/bfKqq.gif','https://tenor.com/bkubZ.gif','https://tenor.com/bztlj.gif','https://tenor.com/bY1QT.gif','https://tenor.com/bZsQn.gif','https://tenor.com/bWf7D.gif','https://tenor.com/bWKXLWDr2Hd.gif','https://tenor.com/85AQ.gif','https://tenor.com/qceMT5PNSBv.gif','https://tenor.com/eprvYzkf6YC.gif','https://tenor.com/fD7iCYPgItu.gif','https://tenor.com/bVADn.gif','https://tenor.com/bVsGB.gif','https://tenor.com/rvV9ojC0gJe.gif','https://tenor.com/c0bg8YueGLh.gif','https://tenor.com/quzGAWh5vbC.gif','https://tenor.com/s9ABwA970KI.gif','https://tenor.com/b0yYJmCH9fJ.gif','https://tenor.com/oAVwshEUUdm.gif','https://tenor.com/re5kEdlMIPK.gif','https://tenor.com/rIY2PCH0blo.gif','https://tenor.com/dZwpFV0IHIU.gif','https://tenor.com/eBRfbGSV04A.gif','https://tenor.com/vjlhCFqUtZb.gif'];

    if (message.content === '!Dice' || message.content === '!dice') {
        const DiceGIFChoice = Math.floor(Math.random() * 4) + 1;
        const Dice = Math.floor(Math.random() * 6) + 1;
        if(DiceGIFChoice == 1){
            const DiceGIF = 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2tiYTV4ajlucWM3MGdqMXhqZ2lwZmFlajc5Y2JxNzUwbWhyNmprMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/HRUboYorHt6sloh8cv/giphy.gif'
            message.reply(DiceGIF);
            message.channel.send(`You rolled a ${Dice}!`);
        }
        else if(DiceGIFChoice == 2){
            const DiceGIF = 'https://c.tenor.com/pqLcEORkjWwAAAAd/tenor.gif'
            message.reply(DiceGIF);
            message.channel.send(`You rolled a ${Dice}!`);
        }
        else if(DiceGIFChoice == 3){
            const DiceGIF = 'https://c.tenor.com/Xw-tNXs79IoAAAAC/tenor.gif'
            message.reply(DiceGIF);
            message.channel.send(`You rolled a ${Dice}!`);
        }
        else if(DiceGIFChoice == 4){
            const DiceGIF = 'https://c.tenor.com/O_dHPphIwCgAAAAC/tenor.gif'
            message.reply(DiceGIF);
            message.channel.send(`You rolled a ${Dice}!`);
        }
    }
    else if (message.content === '!Coin' || message.content === '!coin') {
        const Coin = Math.floor(Math.random() * 2) + 1;
        if(Coin == 1){
            const CoinGIF = 'https://c.tenor.com/-Ty-f7Ld7skAAAAd/tenor.gif';
            message.reply(CoinGIF);
            const CoinGIF2 = 'https://c.tenor.com/GRfeHRqpp5cAAAAd/tenor.gif';
            message.channel.send(CoinGIF2);    
        }
        else{
            const CoinGIF = 'https://c.tenor.com/-Ty-f7Ld7skAAAAd/tenor.gif';
            message.reply(CoinGIF);
            const CoinGIF2 = 'https://c.tenor.com/kK8D7hQXX5wAAAAC/tenor.gif';
            message.channel.send(CoinGIF2);    
        }
    }

    if (match) {
        if (DadJokesIgnoreUsers.includes(message.author.id)){
            return
        }
        const namePart = match[1];
        message.channel.send(`Aashiq says \"Hi ${namePart}, I'm Aashiq\"`);
    }


});

client.on('messageCreate', async message => {
    const Content = message.content.toLowerCase();
    if (message.content.startsWith('!delete') && message.author.id == '441656217383731221') {

        const Args = message.content.split(' ');
        const DeleteCount = parseInt(Args[1], 10);

        if (!DeleteCount || DeleteCount < 1 || DeleteCount > 100) {
            return message.reply('This bot can only delete up to 100 messages');
        }

        try {
            await message.channel.bulkDelete(DeleteCount, true);
            message.channel.send(`${DeleteCount} messages were successfullly deleted!`).then(msg => {
                setTimeout(() => msg.delete(), 5000);
            });
        } catch (error) {
            console.error(error);
            message.channel.send('Couldnt delete the messages');
        }
    }

});
