import React, { Component } from 'react';
import Contacts from '../../components/Contacts'
import firebase from '../../static/firebase'

import '../../css/contact.css';
import contact_details from '../../static/contact_details' 

class Contact extends Component {
    constructor(props) {
      super(props);
      this.state = {
        slideIndex: 0,
        prevIndex:0,
        members : []
      };
    }
    fetchSnapshot = async() => {
      let rootRef = firebase.database().ref('members');
  
      let snapshot = await rootRef.once("value");
      this.setState({
        members : snapshot.val()
      })      
     console.log(this.state.members,"mem");
      // console.log("after",this.state)
    }
    componentDidMount(){
      this.fetchSnapshot();
    }
   
  render() {
    return (
    <div className="main">
      <blockquote className="blockquote">
        <p>
        Coming together is a beginning. Keeping together is progress. Working together is success.<br/>--Henry Ford
        </p>
        </blockquote>
      <div clasclassNames="row">

        {this.state.members.map((res,key)=>{
          return(
            <Contacts
          key={key}
          name={res.name}
          team = {res.team}
          dp={res.dp}
          phone = {res.phno}
          facebook={res.fb}
          subteam={res.subteam}
          />
          )
        })}
 
 
</div>
      </div>

    );
  }
}

export default Contact;
