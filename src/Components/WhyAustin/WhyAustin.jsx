import React, { Component } from 'react';
import data from '../../Data.json';

//styles
import './WhyAustin.scss';

class WhyAustin extends Component {

    constructor(){
        super()
  
        this.state={
            data:data
        }
    }
  
  render() {
    const whyAustin = this.state.data.WhyAustin.austinDiv.map(
        (whyAustinData, index)=>{
        return(
            <div key={index} className={`whyaustin__list ${index === this.state.data.WhyAustin.austinDiv.length - 1  ? 'whyaustin--last' : ''}`}>
                <div className="row">
                    <div className="whyaustin__imgcont">
                        <img className="whyaustin__images" src={ require(`../../Assets/images/icon-${[index+1]}.png`) } alt="icon_austin"/>
                    </div>
                    <div className="col-md-1 hide--tablnscp"></div>
                    <div className="col-md-8">
                        <h5 className="whyaustin__listheading">{ whyAustinData.heading }</h5>
                        <p className="whyaustin__listdesc">
                            { whyAustinData.para }
                        </p>
                    </div>
                </div>
            </div>
        )
    })

    return (
      <div>
        {/* <!-- why austin --> */}
        <div className="whyaustin">
            <div className="whyaustin__cont">
                <span id="WhyAustin"></span>
                <h1 className="whyaustin__heading">{ this.state.data.WhyAustin.mainHead }
                </h1>
                <div className="row">
                    <div className="col-md-7">
                        <img src={require('../../Assets/images/Austin_img.png')} className="whyaustin__img img-fluid" alt="Austin"/>
                    </div>
                    <div className="col-md-5">
                        <div className="row">
                            <div className="col-md-1"></div>
                            <div className="col-md-11">
                              	{ whyAustin }  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- //why austin --> */}
      </div>
    );
  }
}

export default WhyAustin;
