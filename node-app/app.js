const Koa = require('koa')
const app = new Koa()

const PORT = process.env.PORT || 3000

app.use(async (ctx) => {
    ctx.body = 'Hello, World!'
})

app.listen(PORT, () => {
    console.log(`Server's running on http://localhost:${PORT}`)
})