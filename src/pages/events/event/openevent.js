import React, { Component } from 'react';

import'../../../css/openevent.css'
// import Db from '../../../static/content.js'
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router'
import firebase from '../../../static/firebase'
// Parent Component
var sectionStyle={
  // backgroundImage:`url(${Background}`
};
const style = {
  margin: 12,
};
class OpenEvent extends Component {
  constructor(props) {
  	super(props);
  	this.state = {
		  d:{},
      category:'',
      firdb:{
        "BEG-BORROW-STEAL" : {
          "fee" : 0,
          "intro" : "",
          "intropoints" : [ "" ],
          "ps" : "",
          "rules1" : [ ],
          "team" : 0,
          "win" : "",
          "rules2" : ""
        },
        "Bugs Funny" : {
          "fee" : 0,
          "intro" : "",
          "intropoints" : [],
          "ps" : "",
          "rules1" : [ ],
          "team" : 0,
          "win" : "",
          "rules2" : ""
        },
        "CS 16" : {
          "fee" : 0,
          "intro" : "",
          "intropoints" : [],
          "ps" : "",
          "rules1" : [ ],
          "team" : 0,
          "win" : "",
          "rules2" : ""
        },
        "CS GO" : {
          "fee" : 0,
          "intro" : "",
          "intropoints" : [],
          "ps" : "",
          "rules1" : [ ],
          "team" : 0,
          "win" : "",
          "rules2" : ""
        },
        "Verbose" : {
          "fee" : 0,
          "intro" : "",
          "intropoints" : [],
          "ps" : "",
          "rules1" : [ ],
          "team" : 0,
          "win" : "",
          "rules2" : ""
        },
        "Sudoku" : {
          "fee" : 0,
          "intro" : "",
          "intropoints" : [],
          "ps" : "",
          "rules1" : [ ],
          "team" : 0,
          "win" : "",
          "rules2" : ""
        },
        
        "DOTA 2" : {
          "fee" : 0,
          "intro" : "",
          "intropoints" : [],
          "ps" : "",
          "rules1" : [ ],
          "team" : 0,
          "win" : "",
          "rules2" : ""
        },
        "NFS MW" : {
          "fee" : 0,
          "intro" : "",
          "intropoints" : [],
          "ps" : "",
          "rules1" : [ ],
          "team" : 0,
          "win" : "",
          "rules2" : ""
        },
        
        "FIFA 14" : {
          "fee" : 0,
          "intro" : "",
          "intropoints" : [],
          "ps" : "",
          "rules1" : [ ],
          "team" : 0,
          "win" : "",
          "rules2" : ""
        },
        "LINE FOLLOWER" : {
          "fee" : 0,
          "intro" : "",
          "intropoints" : [],
          "ps" : "",
          "rules1" : [ ],
          "team" : 0,
          "win" : "",
          "rules2" : ""
        },
        "Logia" : {
          "fee" : 0,
          "intro" : "",
          "intropoints" : [],
          "ps" : "",
          "rules1" : [ ],
          "team" : 0,
          "win" : "",
          "rules2" : ""
        },
        "Mathemagic" : {
          "fee" : 0,
          "intro" : "",
          "intropoints" : [],
          "ps" : "",
          "rules1" : [ ],
          "team" : 0,
          "win" : "",
          "rules2" : ""
        },
        "TechBiz" : {
          "fee" : 0,
          "intro" : "",
          "intropoints" : [],
          "ps" : "",
          "rules1" : [ ],
          "team" : 0,
          "win" : "",
          "rules2" : ""
        },
        "Fandom Quiz" : {
          "fee" : 0,
          "intro" : "",
          "intropoints" : [],
          "ps" : "",
          "rules1" : [ ],
          "team" : 0,
          "win" : "",
          "rules2" : ""
        },
        "Question Mark" : {
          "fee" : 0,
          "intro" : "",
          "intropoints" : [],
          "ps" : "",
          "rules1" : [ ],
          "team" : 0,
          "win" : "",
          "rules2" : ""
        },
        "MAZE SOLVER" : {
          "fee" : 0,
          "intro" : "",
          "intropoints" : [],
          "ps" : "",
          "rules1" : [ ],
          "team" : 0,
          "win" : "",
          "rules2" : ""
        },
        "Minute To Win It" : {
          "fee" : 0,
          "intro" : "",
          "intropoints" : [],
          "ps" : "",
          "rules1" : [ ],
          "team" : 0,
          "win" : "",
          "rules2" : ""
        },
        "PES Mobile" : {
          "fee" : 0,
          "intro" : "",
          "intropoints" : [],
          "ps" : "",
          "rules1" : [ ],
          "team" : 0,
          "win" : "",
          "rules2" : ""
        },
        "PHOTOGRAPHY" : {
          "fee" : 0,
          "intro" : "",
          "intropoints" : [],
          "ps" : "",
          "rules1" : [ ],
          "team" : 0,
          "win" : "",
          "rules2" : ""
        },
        "PUBG Mobile" : {
          "fee" : 0,
          "intro" : "",
          "intropoints" : [],
          "ps" : "",
          "rules1" : [ ],
          "team" : 0,
          "win" : "",
          "rules2" : ""
        },
        "QUIZ" : {
          "fee" : 0,
          "intro" : "",
          "intropoints" : [],
          "ps" : "",
          "rules1" : [ ],
          "team" : 0,
          "win" : "",
          "rules2" : ""
        },
        "Ethereal Labyrinth" : {
          "fee" : 0,
          "intro" : "",
          "intropoints" : [],
          "ps" : "",
          "rules1" : [ ],
          "team" : 0,
          "win" : "",
          "rules2" : ""
        },
        "Obedient Orbiter" : {
          "fee" : 0,
          "intro" : "",
          "intropoints" : [],
          "ps" : "",
          "rules1" : [ ],
          "team" : 0,
          "win" : "",
          "rules2" : ""
        },
        "Spell Bee" : {
          "fee" : 0,
          "intro" : "",
          "intropoints" : [],
          "ps" : "",
          "rules1" : [ ],
          "team" : 0,
          "win" : "",
          "rules2" : ""
        },
        "T-shirt Painting" : {
          "fee" : 0,
          "intro" : "",
          "intropoints" : [],
          "ps" : "",
          "rules1" : [ ],
          "team" : 0,
          "win" : "",
          "rules2" : ""
        },
        "TREASURE HUNT" : {
          "fee" : 0,
          "intro" : "",
          "intropoints" : [],
          "ps" : "",
          "rules1" : [ ],
          "team" : 0,
          "win" : "",
          "rules2" : ""
        },
        "Web & App Development" : {
          "fee" : 0,
          "intro" : "",
          "intropoints" : [],
          "ps" : "",
          "rules1" : [ ],
          "team" : 0,
          "win" : "",
          "rules2" : ""
        },
        "Robowars: Techtrix Lightweight" : {
          "fee" : 0,
          "intro" : "",
          "intropoints" : [],
          "ps" : "",
          "rules1" : [ ],
          "team" : 0,
          "win" : "",
          "rules2" : ""
        },
        "Robowars: Techtrix Hobbyweight" : {
          "fee" : 0,
          "intro" : "",
          "intropoints" : [],
          "ps" : "",
          "rules1" : [ ],
          "team" : 0,
          "win" : "",
          "rules2" : ""
        },
        "Escape Velocity" : {
          "fee" : 0,
          "intro" : "",
          "intropoints" : [],
          "ps" : "",
          "rules1" : [ ],
          "team" : 0,
          "win" : "",
          "rules2" : ""
        },
        "Astral Clutch" : {
          "fee" : 0,
          "intro" : "",
          "intropoints" : [],
          "ps" : "",
          "rules1" : [ ],
          "team" : 0,
          "win" : "",
          "rules2" : ""
        },

        "Escape Velocity Autonomous" : {
          "fee" : 0,
          "intro" : "",
          "intropoints" : [],
          "ps" : "",
          "rules1" : [ ],
          "team" : 0,
          "win" : "",
          "rules2" : ""
        },
        "Galactic Soccer" : {
          "fee" : 0,
          "intro" : "",
          "intropoints" : [],
          "ps" : "",
          "rules1" : [ ],
          "team" : 0,
          "win" : "",
          "rules2" : ""
        },
        "Cosmic Overdrive" : {
          "fee" : 0,
          "intro" : "",
          "intropoints" : [],
          "ps" : "",
          "rules1" : [ ],
          "team" : 0,
          "win" : "",
          "rules2" : ""
        },
        "Machine Learning" : {
          "fee" : 0,
          "intro" : "",
          "intropoints" : [],
          "ps" : "",
          "rules1" : [ ],
          "team" : 0,
          "win" : "",
          "rules2" : ""
        },
        "False Note" : {
          "fee" : 0,
          "intro" : "",
          "intropoints" : [],
          "ps" : "",
          "rules1" : [ ],
          "team" : 0,
          "win" : "",
          "rules2" : ""
        },
        "One Shot" : {
          "fee" : 0,
          "intro" : "",
          "intropoints" : [],
          "ps" : "",
          "rules1" : [ ],
          "team" : 0,
          "win" : "",
          "rules2" : ""
        },
        "Seek Sutra" : {
          "fee" : 0,
          "intro" : "",
          "intropoints" : [],
          "ps" : "",
          "rules1" : [ ],
          "team" : 0,
          "win" : "",
          "rules2" : ""
        },
        "Capture The Flag" : {
          "fee" : 0,
          "intro" : "",
          "intropoints" : [],
          "ps" : "",
          "rules1" : [ ],
          "team" : 0,
          "win" : "",
          "rules2" : ""
        },
        "Poster Designing" : {
          "fee" : 0,
          "intro" : "",
          "intropoints" : [],
          "ps" : "",
          "rules1" : [ ],
          "team" : 0,
          "win" : "",
          "rules2" : ""
        },
        "Best Out of Waste" : {
          "fee" : 0,
          "intro" : "",
          "intropoints" : [],
          "ps" : "",
          "rules1" : [ ],
          "team" : 0,
          "win" : "",
          "rules2" : ""
        },
        "Behind The Lens" : {
          "fee" : 0,
          "intro" : "",
          "intropoints" : [],
          "ps" : "",
          "rules1" : [ ],
          "team" : 0,
          "win" : "",
          "rules2" : ""
        },
        "Score It" : {
          "fee" : 0,
          "intro" : "",
          "intropoints" : [],
          "ps" : "",
          "rules1" : [ ],
          "team" : 0,
          "win" : "",
          "rules2" : ""
        },
        "Rainbow Six Siege" : {
          "fee" : 0,
          "intro" : "",
          "intropoints" : [],
          "ps" : "",
          "rules1" : [ ],
          "team" : 0,
          "win" : "",
          "rules2" : ""
        },
        "Code Relay" : {
          "fee" : 0,
          "intro" : "",
          "intropoints" : [],
          "ps" : "",
          "rules1" : [ ],
          "team" : 0,
          "win" : "",
          "rules2" : ""
        }
        
        
        

        
        

      },
      user:null

  	};
  }
  handleClick=()=>{
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }

