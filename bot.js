require('dotenv').config();
const {Telegraf, Scenes} = require('telegraf');
const {session} = require('telegraf-session-mongoose')
const {start, backMenu, startWhatWeather} = require("./controllers/command");
const {CMD_TEXT} = require("./config/const");
const {whatWeatherScene} = require("./controllers/weatherScene");

const bot = new Telegraf(process.env.BOT_TOKEN);

const stage = new Scenes.Stage([whatWeatherScene])

const setupBot = () => {
    bot.use(session({collectionName: 'sessions'}));
    bot.use(stage.middleware());

    bot.use((ctx, next) => {
        console.log(ctx);
        return next();
    })
    bot.start(start);

    bot.hears(CMD_TEXT.menu, backMenu);
    bot.hears(CMD_TEXT.weatherI, startWhatWeather);

    return bot;
}

module.exports = {
    setupBot
}
