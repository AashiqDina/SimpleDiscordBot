const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

// Bot login with token
const token = 'nope';
const GIPHY_API = 'nope';
client.login(token);

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

const ZakID = '527170687668977665';
const AaqilID = '474559839276630016';
const AceID = '441656217383731221';

client.on('messageCreate', async message => {

    const imRegex = /\bI['|’]?m (.+)/i;
    const match = message.content.match(imRegex);
    const DadJokesIgnoreUsers = ['1296424690121969746', '441656217383731221'];
    const Content = message.content.toLowerCase();

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
    else if (Content === '!id') {
        message.channel.send(message.author.id);
    }

    if(message.author.id === ZakID ){
        if(Content === 'i hate u' || Content === 'i hate you' || Content === 'i hate you so much' || Content === 'i hate you so much' || Content === 'bro i hate you' || Content === 'bro i hate u'){
            message.reply("Typical Zak, hating on everything");
        }
        if(Content === 'o' || Content === '0' || Content === 'ö'){
            message.reply("Nobody literally nobody: \n Zak:");
            const GIF = 'https://c.tenor.com/xNRuBYTeFH8AAAAd/tenor.gif';
            message.channel.send(GIF);
        }
        if(Content === 'stop'){
            const GIF = 'https://c.tenor.com/HWZPcgyaBG4AAAAC/tenor.gif';
            message.reply(GIF);
        }
        if(Content === 'why'){
            const GIF = 'https://c.tenor.com/at5xyyjzr_gAAAAC/tenor.gif';
            message.reply(GIF);
        }
        if(Content === 'shush'){
            const GIF = 'https://c.tenor.com/Bt7VJ0uQlSoAAAAC/tenor.gif';
            message.reply(GIF);
        }
        if(Content === 'what' || Content === 'wha'){
            message.reply("How bro felt after saying that:");
            const GIF = 'https://media.tenor.com/04HdN4Wgs6oAAAAi/azumanga-daioh-chiyo-chan.gif';
            message.channel.send(GIF);
        }
    }

    if (message.content.startsWith('!gif')) {
        const argument = message.content.split(' ').slice(1);
        const query = argument.join(' ') || 'funny';
    
        try {
          const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API}&q=${query}&limit=1`);
          const data = await response.json();
        
            if (data.data.length > 0) {
                const GIFUrl = data.data[0].images.original.url;
                message.channel.send(`${GIFUrl}`);
            } 
            else {
                message.channel.send(`Couldn't find any GIFs for "${query}".`);
            }} 
        catch (error) {
            console.error('An error has occured:', error);
          message.channel.send('Something fetching the GIF.');
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

    if(message.author.id != 441656217383731221 && (Content === 'shut up' || Content === 'shutup')){
        message.reply("NOW LISTEN HERE YOU LITTLE Sh****, IN THE NAME OF THE HOLY BEAN I SWEAR YOU WILL REGRET SAYING THAT");
        const Member = message.guild.members.cache.get(message.author.id)
        try{
            await Member.timeout(30000, "THIS IS WHY YOU DONT SAY SHUT UP!!!")
        }
        catch (error){
            console.error(error);
        }
    }

    if (Content.startsWith('!spamzak')) {
        const ZakAT = `<@${ZakID}>`;
        const Args = message.content.split(' ');
        const DeleteCount = parseInt(Args[1], 10);

        if (!DeleteCount || DeleteCount < 1 || DeleteCount > 100) {
            return message.reply('Can only message 100 time');
        }

        for(i = 0; i < DeleteCount; i++){
            message.channel.send(`${ZakAT}, you are being called!`);
        }
    }

    if (Content.startsWith('!spamaaqil')) {
        const AaqilAT = `<@${AaqilID}>`;
        const Args = message.content.split(' ');
        const DeleteCount = parseInt(Args[1], 10);

        if (!DeleteCount || DeleteCount < 1 || DeleteCount > 100) {
            return message.reply('Can only message 100 time');
        }

        for(i = 0; i < DeleteCount; i++){
            message.channel.send(`${AaqilAT}, you are being called!`);
        }
    }

    if (Content.startsWith('!spamaashiq')) {
        const AceAT = `<@${AceID}>`;
        const Args = message.content.split(' ');
        const DeleteCount = parseInt(Args[1], 10);

        if (!DeleteCount || DeleteCount < 1 || DeleteCount > 3) {
            return message.reply('Can only message 3 time');
        }

        for(i = 0; i < DeleteCount; i++){
            message.channel.send(`${AceAT}, you are being called!`);
        }
    }

});
