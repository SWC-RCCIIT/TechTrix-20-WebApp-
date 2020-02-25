import React, { Component } from 'react';
import { Router, Route,hashHistory } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './App.css';


// Components Modules
import Basic from './basic.js'
// import NavBar from './components/navbar'
// import Footer from './components/footer'
// import OpenMenu from './components/openmenu'
// import MenuButton from './components/menubutton'
// Pages Modules
import Home from './pages/home/home'
import Events from './pages/events/events'

import Flagship from './components/Flagship'
import Sponsors from './pages/sponsors/sponsors.js'
import Lectures from './pages/Lectures/lectures'
import NotFound from './notfound.js'
import OpenEvent from './pages/events/event/openevent.js'
import Forms from './pages/events/event/forms.js'
import Registered from './pages/events/event/registered.js'
import ErrorPage from './pages/events/event/errorpage.js'
import Team from './pages/team/team.js'
import OpenTeam from './pages/team/openteam.js'
import campus from './pages/campus_amb/campus'
import Contact from './pages/contact/contact.js'
import Canvas from './components/canvas_2d.js'
import Reach from './pages/Reach/Reach'
import Timeline from './pages/timeline/timeline.js'
import RegUser from './components/RegUser'
const styles={
  // backgroundImage:`url(${logo})`
}
// Parent Component
class App extends Component {
  render() {
    return (
      <div className="App" style={styles}>
             <MuiThemeProvider>
                  <div>
                    <Router history={hashHistory}>
                      <Route path="/home"component={Basic}>
                           <Route path="/" component={Home}/>
                           <Route path="/events" component={Events}/>
                           {/*<Route path="/getintouch" Component={GetInTouch} />*/}
                           <Route path="/team" component={Team}/>
                           <Route path="/team/:id" component={OpenTeam}/>
                           <Route path="/flagship" component={Flagship}/>
                           <Route path="/events/robotics/:id" component={OpenEvent}/>
                           <Route path="/events/gaming/:id" component={OpenEvent}/>
                           <Route path="/events/geeks/:id" component={OpenEvent}/>
                           <Route path="/reguser" component={RegUser}/>
                           <Route path="/events/kaleidoscope/:id" component={OpenEvent}/>
                           <Route path="/ca" component={campus}/>
                           
                           <Route path="/reachus" component={Reach}/>
                            
                           <Route path="/events/outofthebox/:id" component={OpenEvent}/>

                           <Route path="/events/coding/:id" component={OpenEvent}/>
                           <Route path="/register" component={Forms}/>
                           {/*<Route path="/registerpaintball" component={Forms1}/>*/}
                           <Route path="/registered" component={Registered}/>
                           <Route path="/error" component={ErrorPage}/>
                           <Route path="/contactus" component={Contact}/>
                           {/* <Route path="/edmnight" component={Pronite}/> */}
                           <Route path="/lectures" component={Lectures}/>
                           {/*<Route path="/merchandise" component={Merch}/>*/}
                           <Route path="/timeline" component={Timeline}/>
                           <Route path="/sponsors" component={Sponsors}/>
                       </Route>
                       <Route path="*" component={NotFound}/>
                    </Router>
                  </div>
             </MuiThemeProvider>
             <Canvas/>
      </div>
    );
  }
}

export default App;
