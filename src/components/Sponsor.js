import React, { Component } from 'react'
import '../css/contact.css'
export class Sponsor extends Component {
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
              <p className="title" >{this.props.type? this.props.type: 'Loading...'}</p>
            
              <p>
                <center>
        <a target="_blank" style={{color:"white"}} href={this.props.web} >Website&nbsp;:&nbsp;{this.props.web}</a>
                </center>
              </p>
            
            </div>
          </div>
        </div>
        )
    }
}

export default Sponsor
