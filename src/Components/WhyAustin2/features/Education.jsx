import React, { Component } from 'react';
import data from '../../../Data.json';

//styles
import '../WhyAustin2.scss';


class Education extends Component {

    constructor(){
        super()

        this.state={
            data:data
        }
    }
  render() {
    return (
      <div>
       {/* <!-- education --> */}
        <div className="artculture">
            <div className="artculture__cont">
                <div className="row">
                    <div className="col-md-6">
                        <h4 className="artculture__heading">
                            <span className="artculture__headinginner bg--salmon">{ this.state.data.Education.heading }</span>
                        </h4>
                        <p className="artculture__desc">
                            { this.state.data.Education.EduP1 }
                        </p>
                        <p className="artculture__desc">
                            { this.state.data.Education.EduP2 }
                        </p>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-5">
                        <img src={require("../../../Assets/images/edu.png")} className="artculture__img img-fluid" alt="austin eduction section"/>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- //education --> */}
      </div>
    );
  }
}

export default Education;
