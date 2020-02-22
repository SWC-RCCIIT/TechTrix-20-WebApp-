import React, { Component } from 'react';
import '../../css/timeline.css';
import Event from 'material-ui/svg-icons/action/event';
import Location from 'material-ui/svg-icons/communication/location-on';
import firebase from '../../static/firebase'
import Db from '../../static/schedule'
class Timeline extends Component {
      constructor(props) {
      super(props);
      this.state = {
        open: false,
        firdb :{
          "day1":[
            {
              "tit" : "",
              "des" : "",
              "loc" : ""
            }
          ],
          "day2":[
            {
              "tit" : "",
              "des" : "",
              "loc" : ""
            }
          ],
          "day3":[
            {
              "tit" : "",
              "des" : "",
              "loc" : ""
            }
          ]
        }
      };
    }
    fetchSnapshot = async() => {
      let rootRef = firebase.database().ref('timeline');
  
      let snapshot = await rootRef.once("value");
      this.setState({
        firdb : snapshot.val()
      })      
      // console.log(this.state.firdb);
      // console.log("after",this.state)
    }
    componentDidMount(){
      this.fetchSnapshot();
     // console.log(this.state.firdb,"fire")
    }
  render() {
    let list1=this.state.firdb.day1.map((e,i)=>{
        return(
            <div className={i%2?"container right":"container left"}>
              <div className="content">
                <h2>Time :</h2>
                  <div className="loc"><span>{e.tit}</span></div>
                  <h2>Event :</h2>
                  <p className="des"> {e.des} <span></span><span>.</span></p>
                  <h2>Place :</h2>
                  <p className="loc"><span>{e.loc}</span></p>
              </div>
            </div>
          )
    })
    let list2=this.state.firdb.day2.map((e,i)=>{
        return(
            <div className={i%2?"container left":"container right"}>
              <div className="content">
              <h2>Time :</h2>
                  <div className="loc"> <span>{e.tit}</span></div>
                  <h2>Event :</h2>
                  <p className="des"> {e.des} <span></span><span>.</span></p>
                  <h2>Place :</h2>
                  <p className="loc"><span>{e.loc}</span></p>
              </div>
            </div>
          )
    })
    let list3=this.state.firdb.day3.map((e,i)=>{
      return(
          <div className={i%2?"container left":"container right"}>
            <div className="content">
            <h2>Time :</h2>
                <div className="loc"> <span>{e.tit}</span></div>
                <h2>Event :</h2>
                <p className="des"> {e.des} <span></span><span>.</span></p>
                <h2>Place :</h2>
                <p className="loc"><span>{e.loc}</span></p>
            </div>
          </div>
        )
  })
    return (
      <div className="Timeline">
        <div className="schedule-tit">Day 1</div>
        <div className="timeline">
          {list1}
        </div>
        <div className="schedule-tit">Day 2</div>
        <div className="timeline">
          {list2}
        </div>
        <div className="schedule-tit">Day 3</div>
        <div className="timeline">
          {list3}
        </div>
        <div className="timeline-main-margin"></div>

      </div>
    );
  }
}

export default Timeline;
