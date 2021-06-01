const { Telegraf } = require('telegraf')
const bot = new Telegraf(process.env.TOKEN);
console.log("T is ==== ", process.env.TOKEN);

bot.command('start', ctx => {
    console.log(ctx.from)

    if(ctx.from.first_name==="Malvika")
        bot.telegram.sendMessage(ctx.chat.id, 'hi Stupid '+ctx.from.first_name+" "+ctx.from.last_name, {})
    else
    bot.telegram.sendMessage(ctx.chat.id, 'hi my lord '+ctx.from.first_name+" "+ctx.from.last_name, {})

})

bot.command('hi', ctx => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, 'hi you jerk', {
    })
})

bot.launch();