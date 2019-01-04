import React, { Component } from 'react';
import data from '../../Data.json';
import AustinOfficeOwners from '../AustinOfficeOwners/AustinOfficeOwners';
import AustinLandscape from '../AustinLandscape/AustinLandscape';
import BlueSection2 from '../BlueSection/BlueSection2/BlueSection2';
import axios from 'axios';

//styles
import './ContactUs.scss';


class ContactUs extends Component {

    constructor(props){
        super(props)
        this.handleData = this.handleData.bind(this);
        this.state = {
            fromAustinOwners: -1,
            fullName:"",
            fullNameError:"",
            email:"",
            emailError:"",
            phone:"",
            phoneError:"",
            dropdown:"",
            dropdownError:"",
            message:"",
            messageError:"",
            successMsg:"",
            submittedForm:false,
            data : data
        }
    }

    handleData = (selectedIndex) => {
        console.log('selectedIndex');
        this.setState({
            fromAustinOwners: selectedIndex,
            dropdown: selectedIndex
        });
    }

    change = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
    };

    validate = () => {
        let isError = false;
        const errors = {
            fullNameError: "",
            emailError: "",
            phoneError: "",
            dropdownError:"",
            messageError: ""
        };

        // name validation
        const nameRegx = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/

        if (this.state.fullName.length == "") {
            isError = true;
            errors.fullNameError = this.state.data.ContactUs.NameError1;
        } else if (!nameRegx.test(this.state.fullName)) {
            isError = true;
            errors.fullNameError = this.state.data.ContactUs.NameError2;
        } else if (!isNaN(this.state.fullName)) {
            isError = true;
            errors.fullNameError = this.state.data.ContactUs.NameError3;
        }
        //  else if (this.state.fullName.length <= 2) {
        //     isError = true;
        //     errors.fullNameError = "Name needs to be atleast 3 characters long";
        // }

        // email validation
        const regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

        if (!this.state.email || (this.state.email && this.state.email.length == "")) {
            isError = true;
            errors.emailError = this.state.data.ContactUs.EmailError1;
        } else if (!regx.test(this.state.email)) {
            isError = true;
            errors.emailError = this.state.data.ContactUs.EmailError2;
        }

        // phone validation
        if(isNaN(this.state.phone)){
            isError = true;
            errors.phoneError = this.state.data.ContactUs.PhoneError1;
        } else if(this.state.phone.length == "") {
            isError = true;
            errors.phoneError = this.state.data.ContactUs.PhoneError2;
        } else if(this.state.phone.length < 10 || this.state.phone.length > 10) {
            isError = true;
            errors.phoneError = this.state.data.ContactUs.PhoneError3;
        }

        //dropdown validation
        if (this.state.dropdown == -1) {
            isError = true;
            errors.dropdownError = this.state.data.ContactUs.DropdownError1;
        }
        

        // message validation
        if (this.state.message.length == "") {
            isError = true;
            errors.messageError = this.state.data.ContactUs.MessageError1;
        } else if (this.state.message.length < 5) {
            isError = true;
            errors.messageError = this.state.data.ContactUs.MessageError2;
        }

        this.setState({
            ...this.state,
            ...errors
        });

        return isError;
    };
    
    onSubmit = e => {
    e.preventDefault();

    const err = this.validate();

        if (!err) {
            this.setState({
                fullName: "",
                fullNameError: "",
                phone: "",
                phoneError: "",
                email: "",
                emailError: "",
                dropdown:"",
                dropdownError:"",
                message: "",
                messageError: "",
                successMsg: this.state.data.ContactUs.SuccessMessage,
                submittedForm:true
            });

            
            axios.get('/send-email/notification', {
                params: {
                    name: this.state.fullName,
                    phone: this.state.phone,
                    email: this.state.email,
                    property: this.state.dropdown,
                    message: this.state.message,
                }
            })
            .then(function (response) {
                console.log("form submitted");  
                console.log(response);
            })
            .catch(function (error) {
                console.log("error in form submission");  
                console.log(error);
            });
        } else {
            this.setState({
                successMsg:""
            });
        }
    };

    anotherReq = () =>{
        return(
            this.setState({ submittedForm:false })
        )
    }

    render() {
        const thanku = () => {
            return(
                <div>
                    <div className="contactform__thanku">
                        <h1 className="contactform__tytext1">Thank you!</h1>
                        <h2 className="contactform__tytext2">We will get in touch with you soon.</h2>
                    </div>
                    <button onClick={ this.anotherReq } className="btn btn-success">Another Request</button>
                </div>
            )
        }

        const vari_cont = () =>{
            
            return(
                <div className="contactform__inptcont">
                    <form onSubmit={ this.onSubmit }>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 mb-2">
                                <input type="text"
                                value={this.state.fullName} 
                                placeholder={this.state.data.ContactUs.Name} className="contactform__input w-100"
                                name="fullName"
                                onChange={this.change}
                                />
                            </div>
                            <div className="col-lg-6 col-md-6 mb-2">
                                <input type="text"
                                value={this.state.email}  
                                placeholder={this.state.data.ContactUs.Email} className="contactform__input w-100"
                                name="email"
                                onChange={this.change}
                                />
                            </div>
                            <div className="col-lg-6 col-md-6 mb-2">
                                <input type="text"
                                value={this.state.phone} 
                                placeholder={this.state.data.ContactUs.PhoneNumber} className="contactform__input pb-3"
                                name="phone"
                                onChange={this.change}
                                />
                            </div>
                            <div className="col-lg-6 col-md-6 mb-2">
                                <select name="dropdown" className="contactform__input contactform-input--dd" onChange={this.change}>
                                    <option value="-1">{this.state.data.ContactUs.SelectPropertyOwner}</option>
                                    {dropdownOption}
                                </select>
                            </div>
                            <div className="col-lg-12 col-md-12 mb-3 pad-ltrt--5">
                                <textarea type="email" aria-placeholder="Message" placeholder={this.state.data.ContactUs.Message} rows="6" cols="30" className="contactform__input"
                                value={this.state.message} 
                                name="message"
                                onChange={ this.change }>
                                </textarea>
                            </div>
                        </div>
                        { 
                        this.state.fullNameError !== undefined &&          this.state.fullNameError.length > 0 &&
                        <div className="alert alert-danger w-50 mt-1"> 
                            <strong className="text-danger">&#9888; </strong>{ this.state.fullNameError }
                        </div>
                        }
                        { 
                            this.state.emailError !== undefined &&
                            this.state.emailError.length > 0 &&
                            <div className="alert alert-danger w-50 mt-1">
                                <strong className="text-danger">&#9888; </strong>{ this.state.emailError }
                            </div>
                        }
                        { 
                            this.state.phoneError !== undefined &&
                            this.state.phoneError.length > 0 &&
                            <div className="alert alert-danger w-50 mt-1">
                                <strong className="text-danger">&#9888; </strong>{ this.state.phoneError }
                            </div>
                        }
                        { 
                            this.state.dropdownError !== undefined &&
                            this.state.dropdownError.length > 0 &&
                            <div className="alert alert-danger w-50 mt-1">
                                <strong className="text-danger">&#9888; </strong>{ this.state.dropdownError }
                            </div>
                        }
                        { 
                            this.state.messageError !== undefined &&
                            this.state.messageError.length > 0 &&
                            <div className="alert alert-danger w-50 mt-1">
                                <strong className="text-danger">&#9888; </strong>{ this.state.messageError }
                            </div>
                        }
                        { 
                            // this.state.successMsg !== undefined &&
                            // this.state.successMsg.length > 0 &&
                            // <div className="alert alert-success w-50 mt-1">
                            //     <strong className="text-success">&#x2705; </strong>{ this.state.successMsg }
                            // </div>
                        }
                        <button className="contactform__btn btn">{this.state.data.ContactUs.SENDIT}</button>
                    </form>
                    
                </div>
            )}


        const dropdownOption = this.state.data.AustinOfficeOwners.AustinOfficeOwnersDiv.map(
            (owners, index)=>{
            return(
                <option key={index} value={index} selected={this.state.fromAustinOwners == index ? 'selected' : ''}> 
                    {owners.heading.slice(6)} 
                </option>
            )
        })

        return (
            <div>
                {/* <!-- contact us --> */}
                    <AustinOfficeOwners getInTouchIndex={this.handleData} /> 
                    <AustinLandscape/>
                    <BlueSection2/>
                    <div className="contactform coniatner mt-5 mb-5 pb-4" id="ContactUs">
                        <div className="row">
                            <div className="col-md-7 mar-ltrt--auto">
                                <h1 className="contactform__heading mb-5">{this.state.data.ContactUs.Title}</h1>
                                { this.state.submittedForm ? thanku() : vari_cont() }
                            </div>
                        </div>
                    </div>
                {/* <!-- // contact us --> */}
            </div>
            );
        }
    }

export default ContactUs;