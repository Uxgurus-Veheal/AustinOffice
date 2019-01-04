import React, { Component } from 'react';
import data from '../../../Data.json';

class BlueSection1 extends Component {

    constructor(){
        super()

        this.state={
            data:data
        }
    }
    
  render() {
    return (
      <div>
        {/* <!-- blue section --> */}
        <div className="bluecont bg--blue">
            <div className="bluecont__content">
                <div className="row">
                    <div className="col-md-4">
                        <img src={require("../../../Assets/images/Group_austin.png")} className="bluecont__leftimg img-fluid" alt="austin group map pic"/>
                    </div>
                    <div className="col-md-6 offset-lg-2">
                        <div className="bluecont__rightcontent">
                            <p className="bluecont__desc mb-4">
                                { this.state.data.BlueSection1.BlueSectionP1 }
                            </p> 
                            <p className="bluecont__desc">
                                { this.state.data.BlueSection1.BlueSectionP2 }
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- //blue section --> */}
      </div>
    );
  }
}

export default BlueSection1;