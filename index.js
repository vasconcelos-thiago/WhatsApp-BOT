const qrcode = require('qrcode-terminal');

const { Client, LocalAuth } = require('whatsapp-web.js');

const client = new Client({
    authStrategy: new LocalAuth()
});


client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message_create', async (message) => {
	if (message.body === '?bomdia') {
		await message.reply('Bom dia. bem vindo ao nosso serviço de chatbot para whatsapp');
	}
});

client.initialize();


 

 
 