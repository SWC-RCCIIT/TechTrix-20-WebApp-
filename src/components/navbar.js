import React, { Component } from 'react';
import { Link} from 'react-router'

import '../css/navbar.css';

import MenuButton from './menubutton'
import Openmenu from './openmenu'

class NavBar extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});
  


  render() {
    var menuOptions = [
                       
                        {tit : 'Home' , linki : '/'},
                        {tit:'Events',linki:'/events'},
                        // {tit:'Schedule',linki:'/timeline'},
                        {tit:'Flagship',linki:'/flagship'},
                        // {tit:'Sponsors',linki:'/sponsors'},

                        {tit:'Our team',linki:'/contactus'},
                        {tit:'Campus Ambassador',linki:'/ca'},

                        {tit:'Reach us',linki:'/reachus'}


                      ]
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
