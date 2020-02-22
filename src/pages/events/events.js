import React, { Component } from 'react';
import '../../css/events.css';

import EventsCard from '../../components/eventcard.js'
import EventsOptions2 from '../../components/eventsoptions2.js'
import firebase from '../../static/firebase'
import Db from '../../static/content.js'


class Events extends Component {
  constructor(props) {
      super(props);
      this.handler = this.handler.bind(this);
      this.state = {
        title:'',
        lin:'',
        options:[],
        Db : {},
        firdb: {
          "ROBOTICS" : {
            "title" : "",
            "options" : [],
            "content" : ""
          },
          "GEEKS" : {
            "title" : "",
            "options" : [],
            "content" : ""
          },
          "outofthebox" : {
            "title" : "",
            "options" : [],
            "content" : ""
          },
          "KALEIDOSCOPE" : {
            "title" : "",
            "options" : [],
            "content" : ""
          },
          "GAMING" : {
            "title" : "",
            "options" : [],
            "content" : ""
          },
          "CODING" : {
            "title" : "",
            "options" : [],
            "content" : ""
          }
          
        },
        imgLink : ''
      }; 
    }
  handler=(foo)=>{
        this.setState({
          title:foo.title,
          lin:foo.lin,
          options:foo.options,
         
        })

        if(foo.title=="ROBOTICS"){
          this.setState({
            imgLink : "./images/robotics.png"
          })
        }
        if(foo.title=="CODING"){
          this.setState({
            imgLink : './images/coding.png'
          })
        }
        if(foo.title=="GAMING"){
          this.setState({
            imgLink : "./images/gaming.png"
          })
        }
        if(foo.title=="GEEKS"){
          this.setState({
            imgLink : "./images/geeks.png"
          })
        }
        if(foo.title=="KALEIDOSCOPE"){
          this.setState({
            imgLink : "./images/kaleidoscope.png"
          })
        }
        if(foo.title=="OutOfTheBox"){
          this.setState({
            imgLink : "./images/outofthebox.png"
          })
        }
    }
    
  handleQuery=(value)=>{
      document.getElementById('Events').style.transform="translateX(-100vw)"
      var foo={};
          foo.title=Db[value].title
          foo.lin='/events/'+value
          foo.options=Db[value].options
          this.handler(foo)
  }
   fetchSnapshot = async() => {
    let rootRef = firebase.database().ref();

    let snapshot = await rootRef.once("value");
    this.setState({
      firdb : snapshot.val()
    })      
     console.log(this.state.firdb);
    // console.log("after",this.state)
  }
  render() {
    return(
      <div className="Events" id="Events">
        <div id="eventsCardCont" className="Events">
          <EventsCard pic="./images/robotics.png" title={this.state.firdb.ROBOTICS.title} lin="/events/robotics" options={this.state.firdb.ROBOTICS.options} content={this.state.firdb.ROBOTICS.content} action={this.handler}/>

          <EventsCard title={this.state.firdb.CODING.title} lin="/events/coding" options={this.state.firdb.CODING.options} content={this.state.firdb.CODING.content} action={this.handler}/>
          <EventsCard title={this.state.firdb.GAMING.title} lin="/events/gaming" options={this.state.firdb.GAMING.options} content={this.state.firdb.GAMING.content} action={this.handler}/>
          <EventsCard  title={this.state.firdb.GEEKS.title} lin="/events/geeks" options={this.state.firdb.GEEKS.options} content={this.state.firdb.GEEKS.content} action={this.handler}/>

          <EventsCard title={this.state.firdb.KALEIDOSCOPE.title} lin="/events/kaliedoscope" options={this.state.firdb.KALEIDOSCOPE.options} content={this.state.firdb.KALEIDOSCOPE.content} action={this.handler}/>
          <EventsCard title={this.state.firdb.outofthebox.title} lin="/events/outofthebox" options={this.state.firdb.outofthebox.options} content={this.state.firdb.outofthebox.content} action={this.handler}/>
 

        </div>
        <div id="eventsCardDtls" className="Events">
            <EventsOptions2 title={this.state.title} 
                            lin={this.state.lin} 
                            options={this.state.options}
                            pic={this.state.imgLink}
            />
        </div>
      </div>
      );
  }
  componentDidMount(){
    this.fetchSnapshot();
  //  console.log(snapshot);
    // this.setState({
    //   firdb : snapshot.val()
    // })
      // console.log("finish")
      let bar=this.props.location.query.type
      if(bar) this.handleQuery(bar)
      //console.log(this.state.firdb,"testobj")
  }

}
export default Events;
