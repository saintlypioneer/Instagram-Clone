import logo from './logo.svg';
import './App.css';
import Home from './components/Pages/Home';


import styled from "styled-components";
import {Routes, Route} from 'react-router-dom'

import Navbar from "./components/Organisms/Navbar";
import Chat from './components/Pages/Chat';
import Profile from './components/Pages/Profile';
import Explore from './components/Pages/Explore';
import Search from './components/Pages/Search';
import Reels from './components/Pages/Reels';
import Notifications from './components/Pages/Notifications';


function App() {
  return (
    <Container>
            <Navbar />
            <Content>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/chat' element={<Chat />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/explore' element={<Explore />} />
                <Route path='/search' element={<Search />} />
                <Route path='/reels' element={<Reels />} />
                <Route path='/notifications' element={<Notifications />} />
              </Routes>
            </Content>
        </Container>
  );
}

const Container = styled.div`
    display: flex;
`;

const Content = styled.div`
    flex-grow: 1;
    height: 100vh;
    margin-top: 0px;
    display: flex;
    justify-content: space-around;
    overflow-y: scroll;
`;

export default App;
