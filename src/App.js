import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Messages from "./components/Messages/Messages";
import {Route} from "react-router-dom";
import RouteGenerator from "./components/RouteGenerator/RouteGenerator";

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper__content'>
                <Route path='/profile' render={() =>
                    <Profile/>}/>
                <Route path='/messages' render={() =>
                    <Messages/>}/>
                <Route path='/route-generator' render={() =>
                    <RouteGenerator/>}/>
            </div>
        </div>
    );
};

export default App;
