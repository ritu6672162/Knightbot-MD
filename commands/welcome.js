const { handleWelcome } = require('../lib/welcome');

async function welcomeCommand(sock, chatId, message, match) {
    // Check if it's a group
    if (!chatId.endsWith('@g.us')) {
        await sock.sendMessage(chatId, { text: 'This command can only be used in groups.' });
        return;
    }

    // Extract match from message
    const text = message.message?.conversation || 
                message.message?.extendedTextMessage?.text || '🦋 🇼𝐄𝐋𝐂𝐎𝐌𝐄 🦋 এতদিন কোথায় ছিলে পথ ভুলে তুমি কি এলে🥺👀🫂';
    const matchText = text.split(' ').slice(1).join(' ');

    await handleWelcome(sock, chatId, message, matchText);
}

module.exports = welcomeCommand;
