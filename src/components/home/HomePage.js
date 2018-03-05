import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component{
  render(){
    return (
      <div>
        <h1>TTD Practice</h1>
        <ol reversed>
          <li><Link to="1">Multiples of 3 and 5</Link></li>
        </ol>
      </div>

    );
  }
}

export default HomePage;
