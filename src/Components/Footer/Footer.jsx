import React, { Component } from 'react';
import data from '../../Data.json';

//styles
import './Footer.scss'

class Footer extends Component {

    constructor(){
      super()

      this.state={
          data:data
      }
  }

  render() {
    return (
      <div>
        {/* <!-- footer --> */}
            <div className="footer">
                <p className="footer__text">
                { this.state.data.Footer }
                </p>
            </div>
        {/* <!-- //footer --> */}
      </div>
    );
  }
}

export default Footer;
