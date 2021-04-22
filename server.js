const express = require('express')

const ssr = require('./ssr.js')

const app = express()

const port = 8686

app.get('*', async (req, res, next) => {
  const url = req.protocol + '://' + req.hostname + req.originalUrl
  const html = await ssr(url)
  return res.status(200).send(html)
})

app.listen(port, () => console.log(`Server started\nPort: ${port}\nPress Ctrl+C to quit`))
