import React from 'react';
import NavBar from './components/navbar'
import Footer from './components/footer'
import Loader from './pages/Loader/Loader';

import './css/basic.css'
class Basic extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
       loaded : false
    }
    this.url = "https://retired.sounddogs.com/previews/57/mp3/580305_SOUNDDOGS__sc.mp3";
    this.audio = new Audio(this.url);
    this.audio.play();
 }
  componentDidMount(){
    setTimeout(() => {
      this.setState({ loaded:true });
    
    }, 5000);
    setInterval(()=>{ 
      this.audio.play();
     }, 35000);
   }
  render() {
    let path=this.props.location.pathname
    return (
      <div>
{ this.state.loaded ?   <div className="Basic">
                    <NavBar/>
                    <div className="Basicwrap">
                        {this.props.children}
                        {path!=='/pronite'&&path!=='/'?
                          <div className="maintain-padding"></div>
                        :''
                        }
                    </div>
                    {this.props.location.pathname==='/'?
                          <Footer/>
                        :''
                        }
                    
      </div>: <Loader/>}
    
      </div>
      
    
    );
  }
}

export default Basic;
