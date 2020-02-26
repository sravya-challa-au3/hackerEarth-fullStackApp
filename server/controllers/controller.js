const Loans = require('../models/loanModel')

module.exports.allLoans = (req,res) => {
   Loans.find().limit(30)
    .exec()
    .then(data => {
        if(!data){
            res.send('data not found')
        }
        else{
            res.json(data)
        }
    })
    .catch(err => {
        console.log(err)
        res.send(err)
    })
}

module.exports.singleLoan = (req,res) => {
   Loans.find({member_id: req.params.memberId})
    .then(data => {
        if(!data){
            res.send('data not found')
        }
        else{
            res.json(data)
        }
    })
    .catch(err => {
        console.log(err)
        res.send(err)
    })
}