import React, { useState } from "react";

//Adding new order and for display
function AddOrder(){
    const[code,setCode] = useState("");
    const[description,setDescription] = useState("");
    const[quantity,setQuantity] = useState("");
    const[price,setPrice] = useState("");
    function onSubmit() {
        async function fetchOrder() {
          await fetch("/shopOrders", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
           },
           body: JSON.stringify({ 
             orderLines: [{
             code: code,
             description: description,
             quantity : quantity,
             price: price
            }]
           }),
         });
       }
       fetchOrder();
       alert("The order has been added to the list");
     }
    return(
        <div className="order-name">
      <form>
        <label>Code</label> <br></br>
        <input 
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        ></input>{" "}
        <br></br>
        <label>Description</label> <br></br>
        <input
          type="text"
          value={description} required
          onChange={(e) => setDescription(e.target.value)}
        ></input>{" "}
        <br></br>
        <label>Quantity</label>
        <br></br>
        <input
          type="text"
          value={quantity} required
          onChange={(e) => setQuantity(e.target.value)}
        ></input>
        <br></br>
        <label>Price</label>
        <br></br>
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        ></input>
        <br></br>
        <button onClick={onSubmit}> ADD Order</button>
      </form>
    </div>
    );
}
export default AddOrder;