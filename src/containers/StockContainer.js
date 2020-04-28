import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {


  renderStockContainer = () => {
    console.log(this.props.stocks)
    return this.props.stocks.map(stock => <Stock purchaseStock={this.props.purchaseStock} stock={stock} name={stock.name} price={stock.price} ticker={stock.ticker} type={stock.type} id={stock.id} /> )
   }

  render() {
    
    return (
      <div>
        <h2>Stocks</h2>
        
          
          {this.renderStockContainer()}
      </div>
    );
  }

}

export default StockContainer;
