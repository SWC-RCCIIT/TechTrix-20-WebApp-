import React, { Component } from 'react';
import {Link} from 'react-router'
import firebase from '../static/firebase'
import Clear from 'material-ui/svg-icons/content/clear'
import Footer from './footermenu.js'
// components imports
// css imports
import '../css/openmenu.css';
const iconStyles = {
  height:40,
  width:40,
  marginTop:20
};
const style={
  backgound:`url(${require('../static/logo.png')}) 0 0 /100% 100%`
}

class OpenMenu extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      timeline : 0
    }
  }
  
  fetchSnapshot = async() => {
    let rootRef = firebase.database().ref('userTrack');

    let snapshot = await rootRef.once("value");

   

    this.setState({
      timeline : snapshot.val()
    })      

  
     console.log("after",this.state)
  }
  componentDidMount(){
    this.fetchSnapshot();

  }
  render() {
    var menuOptions =[ 
     
      {tit : 'Home' , linki : '/'},
      {tit:'Events',linki:'/events'},
      // {tit:'Schedule',linki:'/timeline'},
      {tit:'Flagship',linki:'/flagship'},
      // {tit:'Sponsors',linki:'/sponsors'},
     
     
      {tit:'Campus Ambassador',linki:'/ca'},
      {tit:'Sponsors',linki:'/sponsors'},
      {tit:'Our team',linki:'/contactus'},
      {tit:'Reach us',linki:'/reachus'}
                        
                      ]
        menuOptions=menuOptions.map((item,index)=>{
            return(
                          <Link to={item.linki} key={index}>
                            <button onClick={closemenu} className="draww meett  navbutt">{item.tit}</button>
                          </Link>
              )
      })
    function  closemenu(){
          var mydivi=document.getElementById('openmenu-cont')
        mydivi.style.width='00vw'
    }
    return (
      <div id="openmenu-cont">
       <div className="close-but-cont">
              <span  onClick={closemenu}>  
                  <Clear style={iconStyles}/>
            </span>
        </div>        
        <div id="second-child">
            
            {menuOptions}
            {this.state.timeline ? <Link to="/timeline">
                            <button onClick={closemenu} className="draww meett  navbutt">Schedule</button>
                          </Link> : ''}
        </div>
        <Footer/>
      </div>
    );
  }
}


export default OpenMenu;
