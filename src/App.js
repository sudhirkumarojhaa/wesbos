import React, { Component } from 'react';

import './App.css';
import Header from './components/Header';
import Inventory from './components/Inventory';
import sampleFishes from './components/sample-fishes';
import List from "./components/List";
import Order from './components/Order';


class App extends Component {
  constructor(){
    super();
    this.state = {
      fishes: {},
      order: {}
    };
    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    this.addToOrder = this.addToOrder.bind(this);
  }

  addFish(fish){
    const fishes = {...this.state.fishes};
    const timestamp = Date.now();
    fishes[`fish-${timestamp}`] = fish;
    this.setState({fishes});
  }


  loadSamples() {
    this.setState({
        fishes: sampleFishes
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
        .keys(this.state.fishes)
        .map(
          key=><List key={key} addToOrder={this.addToOrder} index={key} details={this.state.fishes[key]}/>)
        }
        </ul>
       </div>
       <Order fishes={this.state.fishes} order={this.state.order}/>
       <Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
      </div>
    );
  }
}

export default App;
