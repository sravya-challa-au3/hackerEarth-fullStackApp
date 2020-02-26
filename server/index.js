var express = require('express')
var cors = require('cors')
const csv = require('csvtojson')
const Loans = require('./models/loanModel')

const loanDetails = './loan.csv'

const insertData = async  (pathForCsv) => {
  const jsonArr = await csv().fromFile(pathForCsv)

  for(let obj of jsonArr){
      const loan = new Loans({...obj})
      loan.save()
  }
}
insertData(loanDetails)

var app = express()
var db = require('./dbConfig/db')
require('./routes/route')(app)

app.use(cors())
app.use((req,res,next) => {
  res.header("Access-Control-Allow-Origin", "*")
  next()
})

app.listen('8080', console.log('listening'))