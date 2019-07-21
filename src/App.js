import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Messages from "./components/Messages/Messages";
import {Route} from "react-router-dom";
import RouteGenerator from "./components/RouteGenerator/RouteGenerator";
import GalleryContainer from "./components/Gallery/GalleryContainer";
import SudokuContainer from "./components/Sudoku/SudokuContainer.js";

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper__content'>
                <Route exact path='/' render={() =>
                    <Profile/>}/>
                <Route path='/profile' render={() =>
                    <Profile/>}/>
                <Route path='/messages' render={() =>
                    <Messages/>}/>
                <Route path='/route-generator' render={() =>
                    <RouteGenerator/>}/>
                <Route path='/gallery' render={() =>
                    <GalleryContainer/>}/>
                <Route path='/sudoku' render={() => 
                    <SudokuContainer />}/>
            </div>
        </div>
    );
};

export default App;
