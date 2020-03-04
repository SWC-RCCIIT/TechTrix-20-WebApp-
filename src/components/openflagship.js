import React, { Component } from 'react'
import '../css/openflagship.css'
import firebase from '../static/firebase'
export class openflagship extends Component {
    constructor(props) {
        super(props);
        this.state = {
          flagship :[]
        }
    }
    fetchSnapshot = async() => {
        let rootRef = firebase.database().ref('flagship');
    
        let snapshot = await rootRef.once("value");
    
       
    
        this.setState({
          flagship : snapshot.val()
        })      
    
      
        console.log("after",this.state)
        console.log("id",this.props.params.id)
      }
      componentDidMount(){
        this.fetchSnapshot();
    
      }
    render() {
        return (
            
                <aside class="profile-card">
    <header>
    {this.state.flagship.length == 0 ? 'Loading'  :
             <a><img alt="flag" src={this.state.flagship[this.props.params.id].img}/></a>
            }
      
        <h1>

            {this.state.flagship.length == 0 ? 'Loading'  :
             this.state.flagship[this.props.params.id].title
            }
        </h1>
     
    </header>
    <div className="profile-bio">
    {this.state.flagship.length == 0 ? 'Loading'  :
  <p dangerouslySetInnerHTML={{__html:this.state.flagship[this.props.params.id].body}}></p>
          
          }
      
    
     
    </div>
  </aside>
            
        )
    }
}

export default openflagship
