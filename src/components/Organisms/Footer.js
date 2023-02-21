import React from "react";
import styled from "styled-components";

import UserInfoCard from "../Molecules/UserInfoCard";

function Footer(props){
    return(
        <Container>
            <UserInfoCard />
            <Suggestions>
                <div>
                    <p>Suggestions for you</p>
                    <button>See All</button>
                </div>
                <UserInfoCard />
                <UserInfoCard />
                <UserInfoCard />
            </Suggestions>
            <Quicklinks>
                <a href="#">About</a>
                <a href="#">Help</a>
                <a href="#">Press</a>
                <a href="#">API</a>
                <a href="#">Jobs</a>
                <a href="#">Privacy</a>
                <a href="#">Terms</a>
                <a href="#">Location</a>
                <a href="#">Language</a>
            </Quicklinks>
            <Copyright>
                © 2023 INSTAGRAM FROM META
            </Copyright>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    max-width: 320px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
`;

const Suggestions = styled.div`
    width: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 10px;

    &>div{
        display: flex;
        justify-content: space-between;

        p{
            font-size: 14px;
            font-weight: 600;
            color: rgb(142, 142, 142);
            margin: 0;
            padding: 0;
        }

        button{
            font-size: 12px;
            font-weight: 600;
            color: rgb(38, 38, 38);
            border: none;
            background-color: transparent;
            padding: 0 5px;
            margin: 0;
        }
    }
`;

const Quicklinks = styled.div`
    width: 100%;
    background-color: white;
    display: flex;
    flex-wrap: wrap;
    padding: 30px 0;

    a{
        text-decoration: none;
        font-size: 12px;
        font-weight: 400;
        color: rgb(199, 199, 199);
        padding: 0 3px;
    }

    a::before{
        content: '•';
    }

    a:first-child::before{
        content: '';
    }
`;

const Copyright = styled.div`
    width: 100%;
    background-color: white;
    font-size: 12px;
    font-weight: 400;
    color: rgb(199, 199, 199);
`;

export default Footer;