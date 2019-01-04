import React, { Component } from 'react';
import data from '../../Data.json';

//styles
import './Header.scss';

class Header extends Component {
      
    constructor(){
      super()

      this.state={
          data:data,
          showMenu:false,
          iconMenu:false
      }
  }
  render() {
    const menuChange = () =>{
        this.setState(prevState => ({
          showMenu: !prevState.showMenu,
          iconMenu:!this.state.iconMenu
        }))
    }

    const AustinScroll = () =>{
      window.scrollTo(50 , 530)
    }
    return (
      <div>
        {/* <!-- banner --> */}
        <div className="banner">
          <img className="banner__image" src={require("../../Assets/images/banner.png")} alt="Banner Image" />
          <nav className={`banner__nav ${ this.state.showMenu ? 'menuShow':'menuHide'}`}>
	          <ul className="banner__listcont d-flex flex-column-reverse">
	            <li className="banner__list">
	              <a className="banner__link" href="#AustinLandscape" title="Austin Landscape">
	              {this.state.data.Header.navigation.Tab4}
	              </a>
	            </li>
	            <li className="banner__list">
	              <a className="banner__link" href="#AustinOfcOwners" title="Top Office Owners">
	              {this.state.data.Header.navigation.Tab3}
	              </a>
	            </li>
	            <li className="banner__list">
	              <a className="banner__link" href="#AustinOfficeMarket" title="Austin Office Market">
	              {this.state.data.Header.navigation.Tab2}
	              </a>
	            </li>
	            <li className="banner__list">
	              <a className="banner__link" href="javascript:void(0);" onClick={ AustinScroll } title="Why Austin">
	              {this.state.data.Header.navigation.Tab1}
	              </a>
	            </li>
	          </ul>
	  </nav>
	  <div className="banner__content">
            <div className="banner__topcontent">
              <div className="banner__logonav">
              <div className="mbl_menu d-none d-block d-sm-block d-md-none">
              <div className="mbl_menuIcon">
                {/* <a href="javascript:void(0);" title="Menu">
                  <img className="menuImg" onClick={ menuChange } src={ require('../../Assets/images/menuimg.png')} />
                </a> */}
                <div class={`menuContainer ${this.state.iconMenu ? 'change':''}`} onClick={ menuChange }>
                    <div class="bar1"></div>
                    <div class="bar2"></div>
                    <div class="bar3"></div>
                </div>
              </div>
              </div>
                <h1 className="banner__logocont">
                  <a className="banner__logolink" href="javascript:void(0);" title="Austin Office Owners">
                    Austin Office Owners
                  </a>
                </h1>
                <nav className="banner__nav d-none d-md-block">
                  <ul className="banner__listcont">
                    <li className="banner__list">
                      <a className="banner__link" href="#AustinLandscape" title="Austin Landscape">
                      {this.state.data.Header.navigation.Tab4}
                      </a>
                    </li>
                    <li className="banner__list">
                      <a className="banner__link" href="#AustinOfcOwners" title="Top Office Owners">
                      {this.state.data.Header.navigation.Tab3}
                      </a>
                    </li>
                    <li className="banner__list">
                      <a className="banner__link" href="#AustinOfficeMarket" title="Austin Office Market">
                      {this.state.data.Header.navigation.Tab2}
                      </a>
                    </li>
                    <li className="banner__list">
                      <a className="banner__link" href="#WhyAustin" title="Why Austin">
                      {this.state.data.Header.navigation.Tab1}
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="banner__message">
                <p className="banner__msgcmpy">{this.state.data.Header.HeaderHeading.line1}</p>
                <h2 className="banner__msgdesc">{this.state.data.Header.HeaderHeading.line2}</h2>
                <p className="banner__msglocation">{this.state.data.Header.HeaderHeading.line3}</p>
              </div>
            </div>
            <div className="banner__botcontent hide--mobile">
              <div className="banner__botbox">
                <h3 className="banner__botheading">
                { this.state.data.Header.HeaderBlock.Block1.line1 }</h3>
                <h4 className="banner__botmsg">
                { this.state.data.Header.HeaderBlock.Block1.line2 }
                </h4>
                <p className="banner__botdesc">
                { this.state.data.Header.HeaderBlock.Block1.line3 }
                </p>
              </div>
              <div className="banner__botbox box--state">
                <h3 className="banner__botheading">{ this.state.data.Header.HeaderBlock.Block2.line1 }</h3>
                <h4 className="banner__botmsg">{ this.state.data.Header.HeaderBlock.Block2.line2 }</h4>
                <p className="banner__botdesc">&nbsp;</p>
              </div>
              <div className="banner__botbox box--job">
                <h3 className="banner__botheading">{ this.state.data.Header.HeaderBlock.Block3.line1 }</h3>
                <h4 className="banner__botmsg">{ this.state.data.Header.HeaderBlock.Block3.line2 }</h4>
                <p className="banner__botdesc">{ this.state.data.Header.HeaderBlock.Block3.line3 }</p>
              </div>
              <div className="banner__botbox box--city">
                <h3 className="banner__botheading">{ this.state.data.Header.HeaderBlock.Block4.line1 }</h3>
                <h4 className="banner__botmsg">{ this.state.data.Header.HeaderBlock.Block4.line2 }</h4>
                <p className="banner__botdesc">{ this.state.data.Header.HeaderBlock.Block4.line3 }</p>
              </div>
            </div>
          </div>
          <div className="banner__botcontent pos--banner show--mobilegrid">
            <div className="banner__botbox">
              <h3 className="banner__botheading">
                { this.state.data.Header.HeaderBlock.Block1.line1 }</h3>
                <h4 className="banner__botmsg">
                { this.state.data.Header.HeaderBlock.Block1.line2 }
                </h4>
                <p className="banner__botdesc">
                { this.state.data.Header.HeaderBlock.Block1.line3 }
                </p>
            </div>
            <div className="banner__botbox box--state">
              	<h3 className="banner__botheading">{ this.state.data.Header.HeaderBlock.Block2.line1 }</h3>
                <h4 className="banner__botmsg">{ this.state.data.Header.HeaderBlock.Block2.line2 }</h4>
                <p className="banner__botdesc">&nbsp;</p>
            </div>
            <div className="banner__botbox box--job">
              	<h3 className="banner__botheading">{ this.state.data.Header.HeaderBlock.Block3.line1 }</h3>
                <h4 className="banner__botmsg">{ this.state.data.Header.HeaderBlock.Block3.line2 }</h4>
                <p className="banner__botdesc">{ this.state.data.Header.HeaderBlock.Block3.line3 }</p>
            </div>
            <div className="banner__botbox box--city">
              	<h3 className="banner__botheading">{ this.state.data.Header.HeaderBlock.Block4.line1 }</h3>
                <h4 className="banner__botmsg">{ this.state.data.Header.HeaderBlock.Block4.line2 }</h4>
                <p className="banner__botdesc">{ this.state.data.Header.HeaderBlock.Block4.line3 }</p>
            </div>
          </div>
        </div>
        {/* <!-- //banner --> */}
      </div>
    );
  }
}

export default Header;
