import React from 'react';
import AddFishForm from "./AddFishForm";
import Button from "./Button";

export default class Inventory extends React.Component{
  
  render(){
    return(
      <div className="box inventory">
        <h2 className="tag">Inventory</h2>
        <AddFishForm addFish={this.props.addFish}/>
        <Button title="Load samples" onClick={this.props.loadSamples}/>
      </div>
    )
  }
}