import React, {useState,useEffect} from 'react';
import './SingleLoan.css'
import Navbar from '../Navbar';

function SingleLoanDetails(props) {
   const [loan, setLoan] = useState([])

    useEffect(() => {
        const memberId = props.match.params.memberId
        
        fetch(`http://localhost:8080/loan/${memberId}`)
         .then(res => {
             return res.json()
         })
         .then(res => {
             setLoan([res[0]])
         })
         .catch(err => {
             console.log(err)
         })
    }, [props.match.params.memberId])


  return (
    <div>
        <Navbar/>
        {loan.length > 0 ? loan.map( item => 
        
        <div className="card" key={item._id}>
        <div className="card-header">  Member ID - {item.member_id} </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Loan Amount - {item.loan_amnt}</li>
          <li className="list-group-item">Term - {item.term}</li>
          <li className="list-group-item">Annual Income - {item.annual_inc}</li>
          <li className="list-group-item">Verification Status - {item.verification_status}</li>
          <li className="list-group-item">Loan Status - {item.loan_status}</li>
          <li className="list-group-item">Purpose - {item.purpose}</li>
          <li className="list-group-item">Last Payment Date - {item.last_pymnt_d}</li>
        </ul>
        </div>
       ): "Loading"}
     
     
    </div>
  );
}

export default SingleLoanDetails;
