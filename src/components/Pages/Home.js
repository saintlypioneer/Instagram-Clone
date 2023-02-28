import React from "react";
import styled from "styled-components";

import Navbar from "../Organisms/Navbar";
import Posts from "../Organisms/Posts"
import Footer from "../Organisms/Footer";

import Chat from "./Chat";


function Home(props){
    return(
        <Container>
            <Navbar />
            <Content>

                <Chat />
                {/* <Posts />
                <Footer/> */}
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

export default Home;