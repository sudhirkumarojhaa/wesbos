import React from 'react';

export default class Load extends React.Component{
  render(){
    return(
      <form className="store-selector">
        <h2>Please enter a store</h2>
        <input className="store-text" type="text" placeholder="Store Name"/>
        <input className="store-btn" type="button" value="Visit Store"/>
      </form>
    )
  }
}