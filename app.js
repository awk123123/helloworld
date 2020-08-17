const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Keel auto pull image and deploy!!!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})