import React from 'react'

const Stock = ({stock, name, price, ticker, type, id, purchaseStock, sellStock}) => {
 
  
  return(
  <div>

    <div className="card">
      <div onClick={() => purchaseStock ? purchaseStock(id) : sellStock(id) }  className="card-body">
        <h5 className="card-title">{
            name
          }</h5>
        <p className="card-text">{
           ticker + ": " + price
            
          }</p>
          
      </div>
          
    </div>


  </div>)
};

export default Stock
