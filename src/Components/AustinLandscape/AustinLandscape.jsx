import React, { Component } from 'react';
import data from '../../Data.json';

//styles
import './AustinLandscape.scss'

class AustinLandscape extends Component {
    
    constructor(){
        super()
  
        this.state={
            data:data
        }
    }

    render() {
        const AustinLandscapeListFirstSet = this.state.data.AustinLandscape.list.map(
            (AustinLandscapedata, index)=>{
            let listData;
            if (index < Math.round(this.state.data.AustinLandscape.list.length/2)) {
                listData = <li key={index} className="austinlnscp__list">
                    <label className={`austinlnscp__circle text-center ${AustinLandscapedata.bgcolor}`}>{index+1}</label>
                    <p className="austinlnscp__listheading">
                        <b className="austinlnscp__headingbold">{AustinLandscapedata.title}</b>
                        {AustinLandscapedata.descp}
                    </p>
                </li>
            }
            return listData;
        })
        const AustinLandscapeListSecondSet = this.state.data.AustinLandscape.list.map(
            (AustinLandscapedata, index)=>{
            let listData;
            if (index >= Math.round(this.state.data.AustinLandscape.list.length/2)) {
                listData = <li key={index} className="austinlnscp__list">
                    <label className={`austinlnscp__circle text-center ${AustinLandscapedata.bgcolor}`}>{index+1}</label>
                    <p className="austinlnscp__listheading">
                        <b className="austinlnscp__headingbold">{AustinLandscapedata.title}</b>
                        {AustinLandscapedata.descp}
                    </p>
                </li>
            }
            return listData;
        })
        return (
        <div className="austinlnscp" id="AustinLandscape">
            {/* <!-- austin landscape --> */}
            <div className="austinlnscp__cont mb-5">
                <h1 className="austinlnscp__heading mt-5 pb-3 pt-3">Austin Landscape</h1>
            </div>
            {/* <!-- austin map --> */}
            <div>
                <img src={require('../../Assets/images/map.png')} alt="austin landscape map section" className="img-fluid"/>
            </div>
            {/* <!-- //austin map --> */}
            <div className="mt-1">
                <div className="austinlnscp__cont">
                    <div className="row p-5 pad-ltrt--0">
                        <div className="col-md-7">
                            <ul className="austinlnscp__listcont">
                                {AustinLandscapeListFirstSet}
                            </ul>
                        </div>
                        <div className="col-md-5">
                            <ul className="austin_list austin_list_mb">
                                {AustinLandscapeListSecondSet}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- //austin landscape --> */}
        </div>
        );
    }
}

export default AustinLandscape;
