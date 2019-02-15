import React from 'react'
import { Route } from "react-router-dom"
import LandingPage from './LandingPage'
import ResortsPage from './ResortsPage'
import GuidesPage from './GuidesPage'
import BookingPage from './BookingPage'
import SignUp from './SignUp'
import EditProfile from './EditProfile';
import ProfilePage from './ProfilePage';

const MainView = () => {
    return (
        <div>
            <Route exact path="/" component={LandingPage} />
            <Route path="/resorts" component={ResortsPage} />
            <Route path="/guides" component={GuidesPage} />
            <Route path="/booking" component={BookingPage} />
            <Route path="/auth/signup" component={SignUp} />
            <Route path="/profile" component={EditProfile} />
            <Route path="/myprofile" component={ProfilePage} />
        </div>
    )
}

export default MainView
