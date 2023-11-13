require('dotenv').config({path: './config/.env'});

const mongoose = require('mongoose');
const {setupBot} = require("./bot");

(async function () {
    try {

        await mongoose.connect(process.env.BD_TOKEN, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            dbName: 'fghdetkov'
        })
        await setupBot().launch();

        /*
        const bot = setupBot();
        await bot.launch();

         */
        console.log('</ Бот успешно запущен >')
    } catch (error) {
        console.log('Ошибка запуска', error);
    }
}())