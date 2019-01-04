import React, { Component } from 'react';
import data from '../../Data.json';

//styles
import './AustinOfficeMarket.scss';

class AustinOfficeMarket extends Component {

    constructor(){
        super()

        this.state={
            data:data
        }
    }

  render() {
    return (
      <div>
        {/* <!-- austin office market section --> */}
        <div className="austinofcmrkt" id="AustinOfficeMarket">
            <div className="austinofcmrkt__cont">
                <h1 className="austinofcmrkt__heading">{ this.state.data.AustinOfficeMarket.heading }</h1>
                <div className="row">
                    <div className="col-md-4">
                        <ul className="austinofcmrkt__listcont">
                            <li className="austinofcmrkt__list mb-3">
                                <div className="row">
                                    <div className="austinofcmrkt__arrowimgcont">
                                        <img className="austinofcmrkt__arrowimg" src={require("../../Assets/images/arrow_down.png")} alt="austin office market section"/>
                                    </div>
                                    <div className="col-9 pad-lt--0">
                                        <div className="pl-3 pad-lt--10">
                                            <p className="austinofcmrkt__desc">
                                            { 
                                                this.state.data.AustinOfficeOwners.SideStat.Block1.variable 
                                            }
                                            </p>
                                            <p className="austinofcmrkt__descdetail">
                                            { 
                                                this.state.data.AustinOfficeOwners.SideStat.Block1.value 
                                            }
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="austinofcmrkt__list mb-3">
                                <div className="row">
                                    <div className="austinofcmrkt__arrowimgcont">
                                        <img className="austinofcmrkt__arrowimg" src={require("../../Assets/images/arrow_up.png")} alt="austin office market section"/>
                                    </div>
                                    <div className="col-9 mt-1 pad-lt--0">
                                        <div className="pl-3 pad-lt--10">
                                            <p className="austinofcmrkt__desc">
                                            { 
                                                this.state.data.AustinOfficeOwners.SideStat.Block2.variable 
                                            }
                                            </p>
                                            <p className="austinofcmrkt__descdetail">
                                            { 
                                                this.state.data.AustinOfficeOwners.SideStat.Block2.value 
                                            }
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="austinofcmrkt__list mb-3">
                                <div className="row">
                                    <div className="austinofcmrkt__arrowimgcont">
                                        <img className="austinofcmrkt__arrowimg" src={require("../../Assets/images/arrow_up.png")} alt="austin office market section"/>
                                    </div>
                                    <div className="col-9 mt-1 pad-lt--0">
                                        <div className="pl-3 pad-lt--10">
                                            <p className="austinofcmrkt__desc">
                                            { 
                                                this.state.data.AustinOfficeOwners.SideStat.Block3.variable 
                                            }
                                            </p>
                                            <p className="austinofcmrkt__descdetail">
                                            { 
                                                this.state.data.AustinOfficeOwners.SideStat.Block3.value 
                                            }
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="austinofcmrkt__list mb-3">
                                <div className="row">
                                    <div className="austinofcmrkt__arrowimgcont">
                                        <img className="austinofcmrkt__arrowimg" src={require("../../Assets/images/arrow_up.png")} alt="austin office market section"/>
                                    </div>
                                    <div className="col-9 mt-1 pad-lt--0">
                                        <div className="pl-3 pad-lt--10">
                                            <p className="austinofcmrkt__desc">
                                            { 
                                                this.state.data.AustinOfficeOwners.SideStat.Block4.variable 
                                            }
                                            </p>
                                            <p className="austinofcmrkt__descdetail">
                                            { 
                                                this.state.data.AustinOfficeOwners.SideStat.Block4.value 
                                            }
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="austinofcmrkt__list mb-3">
                                <div className="row">
                                    <div className="austinofcmrkt__arrowimgcont">
                                        <img className="austinofcmrkt__arrowimg" src={require("../../Assets/images/arrow_down.png")} alt="austin office market section"/>
                                    </div>
                                    <div className="col-9 mt-1 pad-lt--0">
                                        <div className="pl-3 pad-lt--10">
                                            <p className="austinofcmrkt__desc">
                                            { 
                                                this.state.data.AustinOfficeOwners.SideStat.Block5.variable 
                                            }
                                            </p>
                                            <p className="austinofcmrkt__descdetail">
                                            { 
                                                this.state.data.AustinOfficeOwners.SideStat.Block5.value 
                                            }
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <p className="austinofcmrkt__src">
                            <b className="austinofcmrkt__srcbold">Source: </b> 
                            CBRE Research, Q3 2018
                        </p>
                    </div>
                    <div className="col-md-8">
                        <h1 className="austinofcmrkt__rtheading mb-3">
                            { this.state.data.AustinOfficeMarket.heading2}
                        </h1>
                        <p className="austinofcmrkt__para">
                            { this.state.data.AustinOfficeMarket.Para}
                        </p>
                        <button className="btn text-center">FIND OUT MORE</button>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- //austin office market section --> */}
      </div>
    );
  }
}

export default AustinOfficeMarket;
