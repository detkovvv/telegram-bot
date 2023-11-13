const {mainMenu} = require("../utils/buttons");

const start = ctx => ctx.reply('Привет, я расскажу тебе о погоде', {
    ...mainMenu
});

const backMenu = ctx => ctx.reply('Ты находишься в меню', {
    ...mainMenu
})

// Команда для входа в сцену Base
const startWhatWeather = ctx => {
    // console.log(ctx)
    /*
    1. Бот запрашивает геопозицию человека в ТГ
    2. Человек по кнопке или через вложения отправляет своё местоположение
    3. Нам приходят даннные и мы отправляет через API запрос по погоде по координатам его
    4. Обработка
    */
    // входим в зарегистрированную в bot.js (15 строка) сцену
    return ctx.scene.enter('weather');
}

module.exports = {
    start,
    backMenu,
    startWhatWeather
}