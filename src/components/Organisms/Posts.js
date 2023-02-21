import React from "react";
import styled from "styled-components";

import Post from "../Molecules/Post";

function Posts(props){
    return(
        <Container>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </Container>
    )
}

const Container = styled.div`
width: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default Posts