  // var foo=Db.this.props.params.id
  render() {

    var foo=this.props.params.id
    //console.log(foo,"ppp")
    var bar=this.state.firdb[foo]
    //console.log(bar,"bbb")
    var options=bar.rules1.map((item,index)=>{
            return(
                            <p key={index} dangerouslySetInnerHTML={{__html:item}}/>
              )
    })
    
    let teamSize = null;
    if(bar.team!=null)
    {
        teamSize = <div className="rules" >
        <div>Team Size:&nbsp;{bar.team}</div>
        
        </div>
    }
    var round1=null;
    var round2=null;
    var options2=null;
    
    var introoptions=null;
    if(bar.intropoints.length){
      var foo=bar.intropoints.map((item,index)=>{
          return(<p key={index} dangerouslySetInnerHTML={{__html:item}}/>)
      })
      introoptions=<div className="introoptions">
                        
                          {foo}
                       
                    </div>
    }

    return (
      <div className="OpenEvent" style={sectionStyle}>
             <div className="title comOE">{this.props.params.id}</div>
             <div className="img-cont comOE">
               {this.state.category == "ROBOTICS" ?  <img src="./images/robotics.png" className="icon"/> : ''}

               {this.state.category == "CODING" ?  <img src="./images/coding.png" className="icon"/> : ''}
               {this.state.category == "GAMING" ?  <img src="./images/gaming.png" className="icon"/> : ''}
               {this.state.category == "GEEKS" ?  <img src="./images/geeks.png" className="icon"/> : ''}
               {this.state.category == "KALEIDOSCOPE" ?  <img src="./images/kaleidoscope.png" className="icon"/> : ''} 
               {this.state.category == "OutOfTheBox" ?  <img src="./images/outofthebox.png" className="icon"/> : ''}              
              </div>
             <div className="intro comOE" dangerouslySetInnerHTML={{__html:bar.intro}}></div>
              {introoptions}
             
              
             <div className="rules">
                  
                  {round1}
                  <div>
                   
                     {options}
                    
                  </div>
                  {round2}
                  {options2}

             </div>
             {teamSize}
             {this.props.params.id!=='PAINTBALL'&&this.props.params.id!=='BULL RIDE'?
               <div className="rules">
                  <div>Registration Fee </div>
                  <div className="fee"> <b>₹</b>  <span>{bar.fee}</span></div>
               </div>
               :''
            }
             { bar.win ?
               <div className="rules">
                    <div>Criteria for victory </div>
                    <div>{bar.win}</div>
               </div>
               :''
             }
             <div className="alert">
                **In case of any ambiguity or controversy, 
                the decision of the coordinating committee shall be binding to all.
             </div>
             <div className="reg-cont">
                
                {/* { this.props.location.pathname!=='/events/CODING/HACKATHON'?
                  <Link to={{pathname:'/reguser',query:{event:this.props.params.id,category:this.state.category}}}>
                    <RaisedButton 
                      label="Register" 
                      primary={true} 
                      style={style} 
                      />
                  </Link>
                :
                <Link to={{pathname:'/register',query:{event:this.props.params.id,category:this.state.category}}}>
                    <RaisedButton 
                          label="Register" 
                          primary={true} 
                          style={style} 
                    />
                 </Link>
                } */}


                {/* // i need to change thi one */}
                {/* {this.state.user ? 
<Link to={{pathname:'/reguser',query:{event:this.props.params.id,category:this.state.category}}}>
                
                <RaisedButton 
                      label="Register for this event" 

                      primary={true} 
                      style={style} 
                    
                      />
                      </Link>
                      
                      : 
                      <RaisedButton 
                      label="General registration" 

                      primary={true} 
                      style={style} 
                      onClick={this.handleClick}
                      />
                      } */}
                   
                      {
                       /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream ?
                       <Link to={{pathname:'/reguser',query:{event:this.props.params.id,category:this.state.category}}}>
                
                       <RaisedButton 
                             label="Register for this event" 
       
                             primary={true} 
                             style={style} 
                           
                             />
                             </Link>:
               <a id="regbtn" target="_blank" href="https://play.google.com/store/apps/details?id=com.orange.techtrix20">Register</a>
               
                      }
                    

             </div>
             {/*<div>{this.state.data.title}</div>*/}
      </div>
    );
  }

  logout=()=>{
    firebase.auth().signOut();
  }

  authListener=()=> {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }
  fetchData = async() => {
    let rootRef = firebase.database().ref();
    //console.log(rootRef)
    let snapshot = await rootRef.once("value");
    this.setState({
      firdb : snapshot.val()
    })      
  //  console.log(this.state.firdb);
    // console.log("after",this.state)
  }
  componentDidMount(){
    this.authListener();
  	this.fetchData()
    let str=this.props.location.pathname
    str=str.substring(str.lastIndexOf("/events/")+8,str.lastIndexOf("/"))
 
    this.setState({category:str})

  }
  
}

export default OpenEvent;
