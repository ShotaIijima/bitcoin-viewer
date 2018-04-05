var express    = require('express')
var request    = require('request')
var app        = express()

// CORS対策
app.use((req, res, next) => {
 res.header('Access-Control-Allow-Origin', '*')
 res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
 res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS')
 next()
})
https://api.binance.com/api/v1/ticker/allPrices
app.options('*', (req, res) => {
 res.sendStatus(200)
})

const port = 2999

app.get('/allPrices', (req,res) => {
   request.get('https://api.binance.com/api/v1/ticker/allPrices', function(err, resp, body) {
      if (err) {
        console.log('Error: ' + err.message);
        return
      }
      res.json({
        result: body
      })
   })
})

app.post('/detail', (req,res) => {
   console.log(req.body)   
   request.get('https://api.binance.com/api/v1/ticker/24hr?symbol=' + req.body.symbol, function(err, resp, body) {
      if (err) {
        console.log('Error: ' + err.message);
        return
      }
      res.json({
        result: body
      })
   })
})

app.listen(port)