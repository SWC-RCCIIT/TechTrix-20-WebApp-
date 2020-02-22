import React, { Component } from 'react';

import './css/notfound.css'
import FlatButton from 'material-ui/FlatButton';

class NotFound extends Component {
  render() {
    return (
      <div className="NotFound">
		   		<div className="col-twelve">
			  			<h1 className="kern-this">404 Error.</h1>
			  			<p>
						Oooooops! Looks like nothing was found at this location.<br/>
						Maybe try on of the links below.
			  			</p><br/>
			  			<FlatButton label="TechTrix 2020" secondary={true} href="/" />
			   	</div>  		   			
      </div>
    );
  }
}

export default NotFound;
