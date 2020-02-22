import React, { Component } from 'react';
import '../../../css/registered.css';
// import '../../static/build/tracking-min.js'
import {Link} from 'react-router'


const style = {
};

const iconStyle={
  paddingTop:"1px"
}

class Registered extends Component {
  render () {
    return (
      <div className="Registered">
      		<div className="wrap-register">
      			<div className="main-tit">Success</div>
      		
		  		<div className="goback">
		  			<div className="firstdiv">Go back to events</div>
					  <br/>

					
		          <Link to="/events">
		           <button className="bt">Click here</button>
		          </Link>
		  		</div>
      		</div>

      </div>
    )
  }

}

export default Registered;
