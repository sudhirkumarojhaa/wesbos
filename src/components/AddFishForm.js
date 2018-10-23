import React from 'react';
import Button from './Button';

export default class AddFishForm extends React.Component{
  createFish(event) {
    event.preventDefault();
    const fish ={
      name: this.name.value,
      image: this.image.value,
      desc: this.desc.value,
      price: this.price.value,
      status: this.status.value,
    }
    this.props.addFish(fish);
    this.fishForm.reset();
  }

  render(){
    return(
        <form className="fish-edit" ref={(input) => this.fishForm = input } onSubmit={(e)=> this.createFish(e)}>
          <input ref={(input)=> this.name = input} className="text" type="text" placeholder="Fish Name"/>
          <div className="inline">
          <input ref={(input)=> this.price = input} className="option" type="number" placeholder="Fish Price"/>
            <select ref={(input)=> this.status = input} className="option" >
              <option value="available">Fresh !</option>
              <option value="unavailable">Sold Out ! </option>
             </select>
          </div>
        <input ref={(input)=> this.desc = input} className="text" type="text" placeholder="Fish Description"/>
        <input ref={(input)=> this.image = input} className="text" type="text" placeholder="Fish Image"/>
        <Button title="add item" />
        </form>
    )
  }
}