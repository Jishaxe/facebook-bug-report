const http = require('http')
const Bot = require('messenger-bot')
 
let bot = new Bot({
  token: process.env.TOKEN,
  verify: 'VERIFY_TOKEN'
})

bot.on('authentication', (payload, reply, actions) => {
    reply({ text: 'Authentication callback was triggered!'}, (err, info) => {})
  })
 
http.createServer(bot.middleware()).listen(process.env.PORT)