import React, { Component } from 'react'
import './Reach.css'
import { Link } from 'react-router'

export class Reach extends Component {


    
        constructor(props) {
            super(props);
            this.state = {
                 name: '',
                 email : '',
                 message : ''
                 }


        }
        handleChange (event) {
            this.setState( {[event.target.name] : event.target.value   })
          }
    
       onSubmit = (e) => {
           //console.log(this.state)
           e.preventDefault();
           
           
        }
    
    render() {
        return (
            <div>
            <div class="user">
    <header class="user__header">
      
        <h1 class="user__title">Reach Us</h1>
    </header>
    
    <form class="form" onSubmit={this.handleSearchTermSubmit}>
    <div class="form__group">
            <input type="text" placeholder="Full name" class="form__input" 
              value="To : techtrix@swcrcciit.org"
              disabled
            />
        </div>
        {this.props.location.query.event? 
         <div class="form__group">
         <input type="text"  class="form__input" 
         
        name="flagshipevent"
         value={this.props.location.query.event}
         />
     </div> :''
    
        }
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
        
        <div class="form__group" >
            <input  type="text" placeholder="Your message" class="form__input" 
             onChange={event => this.handleChange(event)}
             name="message"
            />
        </div>
        {this.state.name && this.state.email &&this.state.email ?   <Link to={{pathname :"/registered"}}>
        <button class="btn" type="button" >Send</button>
        </Link> :  <button class="btn" type="button" >Send</button>}
      
    </form>
   
</div>
<footer style={{color:"white"}}><center>Developed by Avijit Das</center></footer>
</div>
        )
    }
}

export default Reach
