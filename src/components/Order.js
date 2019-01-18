import React from 'react';
export default class Order extends React.Component{
  constructor(){
    super();
    this.renderOrder = this.renderOrder.bind(this)
  }

  renderOrder(key) {
    const dish = this.props.dishes[key];
    const count = this.props.order[key];
    if(!dish || dish.status === "unavailable" ){
      return <li key={key}> Sorry, {dish ? dish.name : 'dish'} is no longer available!</li>
    }

    return (
      <li className="listStyle" key={key}>
        <span className="price">{count}</span><span>{dish.name}</span>
        <span className="price">{'\u20B9'}{dish.price}</span>
      </li>
    )
  }
  render(){
    const orderId = Object.keys(this.props.order);
    const total = orderId.reduce((prevTotal,key)=>{
      const dish = this.props.dishes[key];
      const count = this.props.order[key];
      const isAvailable = dish && dish.status === 'available';
      if(isAvailable) {
        return prevTotal + (count * dish.price || 0)
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