import React, { Component } from 'react'
import './GetInTouch.css'
export class GetInTouch extends Component {
    render() {
        return (
            <div className="column">
            <div clasclassNames="card">
              <img src="/w3images/team1.jpg" alt="Jane" />
              <div className="container">
                <h2>Jane Doe</h2>
                <p className="title">CEO & Founder</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>example@example.com</p>
                <p><button className="button">Contact</button></p>
              </div>
            </div>
          </div>
        )
    }
}

export default GetInTouch
