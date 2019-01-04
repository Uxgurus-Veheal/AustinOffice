import React, { Component } from 'react';
import data from '../../Data.json';

//styles
import './AustinOfficeOwners.scss';

class AustinOfficeOwners extends Component {

    constructor(props){
        super(props);

        this.state = {
            data:data,
            getInTouchIndex:-1
        };
    }

    
    render() {
        const selectProperty = (index) =>{
            this.setState({
                getInTouchIndex: index
            })
            this.props.getInTouchIndex(index);
        }

        const AustinDiv = this.state.data.AustinOfficeOwners.AustinOfficeOwnersDiv.map(
                (austinData, index) => {
                    return(
                        <div key={index} className={`row ${index === this.state.data.AustinOfficeOwners.AustinOfficeOwnersDiv.length - 1  ? '' : 'mb-5'}`}>
                            <div className="col-md-4 hide--mobile">
                                <img src={ require(`../../Assets/images/owner-${index+1}.png`)} alt="austin largest office owners section" className="img-fluid"/>
                            </div>
                            <div className="col-md-1"></div>
                            <div className="col-md-7 pl-2">
                                <h3 className="aurtinowners__subheading">{
                                    austinData.heading
                                }</h3>
                                <p className="aurtinowners__para">
                                    { austinData.Para }
                                </p>
                                <div className="col-md-4 show--mobile">
                                    <img src={ require(`../../Assets/images/owner-${index+1}.png`)} alt="austin largest office owners section" className="img-fluid"/>
                                </div>
                                <a onClick={ () =>{ selectProperty(index) } }  className="btn btn--white btn-bor--grey text-center mt-4" href="#ContactUs"> GET IN TOUCH</a>
                            </div>
                        </div>
                    )
                }
            )
        

        return (
        <div>
            {/* <!-- austin largest office owners --> */}
            <div className="aurtinowners" id="AustinOfcOwners">
                <div className="aurtinowners__cont">
                    <h1 className="aurtinowners__heading pt-5 pb-5">
                    { this.state.data.AustinOfficeOwners.heading }
                    </h1>
                    <div className="aurtinowners__listcont">
                        { AustinDiv }
                    </div>
                </div>
            </div>
            {/* <!-- //austin largest office owners --> */}
        </div>
        );
    }
}

export default AustinOfficeOwners;
