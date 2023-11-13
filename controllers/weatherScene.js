const {Scenes} = require("telegraf");
const {backButtonMenuAndLocation} = require("../utils/buttons");
const {getWeatherLocationCoord} = require("../services/getWeatherLocation");
const {CMD_TEXT} = require("../config/const");
const {backMenu} = require("./command");

const whatWeatherScene = new Scenes.BaseScene('weather');

whatWeatherScene.enter(ctx => ctx.reply('Пришли мне свою геопозицию'), {
    ...backButtonMenuAndLocation
});

whatWeatherScene.on('location', async ctx => {
    try {
        const msg = ctx.message;
        ctx.reply('Ищу погоду в базе данных');

        const {
            latitude,
            longitude
        } = msg.location;

        const data = await getWeatherLocationCoord({latitude, longitude});

        ctx.reply(`Сейчас у тебя ${data}`);


    } catch (error) {
        console.log(error);
        ctx.reply('Упс... Произошла какая-то ошибка')
    }
});

whatWeatherScene.hears(CMD_TEXT.menu, ctx => {
    ctx.scene.leave();
    return backMenu(ctx);
})

module.exports = {
    whatWeatherScene
}