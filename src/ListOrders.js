import React, { useState,useEffect } from 'react';
//import Transaction from './Transaction';
//Transaction.js file for I try to complete this task - Create a presentation to see order details (transactions)
const apiUrl = '/shopOrders';

function ListOrders(){
    const [itemsArray, setItemsArray] = useState([]);
    const fetchFromApi = () => {
        fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => {
            setItemsArray(data);
          });
      };

      useEffect(() => {
        fetchFromApi();
      }, []);

      useEffect(() => {
    }, [itemsArray])   
//This function for reserving order
    function HandleReserve(id) {
      console.log({id});     
      const reserveUrl = `/shopOrders/`+id+`/reserve`;
      console.log({reserveUrl});
        async function reserveOrder() {
          await fetch(reserveUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
           }
         });
       }
       reserveOrder();
       alert("The order has been reserved to the list");
     }
//This function for release order after resrving
     function HandleRelease(id) {
      console.log({id});
      const releaseUrl = `/shopOrders/`+id+`/release`;
      console.log({releaseUrl});
        async function releaseOrder() {
          await fetch(releaseUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
           }
         });
       }
       releaseOrder();
       alert("The order has been released");
      }

      //This function for refund order after resrving
     function HandleRefund(id) {
      console.log({id});
      const refundUrl = `/shopOrders/`+id+`/refund`;
      console.log({refundUrl});
        async function refundOrder() {
          await fetch(refundUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
           }
         });
       }
       refundOrder();
       alert("The order has been refund");
      }

      //This function for capture order after resrving
     function HandleCapture(id) {
      console.log({id});
      const captureUrl = `/shopOrders/`+id+`/capture`;
      console.log({captureUrl});
        async function captureOrder() {
          await fetch(captureUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
           }
         });
       }
       captureOrder();
       alert("The order has been capture");
      }

return(
<div>
      {  
        itemsArray && itemsArray.map(itemArray=>{    
        return(
            <div key={itemArray.id}>
            <h4>{itemArray.id}</h4>
            {itemArray.orderLines.map(s => (<ul key={s.id}>
            <li>ID: {s.id}</li>
            <li>Code: {s.code}</li>
            <li>Description: {s.description}</li>
            <li>Quantity: {s.quantity}</li>
            <li>Price: {s.price}</li>
            </ul>))}
            <input type="button" value="Reserve Order" onClick={() => HandleReserve(itemArray.id)} /> 
            &nbsp;&nbsp;&nbsp;&nbsp;
            <input type="button" value="Release Order" onClick={() => HandleRelease(itemArray.id)} /> 
            &nbsp;&nbsp;&nbsp;&nbsp;
            <input type="button" value="Refund Order" onClick={() => HandleRefund(itemArray.id)} /> 
            &nbsp;&nbsp;&nbsp;&nbsp;
            <input type="button" value="Capture Order" onClick={() => HandleCapture(itemArray.id)} /> 
            </div>
            );
        })
       };
     </div>
);
      }
export default ListOrders;