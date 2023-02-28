import React from "react";
import styled from "styled-components";

import Navbar from "../Organisms/Navbar";
import Posts from "../Organisms/Posts"
import Footer from "../Organisms/Footer";

import Chat from "./Chat";


function Home(props){
    return(
        <>
                <Posts />
                <Footer/>
        </>
    );
}

export default Home;