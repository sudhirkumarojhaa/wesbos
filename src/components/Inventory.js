import React from 'react';
import AdddishForm from "./AdddishForm";
import Button from "./Button";

export default class Inventory extends React.Component{

  render(){
    return(
      <div className="box inventory">
        <h2 className="tag">Inventory</h2>
        <AdddishForm adddish={this.props.adddish}/>
        <Button title="Load samples" onClick={this.props.loadSamples}/>
      </div>
    )
  }
}