import React from 'react'
import styled from 'styled-components'
import NavbarButton from '../Atoms/buttons/NavbarButton';
import NavbarLogo from '../Atoms/NavbarLogo';


function Navbar() {
  return (
    <Nav>
      <NavbarLogo/>
      <NavbarCenter>
        <NavbarButton active={false} notificationCount={8} icon='/images/home.svg' title='Home' />
        <NavbarButton active={false} notificationCount={8} icon='/images/search.svg' title='Search' />
        <NavbarButton active={false} notificationCount={8} icon='/images/explore.svg' title='Explore' />
        <NavbarButton active={false} notificationCount={8} icon='/images/reels.svg' title='Reels' />
        <NavbarButton active={false} notificationCount={8} icon='/images/messenger-outline-light.svg' title='Messages' />
        <NavbarButton active={false} notificationCount={8} icon='/images/heart.svg' title='Notifications' />
        <NavbarButton active={false} notificationCount={8} icon='/images/add.svg' title='Create' />
        <NavbarButton active={false} notificationCount={8} icon='https://images.unsplash.com/photo-1601233749202-95d04d5b3c00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2038&q=80' title='Profile' />
      </NavbarCenter>
      <NavbarButton active={false} notificationCount={8} icon='/images/burger.svg' title='More' />
    </Nav>
  )
}

const Nav = styled.div`
  background-color: white;
  width: 280px;
  height: 100vh;
  padding: 15px;
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: space-between;

  @media (max-width: 768px){
    /* for tablets */
    background-color: white;
    width: fit-content;
  }

  @media (max-width: 320px){
    /* for mobiles */
    background-color: aqua;
    width: 100vw;
    height: fit-content;
    padding: 0;
    position: absolute;
    bottom: 0;
    flex-direction: row;
  }
`;

const NavbarCenter = styled.div`
  flex-grow: 1;
  margin-top: 10px;

  @media (max-width: 320px){
    display: flex;
  }
`;


export default Navbar