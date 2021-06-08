import React, { useState,useEffect } from 'react';
import PropTypes from "prop-types";
const apiUrl = '/shopOrders/';

export default function Transaction ({id, date, amount, type, settledAmount}){
    console.log(`{$id}`);
    const [transArray, setTransArray] = useState([]);   
    const fetchTransaction = () => {
        console.log(apiUrl+`{$id}`);
        fetch(apiUrl+`{$id}`)
          .then((response) => response.json())
          .then((data) => {setTransArray(data);});
      };
  
      useEffect(() => {
        fetchTransaction();
      }, []);
  
      useEffect(() => {
        console.log(transArray)
    }, [transArray]) 
  
    return (
    <div>
            {transArray.transation.map(t => (<ul key={t.id}>
            <li>ID: {t.id}</li>
            <li>Date: {t.date}</li>
            <li>Amount: {t.amount}</li>
            <li>Type: {t.type}</li> 
            <li>Settled Amount: {t.settledAmount}</li>
            </ul>))}
    </div>
    );
}
Transaction.prototype = {
    id: PropTypes.string.isRequired,
}
