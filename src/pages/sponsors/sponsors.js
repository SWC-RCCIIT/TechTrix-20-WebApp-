import React, { Component } from 'react';
import '../../css/sponsors.css';



class Sponsors extends Component {
      constructor(props) {
      super(props);
      this.state = {
        open: false,
      };
    }
  render() {
	  return(
	  <div>
	  
	  <div className="Absolute-Center">
		  <h1 style={{color:"white"}}>To be upated soon</h1>
		 <br/> 
		 </div>
		 
	<center>	 <a target="_blank" href="https://bit.ly/Techtrix20Sponsorship" style={{color:"#cc0039"}} id="chere" >
		<h2 style={{color:"#cc0039"}}>Click here to know more</h2></a>
	</center>
		 </div>)
  	// const spo=[
	// 	'pcm logo.png',
	// 	'ETS-TOEFL-4C.jpg',
	// 	'EDST Logo.png',
	// 	'IBC Logo.png',
	// 	'Canara-Bank-logo.png',
	// ]
  	// let	  spomap=spo.map(e=>{
  	// 	  		return(
  	// 	  			<img 
    //     				src={require('../../static/'+e)} 
    //     				className="co-sponsor-img" 
    //     				alt={e}
    //     			/>
  	// 	  			)
  	// 	  })
  	// const part=[
	// 	  {tit:'tata_hackathon.jpg',span:'Hackathon Partner'},
  	// 	{tit:'fidelity-international-logo.png',span:'ML Challenge Partner'},
  	// 	{tit:'ace academy logo.jpg',span:'Higher Education Partner'},
  	// 	{tit:'NDT logo.png',span:'Media Partner'},
    //   {tit:'smaaashlogo.jpg',span:'Recreation Partner'},
  	// 	{tit:'wittyfeed logo.png',span:'Official outreach Partner'},
  		
  	// ]
  	// let partmap=part.map(e=>{
  	// 	return(
  	// 			<div className="co-sponsors">
	// 				<span>{e.span}</span><br/>
	// 	        	<img 
	// 	        		src={require('../../static/'+e.tit)} 
	// 	        		className="co-sponsor-img" 
	// 	        		alt={e.tit}
	// 	        	/>
  	// 			</div>
  	// 		)
  	// })
    // return (
	// 	<div id="gallery">
		
	//   </div>
    // );
  }
}

export default Sponsors;
