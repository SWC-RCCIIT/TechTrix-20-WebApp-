import React, { Component } from 'react'
import './campus.css'
import { Link } from 'react-router'
import { hashHistory } from 'react-router'
import firebase from '../../static/firebase'
import { white } from 'material-ui/styles/colors'
export class campus extends Component {


    
        constructor(props) {
            super(props);
            this.state = {
                text:'',
                 name: '',
                 email : '',
                 whatsapp : '',
                phone : '',
                shirt:'',
                institute:''
                 }


        }
        handleChange (event) {
            this.setState( {[event.target.name] : event.target.value   })
          }
    
       onSubmit = (e) => {
           //console.log(this.state)
           e.preventDefault();
            const campref = firebase.database().ref('camp-amb');
            campref.push(
                this.state
            )

           hashHistory.push('/registered');
           
        }
        changeText=()=>{
            this.setState({
                text : 'Enter all fields correctly'
            })
            console.log(this.state.text)

        }
    
    render() {
        return (
            <div>
            <div class="user">
    <header class="user__header">
    <h1 class="user__title">Every expedition doesn't just need guides but superheroes as well who make the journey memorable. Here's your chance to become one such superhero for us! 
<br/>
Fill the form below to register as a Campus Ambassador for TechTrix 2020.</h1>
    </header>
    
    <form class="form" onSubmit={this.handleSearchTermSubmit}>
 
        <div class="form__group">
            <input type="text" placeholder="Full name" class="form__input" 
                name="name"
                onChange={event => this.handleChange(event)}
            />
        </div>
        
        <div class="form__group">
            <input type="email" placeholder="Email" class="form__input" 
            onChange={event => this.handleChange(event)}
          name="email"
            
            />
        </div>
        <div class="form__group">
            <input type="phone" placeholder="WhatsApp No." class="form__input" 
            onChange={event => this.handleChange(event)}
          name="whatsapp"
            
            />
        </div>
        <div class="form__group">
            <input type="phone" placeholder="Phone Number" class="form__input" 
            onChange={event => this.handleChange(event)}
          name="phone"
            
            />
        </div>
        
        <div class="form__group" >
            <input  type="text" placeholder="Institute name" class="form__input" 
             onChange={event => this.handleChange(event)}
             name="institute"
            />
        </div>
        <div class="form__group" >
            <select class="form__input" onChange={event => this.handleChange(event)}
             name="shirt" >
                <option>
                    Select T-Shirt Size
                </option>
                <option>
                    M
                </option>
                <option>
                    L
                </option>
                <option>
                    XL
                </option>
                <option>
                    XXL
                </option>
            </select>
            />
        </div>
      
        {this.state.name!='' && this.state.email!='' && this.state.phone!='' ?   
        
        <button onClick={this.onSubmit} class="btn" type="button" >Send</button>
      :  <button onClick={this.changeText}  class="btn" type="button" >Send</button>}
     <center> <p id="ttext"  style={{color:white}}>{this.state.text}</p></center>
    </form>
   
</div>
</div>
        )
    }
}

export default campus
