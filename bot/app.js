import {Telegraf, Markup} from 'telegraf'

const token = '8039302879:AAEwY0zHsR0eELOcQX53HDxYBFm5xy9CrHw'
const webAppUrl = 'https://lizard-clicker-pro-9d65a.web.app'

const bot = new Telegraf(token)

bot.command('start', (ctx) => {
	ctx.reply(
		'Hello! Press to start the app!', Markup.inlineKeyboard([
			Markup.button.webApp(
				'Open mini-app',
				`${webAppUrl}?ref=${ctx.payload}`,
			)
		])
	)
})

bot.launch()