import React from 'react';
import Button from './Button';
export default class AdddishForm extends React.Component {
  createdish(event) {
    event.preventDefault();
    const dish= {
      name: this.name.value, image: this.image.value, desc: this.desc.value, price: this.price.value, status: this.status.value,
    }
    this.props.adddish(dish);
    this.dishForm.reset();
  }
  render() {
    return( <form className="dish-edit" ref= {
      (input)=> this.dishForm=input
    }
    onSubmit= {
      (e)=> this.createdish(e)
    }
    > <input ref= {
      (input)=> this.name=input
    }
    className="text" type="text" placeholder="dish Name"/> <div className="inline"> <input ref= {
      (input)=> this.price=input
    }
    className="option" type="number" placeholder="dish Price"/> <select ref= {
      (input)=> this.status=input
    }
    className="option" > <option value="available">Fresh !</option> <option value="unavailable">Sold Out ! </option> </select> </div> <input ref= {
      (input)=> this.desc=input
    }
    className="text" type="text" placeholder="dish Description"/> <input ref= {
      (input)=> this.image=input
    }
    className="text" type="text" placeholder="dish Image"/> <Button title="add item" /> </form>)
  }
}