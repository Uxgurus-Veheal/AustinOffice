import React, { Component } from 'react';


//components
import Tech from './features/Tech';
import ArtCulture from './features/ArtCulture';
import Education from './features/Education';

class Header extends Component {
  render() {
    return (
      <div>
        <ArtCulture/>
        <Tech/>
        <Education/>
      </div>
    );
  }
}

export default Header;
