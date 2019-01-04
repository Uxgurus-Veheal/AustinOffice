import React, { Component } from 'react';
import data from '../../../Data.json';

//styles
import '../WhyAustin2.scss'


class Tech extends Component {

    constructor(){
        super()

        this.state={
            data:data
        }
    }

  render() {
    return (
      <div>
        {/* <!-- tech --> */}
        <div className="artculture">
            <div className="artculture__cont">
                <div className="row dis--blk">
                    <div className="col-md-6 pull--rt">
                        <h4 className="artculture__heading">
                            <span className="artculture__headinginner bg--lightblue">{ this.state.data.Tech.heading }</span>
                        </h4>
                        <p className="artculture__desc">{ this.state.data.Tech.TechP1 } </p>   
                        <p className="artculture__desc">{ this.state.data.Tech.TechP2 }</p>
                    </div>
                    <div className="col-md-1 pull--rt"></div>
                    <div className="col-md-5">
                        <img src={require("../../../Assets/images/tech.png")} className="artculture__img img-fluid" alt="austin technology section"/>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- //tech --> */}
      </div>
    );
  }
}

export default Tech;
