import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  renderPortfolio = () => {
    return this.props.purchasedStocks.map(stock => <Stock sellStock={this.props.sellStock} stock={stock} name={stock.name} price={stock.price} ticker={stock.ticker} type={stock.type} id={stock.id} /> )
  }
  render() {
    console.log(this.props)

    return (
      <div>
        <h2>My Portfolio</h2>
          
            {this.renderPortfolio()}
          
      </div>
    );
  }

}

export default PortfolioContainer;
