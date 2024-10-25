const { Telegraf } = require('telegraf')

const bot = new Telegraf('7966736743:AAGJKZksiWW-hOdvCYoa4l8tZ5UHJBqmD2Y')
bot.start((ctx) => ctx.reply('Hello'))
bot.on('message',(ctx)=> {
    console.log(ctx.message);
})
bot.launch()
bot.physic_List1((ctx) => ctx.reply(''))
// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
