import React, { Component } from 'react'
import './RegUser.css'
import firebase from '../static/firebase'
import { hashHistory } from 'react-router'

export class RegUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text:'',
             name: '',
             email : '',
            phone : '',
            college:'',
            team : 1,
            name2:  '',
            phone2 : '',
            name3: '',
            phone3 :''
             }


    }
    componentDidMount(){
        console.log(this.props)
    }
    handleChange (event) {
        this.setState( {[event.target.name] : event.target.value   })
      }

   onSubmit = (e) => {
       //console.log(this.state)
       e.preventDefault();
      // console.log(this.state)

       if(this.state.team==1){
        const campref = firebase.database().ref('registration');
        campref.push({
            name :  this.state.name,
           college :  this.state.college,
       email :      this.state.email,
       phone :      this.state.phone,
          team :  this.state.team,
          event : this.props.location.query.event
        }
         
        )
       }
       if(this.state.team==2){
        const campref = firebase.database().ref('registration');
        campref.push(
            {
              name:   this.state.name,
           college:     this.state.college,
          email :      this.state.email,
           phone:     this.state.phone,
               team: this.state.team,
             name2:   this.state.name2,
               phone2: this.state.phone2,
          event : this.props.location.query.event

            }
            
        )
       }
       if(this.state.team==3){
        const campref = firebase.database().ref('registration');
        campref.push({
           name :  this.state.name,
           college :  this.state.college,
           email : this.state.email,
          phone :  this.state.phone,
         team :   this.state.team,
         name2:   this.state.name2,
         phone2 :   this.state.phone2,
          name3:  this.state.name3,
          phone3:  this.state.phone3,
          event : this.props.location.query.event

        }
       

        )
       }
        

       hashHistory.push('/registered');
       
    }
    fuckYou=()=>{
      //  console.log("ppp")
        let p=''
        for(let i = 1; i <= this.state.team; i++) {
          p+='<div class="form__group"><input type="text" name="name[]" placeholder="Full name" class="form__input"bonChange={event => this.handleChange(event)} /></div>'
        }
      return p
    }
    changeText=()=>{
        // this.setState({
        //     text : 'Enter all fields correctly'
        // })
      //  console.log(this.state.text)

    }
    render() {
        return (
            <div class="user">
    <header class="user__header">
      
        <h1 class="user__title">Register for </h1>
    </header>
    
    <form class="form">
        <div class="form__group">
            <input type="text" name="name" placeholder="Full name" class="form__input"
            onChange={event => this.handleChange(event)} />
        </div>
        <div class="form__group">
            <input type="text" name="college" placeholder="College name" class="form__input"
            onChange={event => this.handleChange(event)} />
        </div>
        
        <div class="form__group">
            <input type="email" name="email" placeholder="Email" class="form__input" 
            onChange={event => this.handleChange(event)}/>
        </div>
        <div class="form__group">
            <input type="phone" name="phone" placeholder="Phone" class="form__input" 
            onChange={event => this.handleChange(event)}/>
        </div>
        
        <div class="form__group">
            <select  name="team" class="form__input" 
            
            onChange={event => this.handleChange(event)}>
                <option>Team size</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>


                </select>
        </div>
        {this.state.team ==2  ?<test>   <div class="form__group">
            <input type="text" name="name2" placeholder="Full name(member 2)" class="form__input"
            onChange={event => this.handleChange(event)} />
        </div> <div class="form__group">
            <input type="phone" name="phone2" placeholder="Phone(member 2)" class="form__input" 
            onChange={event => this.handleChange(event)}/>
        </div></test> : '' }
        {this.state.team ==3  ?<test>   <div class="form__group">
            <input type="text" name="name2" placeholder="Full name(member 2)" class="form__input"
            onChange={event => this.handleChange(event)} />
        </div> <div class="form__group">
            <input type="phone" name="phone2" placeholder="Phone(member 2)" class="form__input" 
            onChange={event => this.handleChange(event)}/>
        </div>
        <div class="form__group">
            <input type="text" name="name3" placeholder="Full name(member 3)" class="form__input"
            onChange={event => this.handleChange(event)} />
        </div> <div class="form__group">
            <input type="phone" name="phone3" placeholder="Phone(member 3)" class="form__input" 
            onChange={event => this.handleChange(event)}/>
        </div>
        </test> : '' }


        {this.state.name!='' && this.state.email!='' && this.state.phone!='' && this.state.team!='Team size' ?   
        
        <button onClick={this.onSubmit} class="btn" type="button" >Submit</button>
      :  <button onClick={this.changeText}  class="btn" type="button" >Submit</button>}
     <center> <p className="ttext" >{this.state.text}</p></center>
    </form>
</div>
        )
    }
}

export default RegUser
