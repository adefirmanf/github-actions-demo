const app = require('express')()

app.use('/', (_, res) => {
  res.json({
    version: '1.0.0',
    message: "ok!"
  })
})

app.listen(3000, () => {
  console.log("Port is listening on 3000")
})

module.exports = app