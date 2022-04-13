import React from 'react';
import './App.css';
import HomePage from './Navigate/HomePage';
import Register from './Navigate/Register';
import About from './Navigate/About';
import SignIn from './Navigate/SignIn';
// import UserDashboard from './Navigate/UserDashboard';
import HotelBranches from './Navigate/UserDashboard/HotelBranches/HotelBranches'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Pune from './Navigate/UserDashboard/HotelBranches/Pune'
import Booking from './Navigate/Booking/Booking';
import Profile from './Navigate/UserDashboard/HotelBranches/Profile';
import UserProfile from './Navigate/UserDashboard/UserProfile';
import admin from './AdminPages/AdminSignin';
import Transaction from './Navigate/Transaction';
import Mumbai from './Navigate/UserDashboard/HotelBranches/Mumbai';
import Satara from './Navigate/UserDashboard/HotelBranches/Satara';
import AdminData from './AdminPages/AdminData';
import AdminUserData from './AdminPages/AdminUserData';
import AdminHomePage from './AdminPages/AdminHomePage';


function App() {
  return (
    <>
    <BrowserRouter>
      <div className="body">
        <Link to="/HomePage"></Link>

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/Register" component={Register}/>
          <Route exact path="/SignIn" component={SignIn} />
          <Route exact path="/About" component={About} />
          {/* <Route exact path="/UserDashboard" component={UserDashboard} /> */}
          <Route exact path="/HotelBranches" component={HotelBranches} />
          <Route exact path="/pune" component={Pune} />
          <Route exact path="/mumbai" component={Mumbai} />
          <Route exact path="/satara" component={Satara} />
          <Route exact path="/Booking" component={Booking} />
          <Route exact path="/Profile" component={Profile} />
          <Route exact path="/UserProfile" component={UserProfile} />
          <Route exact path="/Admin" component={admin} />
          <Route exact path="/admindata" component={AdminData} />
          <Route exact path="/adminuserdata" component={AdminUserData} />
          <Route exact path="/adminhomepage" component={AdminHomePage} />
          <Route exact path="/Transaction" component={Transaction} />
          <Route exact path="*" component={HomePage} />
          

        </Switch>
        </div>
    </BrowserRouter>
    </>
    
  )
};
export default App;