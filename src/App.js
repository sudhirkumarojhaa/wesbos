import React, { Component } from 'react';

import './App.css';
import Header from './components/Header';
import Inventory from './components/Inventory';
import sampledishes from './components/sample-dishes';
import List from "./components/List";
import Order from './components/Order';


class App extends Component {
  constructor(){
    super();
    this.state = {
      dishes: {},
      order: {}
    };
    this.adddish = this.adddish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    this.addToOrder = this.addToOrder.bind(this);
  }

  adddish(dish){
    const dishes = {...this.state.dishes};
    const timestamp = Date.now();
    dishes[`dish-${timestamp}`] = dish;
    this.setState({dishes});
  }


  loadSamples() {
    this.setState({
        dishes: sampledishes
    })
  }

  addToOrder(key){
    const order = {...this.state.order};
    order[key]=order[key]+1||1;
    this.setState({order})
  }

  render() {
    return (
      <div className="App">
      <div className="menu box">
        <Header title="Fresh Delight"  tagline="fresh food menu"/>
        <ul className="listView">
        {Object
        .keys(this.state.dishes)
        .map(
          key=><List key={key} addToOrder={this.addToOrder} index={key} details={this.state.dishes[key]}/>)
        }
        </ul>
       </div>
       <Order dishes={this.state.dishes} order={this.state.order}/>
       <Inventory adddish={this.adddish} loadSamples={this.loadSamples}/>
      </div>
    );
  }
}

export default App;
