const mongoose = require('mongoose')

var url = 'mongodb://localhost:27017/lendingClub';

mongoose.connect(url, {useNewUrlParser: true,  useUnifiedTopology: true, keepAlive: 300000, connectTimeoutMS: 30000} )
.then(() => {
    console.log('connected')
})
.catch(err => {
    console.log(err)
})

const db = mongoose.connection

db.on('error', () => console.log('connection error'))
db.once('open', () => console.log('db connected'))

module.exports = db