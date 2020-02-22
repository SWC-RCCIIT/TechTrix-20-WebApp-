import React, { Component } from 'react';
import '../../css/home.css';
import ReactRotatingText from 'react-rotating-text'


// import custom modules

import TTLogo from '../../static/logo.png'


import '../../css/home_simple.css'


// const styles = {
//   headline: {
//     fontSize: 24,
//     paddingTop: 16,
//     marginBottom: 12,
//     fontWeight: 400,
//   },
//   slide: {
//     padding: 10,
//   },
// };

class Home extends Component {
      constructor(props) {
      super(props);
      this.state = {
        show : false
      };
    }
    openText=()=>{
      this.setState({
          show : true
      })
  }
  render() {
    return (
		<div className="Home">
      
        	<div className="HomeTTLogo">
            <div className="wrap-nitdlogo" style={{marginBottom:'20px'}}>
              <a href="">
                 {/* <img className="NitdLogoimg" src={NITDLogo}/>*/}
                  {/*<div className="NITDText">Presents</div> */}
              </a>
            </div>
				    <img className="HomeTTLogoimg" src={ TTLogo } alt="tt"/>
            <div className="TTDate">5th Mar - 7th Mar</div>
            <br/>
            <br/>

          {this.state.show ? '' : <a onClick={this.openText}  style={{width:"1000px", color:"white" }} id="reach-us">About TechTrix</a> }  

         {this.state.show ? <ReactRotatingText
          color="#cc0033"
           items={[ 'The Earth is the cradle of humanity,', 'but mankind cannot stay in the cradle forever.', 'Join us in our journey this year.','To Infinity & Beyond!']} /> : ''}
            
            
			    </div>
		</div>
    );
  }
}

export default Home;
