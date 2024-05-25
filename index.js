import express from 'express'

const server = express()
const PORT = 5000

server.get('/', (req, res) => {
	res.send("auvtor - Egorov")
})

server.listen(PORT, () => {
	console.log(`server run is port ${PORT}`)
})



// light server