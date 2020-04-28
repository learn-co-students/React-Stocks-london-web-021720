import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'


const API = "http://localhost:3000/stocks"

class App extends Component {
  constructor(){
    super()
    this.state = {
      stocks: []
    }
  }
  componentDidMount(){
    fetch(API).then(res => res.json())
    .then(data => this.setState({
      stocks: data
    }))
  }
  
  
  
  
  
  
  render() {
    return (
      <div>
        <Header/>
        <MainContainer stocks={this.state.stocks}/>
      </div>
    );
  }
}

export default App;
