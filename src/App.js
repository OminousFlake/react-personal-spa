import React from 'react';
import './App.css';
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import {Route} from "react-router-dom";
import RouteGenerator from "./components/RouteGenerator/RouteGenerator";
import GalleryContainer from "./components/Gallery/GalleryContainer";
import SudokuContainer from "./components/Sudoku/SudokuContainer.js";
import Articles from'./components/Articles/Articles.js';

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <div className='app-wrapper__content'>
                <Route exact path='/' render={() =>
                    <Profile/>}/>
                <Route path='/profile' render={() =>
                    <Profile/>}/>
                <Route path='/route-generator' render={() =>
                    <RouteGenerator/>}/>
                <Route path='/gallery' render={() =>
                    <GalleryContainer/>}/>
                <Route path='/sudoku' render={() => 
                    <SudokuContainer />}/>
                <Route path='/articles' render={() => 
                    <Articles />}/>
            </div>
        </div>
    );
};

export default App;
