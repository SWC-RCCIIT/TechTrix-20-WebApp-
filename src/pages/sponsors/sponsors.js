import React, { Component } from 'react';
import Sponsor from '../../components/Sponsor'
import firebase from '../../static/firebase'

class Sponsors extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  slideIndex: 0,
		  prevIndex:0,
		  sponsors : []
		};
	  }
	  fetchSnapshot = async() => {
		let rootRef = firebase.database().ref('sponsors');
	
		let snapshot = await rootRef.once("value");
		this.setState({
		  sponsors : snapshot.val()
		})      
	   console.log(this.state.sponsors,"mem");
		// console.log("after",this.state)
	  }
	  componentDidMount(){
		this.fetchSnapshot();
	  }
  render() {
	  return(
		<div className="main">
		<div clasclassNames="row">
  
		  {this.state.sponsors.map((res,key)=>{
			return(
			  <Sponsor
			key={key}
			name={res.title}
			type = {res.info}
			dp={res.logo}
			web = {res.web}
			/>
			)
		  })}
   
   
  </div>
		</div>
	  )
  }
}

export default Sponsors;
