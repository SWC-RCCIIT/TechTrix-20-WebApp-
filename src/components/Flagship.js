
import React, { Component } from 'react';
import Divider from 'material-ui/Divider';
// css impoorts
import '../css/eventscard.css';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ArrowDown from 'material-ui/svg-icons/maps/near-me';
import '../css/events.css';
import Modal, {closeStyle} from 'simple-react-modal'
// custom modules import
import { Link } from 'react-router'

import firebase from '../static/firebase'






var i=1;
class Flagship extends Component {
  constructor(props) {
      super(props);
      this.state = {
        toggle:1,
        
          flagship:[
            {
              title : "Keynote Sessions",
              content : ""
            },
            {
              title : "Lightning Talks",
              content : ""
            },
            {
              title : "DevSprints",
              content : ""
            },
            {
              title : "B-Plan Contest",
              content : ""
            },
            {
              title : "B-Plan Contest",
              content : ""
            }
            
          ]
        
      };
      

  }
  fetchSnapshot = async() => {
    let rootRef = firebase.database().ref('flagship');

    let snapshot = await rootRef.once("value");

   

    this.setState({
      flagship : snapshot.val()
    })      

  
    // console.log("after",this.state)
  }
  componentDidMount(){
    this.fetchSnapshot();

  }

  render() {
    
    return (
  
         <div className="Events" id="Events"  >
          
         <div id="eventsCardCont" className="Events">
           

{this.state.flagship.map((val,key)=>{
  return(
    // <Link to={{pathname : "/reachus", query:{event:val.title}}}>
    <div className="EventsCard comEC" >
            
    <div className="layer1 comEC" id="layer2">
        <div className="layer1-tit comEC">{val.title}</div>
            <Divider inset={true} style={{"backgroundColor":"black",}}/>
            <Divider  style={{"backgroundColor":"#cc0039"}}/>
            <div className="comEC" id="expandable">
              <div id="expandButton">
                  
              </div>
  <div className="expandable-div">{val.content}</div>
            </div>
      </div>
    
    
  </div>
  // </Link>
  );
})}
          
         </div>
         
  
      
      </div>
      
      );
  }

}

export default Flagship;
