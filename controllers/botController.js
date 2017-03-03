// Telegram Bot
const TelegramBot = require('node-telegram-bot-api');
const token = process.env.TELEGRAMBOT_TOKEN;
// For TelegramBot <- Temporary
const Store = require('../models/store');

const bot = new TelegramBot(token, {
    polling: true
});

bot.on('message', (msg) => {
    console.log(msg.text);
    const chatId = msg.chat.id;

    Store.find({$or : [{'name': {
        $regex: msg.text,
        $options: "i"
    }}, {'catagory': {
        $regex: msg.text,
        $options: "i"
    }}]})
    .then(function(result) {
      if (!result.length) {
        bot.sendMessage(chatId, '¯\_(ツ)_/¯');
        bot.sendMessage(chatId, "Mohon maaf, pencarian anda tidak ditemukan ");
      } else {
        console.log(result);
        for (let i = 0; i < result.length; i++) {
          bot.sendMessage(chatId, result[i].name + " at floor " + result[i].floor);
        }
      }
        })
});
