import React from 'react';

const Header = (props) => {
    return(
      <div className="header">
        <h1 className="tag">{props.title}</h1>
        <h3 className="tagline">{props.tagline}</h3>
      </div>
    )
}
export default Header;