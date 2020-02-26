const mongoose = require('mongoose')
const Double = require('@mongoosejs/double')

const schema = mongoose.Schema({
    member_id: Number,
    loan_amnt: Number, 
    funded_amnt_inv: Double,
    term: String,
    int_rate: Double,
    installment: Double,
    grade: String,
    emp_title: String,
    emp_length: String,
    home_ownership: String,
    annual_inc: String,
    verification_status: String,
    issue_d: String,
    loan_status: String,
    desc: String,
    purpose: String,
    title: String,
    addr_state: String,
    last_pymnt_d: String,
    last_pymnt_amnt: String
})

module.exports = mongoose.model('Loans', schema)