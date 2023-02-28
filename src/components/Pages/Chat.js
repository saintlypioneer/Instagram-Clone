import React from 'react'
import styled from 'styled-components'

import ChatNavigation from '../Atoms/ChatNavigation';
import UserMsgCard from "../Atoms/UserMsgCard"
function Chat(props){
    return (
        <Container>
            <Chats>
                <ChatNavigation />
                <Profiles>
                    <UserMsgCard />
                    <UserMsgCard />
                    <UserMsgCard />
                    <UserMsgCard />
                    <UserMsgCard />
                    <UserMsgCard />
                    <UserMsgCard />
                    <UserMsgCard />
                    <UserMsgCard />
                    <UserMsgCard />
                    <UserMsgCard />
                    <UserMsgCard />
                    <UserMsgCard />
                    <UserMsgCard />
                    <UserMsgCard />
                    <UserMsgCard />
                    <UserMsgCard />
                    <UserMsgCard />
                    <UserMsgCard />
                    <UserMsgCard />
                    <UserMsgCard />
                    <UserMsgCard />
                    <UserMsgCard />
                    <UserMsgCard />
                    <UserMsgCard />
                    <UserMsgCard />
                    <UserMsgCard />
                    <UserMsgCard />
                    <UserMsgCard />
                    <UserMsgCard />
                    <UserMsgCard />
                </Profiles>
            </Chats>
            <Messages>
                <NoMessage>
                    <img src='/images/send.svg' alt='' />
                    <h3>Your Messages</h3>
                    <p>Send private photos and messages to a friend or group.</p>
                    <button>Send message</button>
                </NoMessage>
            </Messages>
        </Container>    
    );
}

const Container = styled.div`
    width: 100%;
    padding: 10px;
    height: 100vh;
    background-color: white;
    display: flex;
    height: fit-content;
    border: 1px solid rgba(0,0,0,0.3);
    margin: 0 10px;
    margin-top: 10px;
    border-radius: 5px;
`;

const Chats = styled.div`
    background-color: white;
    min-width: 300px;
    height: 95vh;
    border-right: 1px solid grey;
`;

const Profiles = styled.div`
    padding: 15px;
    height: 80vh;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    overflow-y: scroll;
`;

const Messages = styled.div`
    background-color: white;
    flex-grow: 1;

`;

const NoMessage = styled.div`
    display: flex;
    flex-direction: column;
    color: rgb(38, 38, 38);
    justify-content: center;
    height: 100%;
    align-items: center;
    gap: 5px;

    img{
        width: 42px;
        height: 42px;
    }

    h3{
        font-size: 20px;
        font-weight: 400;
    }

    p{
        font-size: 14px;
        font-weight: 400;
    }

    button{
        background-color: rgb(24, 119, 242);
        color: white;
        font-weight: 600;
        padding: 6px 15px;
        border-radius: 10px;
        width: fit-content;
        border: none;
    }
`;

export default Chat;