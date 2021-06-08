import React from 'react';
import AddOrder from './AddOrder';
import './App.css';
import ListOrders from './ListOrders';

function App() {
  return (
    <div className="App">
      <ListOrders />
      <AddOrder />
    </div>
  );
}

export default App;
