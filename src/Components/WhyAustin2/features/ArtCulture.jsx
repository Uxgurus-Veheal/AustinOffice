import React, { Component } from 'react';
import data from '../../../Data.json';

//styles
import '../WhyAustin2.scss'


class ArtCulture extends Component {

    constructor(){
        super()

        this.state={
            data:data
        }
    }

  render() {
    return (
      <div>
        {/* <!-- art and culture --> */}
        <div className="artculture">
            <div className="artculture__cont">
                <div className="row">
                    <div className="col-md-6">
                        <h4 className="artculture__heading">
                            <span className="artculture__headinginner">
                                { this.state.data.ArtCulture.heading }
                            </span>
                        </h4>
                        <p className="artculture__desc"> { this.state.data.ArtCulture.ArtCultureP1 } </p> 
                        <p className="artculture__desc"> { this.state.data.ArtCulture.ArtCultureP2 } </p>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="artculture__imgcont col-md-5">
                        <img src={require('../../../Assets/images/art@3x.png')} className="artculture__img img-fluid" alt="austin art section"/>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- //art and culture --> */}
      </div>
    );
  }
}

export default ArtCulture;
