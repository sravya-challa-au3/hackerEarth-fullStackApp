import React, {useState, useEffect} from 'react';
import './Table.css';
import Search from '../Search'

function Table() {
    const [loans, setLoans] = useState([])
    const [searchVal, setSearchVal] = useState("")
    const [viewType, setViewType] = useState("allLoans")
    
    useEffect(() => {
        fetch(`http://localhost:8080/allLoans`)
          .then(res => {
          return res.json()
          })
          .then(res => {
              setLoans([...res])
            console.log(res)
          })
          .catch(err => {
              console.log(err)
          })
    }, [])


  const clickFunc = (e) => {
    let memberId = e.target.parentElement.id    
    window.location.href = `http://localhost:3000/loan/${memberId}`
  }

  const inputChange = (e) => {
    let val = e.target.value
    setSearchVal(val)
  }
  

  const formSubmit = (e) => {
    e.preventDefault()
    setViewType("search")
  }
  
  let loansArr = []

  switch(viewType){
    case "allLoans":
      loansArr = loans
      break;
    
    case "search":
       loansArr = loans.filter(loan => loan.member_id.toString() === searchVal)
       if(loansArr.length < 1){
         alert('Please enter valid member id')
       }
       break;

    default:
       break;
  }

  return (
    <div className="container">
      {loansArr.length > 0 ?
      <div>
       
       <Search onFormSubmit={formSubmit} onInputChange={inputChange}/>

       <table className="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Loan Amount</th>
            <th>Term</th>
            <th>Interest Rate</th>
            <th>Verification Status</th>
            <th>Loan Status</th>
          </tr>
        </thead>
        
         {loansArr.map(item => 

          <tbody key={item.member_id}> 
          <tr id={item.member_id} onClick={clickFunc}>
            <td>{item.member_id}</td>
            <td>{item.loan_amnt}</td>
            <td>{item.term}</td>
            <td>{item.int_rate}</td>
            <td>{item.verification_status}</td>
            <td>{item.loan_status}</td>
          </tr> 
          </tbody>
          )}
      </table>
      
      </div>
      : <p>Data loading..</p>}
    </div>
  );
}

export default Table;