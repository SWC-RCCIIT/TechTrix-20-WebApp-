import React, { Component } from 'react'
import './RegUser.css'
export class RegUser extends Component {
    render() {
        return (
            <div class="user">
    <header class="user__header">
      
        <h1 class="user__title">Register for </h1>
    </header>
    
    <form class="form">
        <div class="form__group">
            <input type="text" placeholder="Full name" class="form__input" />
        </div>
        <div class="form__group">
            <input type="text" placeholder="College name" class="form__input" />
        </div>
        
        <div class="form__group">
            <input type="email" placeholder="Email" class="form__input" />
        </div>
        
        <div class="form__group">
            <input type="number" placeholder="Team size" class="form__input" />
        </div>
        
        <button class="btn" type="button">Register</button>
    </form>
</div>
        )
    }
}

export default RegUser
