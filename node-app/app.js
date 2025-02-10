import express from "express"

const PORT = process.env.PORT || 3000

const app = express()

app.get('/', (req, res) => {
    res.send('Hello, Express!')
})

app.listen(PORT, () => {
    console.log(`Server's running on http://localhost:3000`)
})