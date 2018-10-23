import React from 'react';
import Button from './Button';

export default class List extends React.Component {
  render(){
    const {details,index} = this.props;
    const isAvailable = details.status === "available";
    const btnText = isAvailable ? 'Add to order' : 'Sold Out !'
    return (
      <li className="listitem">
        <div className="inline">
          <p>{details.name}</p>
          <p>{'\u20B9'}{details.price}</p>
        </div>
        <div className="inline">
         <img src={details.image} alt ={details.name}/>
           <div className="inline-row">
              <p className="desc">{details.desc}</p>
              <Button disabled={!isAvailable} title = {btnText} onClick={()=> this.props.addToOrder(index)}/>
            </div>
        </div>
      </li>
    )
  }
}