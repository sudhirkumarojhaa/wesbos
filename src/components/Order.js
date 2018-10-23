import React from 'react';
export default class Order extends React.Component{
  constructor(){
    super();
    this.renderOrder = this.renderOrder.bind(this)
  }

  renderOrder(key) {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    if(!fish || fish.status === "unavailable" ){
      return <li key={key}> Sorry, {fish ? fish.name : 'fish'} is no longer available!</li>
    }

    return (
      <li className="listStyle" key={key}>
        <span className="price">{count}</span><span>{fish.name}</span>
        <span className="price">{'\u20B9'}{fish.price}</span>
      </li>
    )
  }
  render(){
    const orderId = Object.keys(this.props.order);
    const total = orderId.reduce((prevTotal,key)=>{
      const fish = this.props.fishes[key];
      const count = this.props.order[key];
      const isAvailable = fish && fish.status === 'available';
      if(isAvailable) {
        return prevTotal + (count * fish.price || 0)
      }
      return prevTotal;
    }, 0)


    return(
      <div className="box Order">
        <h2 className="tag">Your Order</h2>
        <ul className="orderTotal">
          {orderId.map(this.renderOrder)}
          <li className="total">
            <strong>Total: </strong>
            {'\u20B9'}{total}
          </li>
        </ul>
      </div>
    )
  }
}