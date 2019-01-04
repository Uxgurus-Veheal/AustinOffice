import React, { Component } from 'react';

//style css
import '../node_modules/bootstrap/dist/css/bootstrap.css';
// import './Assets/css/style.css';
import './Assets/css/reset.css';
import './Assets/css/style.scss';

//components
import Header from './Components/Header/Header';
import WhyAustin from './Components/WhyAustin/WhyAustin';
import BlueSection1 from './Components/BlueSection/BlueSection1/BlueSection1';
import WhyAustin2 from './Components/WhyAustin2/WhyAustin2';
import AustinOfficeMarket from './Components/AustinOfficeMarket/AustinOfficeMarket';
import ContactUs from './Components/ContactUs/ContactUs';
import Footer from './Components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <WhyAustin/>
        <BlueSection1/>
        <WhyAustin2/>
        <AustinOfficeMarket/>
        <ContactUs/>
        <Footer/>
      </div>
    );
  }
}

export default App;