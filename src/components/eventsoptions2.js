import React, { Component } from 'react';

// modules
import '../css/eventsoptions2.css';
import EventsOptions from './eventoptions'


import FloatingActionButton from 'material-ui/FloatingActionButton';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';


const iconStyle={
  paddingTop:"0px"
}
const style={
    display:"inline-block",
    cursor  : "pointer",
    "background-color" : "#cc0039",
    "padding" : "10px",
    "border" : "1px solid #cc0039",
    "color" : "white"
}

class EventsOptions2 extends Component {
      constructor(props) {
      super(props);
      this.state = {
          toggle:1,
          event : ""
          
      };
    }
componentDidMount(){
  this.setState({
    event : this.props.title
  })
  // console.log(this.state.event,"ee")
  // console.log(this.props.title,"ff")
  
}
handleObject(){
  if(this.state.event=="ROBOTICS"){
    return (1)
  }else{
    return 2
  }
 
}
  
  handleClick=(value) => {
      document.getElementById('Events').style.transform="translateX(00vw)"
      // this.props.action()
  }
  render() {
    var alloptions=this.props.options.map((item,index)=>{
          return(<div className="cont" key={index}>
            <EventsOptions options={item} type={this.props.title}
            img="https://img.icons8.com/nolan/64/hover-car.png"
            />
            </div>)
    })
    return (
      <div className="EventsOptions2 comEO">
          <div className="topTitle comEO">
              <button onClick={this.handleClick}
                                    mini={true} 
                                    iconStyle={iconStyle} 
                                    zDepth={this.state.toogle}
                                    style={style}
                                    
                                    
                                    >
                                       &lt;- BACK
                     
              </button>
               <span className="title">{this.props.title}</span>
          </div>
          <div className="comEO options">
            {alloptions}
          </div>
      </div>
    );
  }
}

export default EventsOptions2;
