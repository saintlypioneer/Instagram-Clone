import React from "react";
import styled from "styled-components";

function UserInfoCard(props){
    return(
        <Container>
            <img src="https://pbs.twimg.com/profile_images/1295112038096629760/3eCOaKDb_400x400.jpg" alt="" />
            <Contents>
                <p>simonsinek
                    <img src="/images/verified.svg" />
                </p>
                <p>Simon Sinek</p>
            </Contents>
            <button>Switch</button>
        </Container>
    );
}

const Container = styled.div`
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    display: flex;
    width: 100%;
    max-width: 320px;
    justify-content: space-between;
    align-items: center;

    &>img{
        width: 48px;
        height: 48px;
        border-radius: 50%;
        border: 1px solid pink;
        padding: 1px;
    }

    button{
        background-color: white;
        border: none;
        width: fit-content;
        height: fit-content;
        color: rgb(0, 149, 246);
        font-size: 12px;
        font-weight: 600;
    }
`;

const Contents = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    margin-left: 5px;

    p{
        margin: 0;
        padding: 0px;
        font-size: 14px;
    }

    p:first-child{
        font-weight: 600;
        color: rgb(38, 38, 38);
        display: flex;
        align-items: center;

        img{
            width: 18px;
            height: 18px;
        }
    }

    p:last-child{
        font-weight: 400;
        color: rgb(142, 142, 142);
    }
`;

export default UserInfoCard;