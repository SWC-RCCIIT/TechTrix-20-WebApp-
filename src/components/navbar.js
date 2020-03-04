import React, { Component } from 'react';
import { Link} from 'react-router'
import firebase from '../static/firebase'
import '../css/navbar.css';

import MenuButton from './menubutton'
import Openmenu from './openmenu'

class NavBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      timeline : 0
    };
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});
  
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
    var menuOptions = [
                       
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
         

      // this.state.timeline!=0?
      // menuOptions.push({tit:'ff',linki:'/flagship'}): ''
      // console.log(menuOptions)

   //  this.state.timeline? menuOptions.push( {tit:'Reach us',linki:'/reachus'}) : '';


     menuOptions=menuOptions.map((item,index)=>{
      return(
              <Link to={item.linki}  key={index}>
                <button className="draw meet  navbut"><div>{item.tit}</div></button>
              </Link>
        )
})

    return (
       <div className="NavBar">
            <div className="rel-wrap">
             
              <div className="options-wrap" id="fullform">
                    {menuOptions}
                    {this.state.timeline ? <Link to="/timeline">
                <button className="draw meet  navbut"><div>Schedule</div></button>
              </Link> : ''}
                    
              </div>
              <div  id="shortform" className="options-wrap">
                    {/*<button onClick={this.handleToggle}>Menu</button>*/}
                    <MenuButton/>
                    <Openmenu/>
              </div>
            </div>    
      </div>
    );
  }
}

export default NavBar;
