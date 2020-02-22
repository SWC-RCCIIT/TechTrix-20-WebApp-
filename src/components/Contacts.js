import React, { Component } from 'react'
import '../css/contact.css'
export class Contacts extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    // console.log(this.props)
  }
    render() {
        return (
          <div className="column">
          <div className="card">
            
            <div className="container">
              {this.props.dp ? <center><img src={this.props.dp} alt="member" height="200px" width="200px"/></center>
              :
              <center><img src="./images/loadingdp.jpg" alt="Jane" height="200px" width="200px"/></center>}
            
            <center>  <h2>{this.props.name ? this.props.name : 'Loading...'}</h2></center>
              <p className="title" >{this.props.team? this.props.team: 'Loading...'}</p>
             <center> <p className="tit" >{this.props.subteam? this.props.subteam: 'Loading...'}</p>
             </center>
              <p>
                <center>
        <a style={{color:"white"}} href={this.props.phone} ><i className="fa fa-phone fa-lg" aria-hidden="true"></i>&nbsp;{this.props.phone}</a>
                  
                  <a href={this.props.facebook}><i className="fa fa-facebook-official fa-lg" aria-hidden="true"></i></a>
                  
                </center>
              </p>
            
            </div>
          </div>
        </div>
        )
    }
}

export default Contacts
