// Telegram Bot
const TelegramBot = require('node-telegram-bot-api');
const token = process.env.TELEGRAMBOT_TOKEN;
// For TelegramBot <- Temporary
const Store = require('../models/store');

const bot = new TelegramBot(token, {
    polling: true
});

bot.on('message', (msg) => {
    let word
    let floor
    const chatId = msg.chat.id;
    if (/floor/gi.test(msg.text)) {
        floor = Number(msg.text.match(/\d*/g).join(""))
        word = 'fkjhfsadhsaj dsajd hsajdhsa djsahdsa hdjsahdsa dsadjsadjsakdjsajdsa jdskaldsajfhasdfd sfhds fdshfdsjafh sdf'
    } else {
        word = msg.text
    }

    Store.find({
            $or: [{
                'name': {
                    $regex: word,
                    $options: "i"
                }
            }, {
                'catagory': {
                    $regex: word,
                    $options: "i"
                }
            }, {
                'floor': parseInt(floor)
            }]
        }).then(function(result) {
            if (!result.length) {
                bot.sendMessage(chatId, '¯\_(ツ)_/¯');
                bot.sendMessage(chatId, "Mohon maaf, pencarian anda tidak ditemukan ");
            } else {
                console.log(result);
                for (let i = 0; i < result.length; i++) {
                    bot.sendMessage(chatId, result[i].name + " at floor " + result[i].floor);
                }
            }
        }).catch((err) => {
          console.log(err)
        })
});
