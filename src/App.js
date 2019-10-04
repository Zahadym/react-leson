import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/DIalogs/Dialogs";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path='/profile' render = { () => <Profile/>}/>
                    <Route path='/dialogs' render = { () => <Dialogs/>}/>
                    <Route path='/news' render = { () => <News/>}/>
                    <Route path='/music' render = { () => <Music/>}/>
                    <Route path='/settings' render = { () => <Setting/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
