var loans = require('../controllers/controller')

module.exports = (app) => {
    
    app.get('/allLoans', loans.allLoans)
    app.get('/loan/:memberId', loans.singleLoan)

}