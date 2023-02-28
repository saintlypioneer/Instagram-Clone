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
                {/* <NoMessage>
                    <img src='/images/send.svg' alt='' />
                    <h3>Your Messages</h3>
                    <p>Send private photos and messages to a friend or group.</p>
                    <button>Send message</button>
                </NoMessage> */}
                <MessageHeader>
                    <div>
                        <img src='https://pbs.twimg.com/profile_images/1295112038096629760/3eCOaKDb_400x400.jpg' alt='' />
                        <p>Simon Senik</p>
                    </div>
                    <img src='/images/info.svg' alt='' />

                </MessageHeader>
                <DayMessages>
                    <DateTime>February 12, 2023 4:03 pm</DateTime>
                    <Message type="sent"> Duis amet nulla aliqua aliqua anim commodo adipisicing aliqua ut ea consectetur. </Message>
                    <Message type="received">Mollit officia cupidatat ex ipsum cillum.</Message>
                    <Message type="sent">Fugiat duis dolor voluptate fugiat ad cupidatat id eu adipisicing labore incididunt pariatur.</Message>
                    <Message type="received">Duis amet id consectetur eiusmod irure nulla quis aliqua.</Message>
                    <Message type="sent">Deserunt ipsum voluptate fugiat aliqua eu reprehenderit.</Message>
                    <Message type="received">Ut ullamco ex magna cupidatat labore.</Message>
                    <Message type="sent"> Duis amet nulla aliqua aliqua anim commodo adipisicing aliqua ut ea consectetur. </Message>
                    <Message type="received">Mollit officia cupidatat ex ipsum cillum.</Message>
                    <Message type="sent">Fugiat duis dolor voluptate fugiat ad cupidatat id eu adipisicing labore incididunt pariatur.</Message>
                    <Message type="received">Duis amet id consectetur eiusmod irure nulla quis aliqua.</Message>
                    <Message type="sent">Deserunt ipsum voluptate fugiat aliqua eu reprehenderit.</Message>
                    <Message type="received">Ut ullamco ex magna cupidatat labore.</Message>
                    <Message type="sent"> Duis amet nulla aliqua aliqua anim commodo adipisicing aliqua ut ea consectetur. </Message>
                    <Message type="received">Mollit officia cupidatat ex ipsum cillum.</Message>
                    <Message type="sent">Fugiat duis dolor voluptate fugiat ad cupidatat id eu adipisicing labore incididunt pariatur.</Message>
                    <Message type="received">Duis amet id consectetur eiusmod irure nulla quis aliqua.</Message>
                    <Message type="sent">Deserunt ipsum voluptate fugiat aliqua eu reprehenderit.</Message>
                    <Message type="received">Ut ullamco ex magna cupidatat labore.</Message>
                </DayMessages>
                <DayMessages>
                    <DateTime>February 12, 2023 4:03 pm</DateTime>
                    <Message type="sent"> Duis amet nulla aliqua aliqua anim commodo adipisicing aliqua ut ea consectetur. </Message>
                    <Message type="received">Mollit officia cupidatat ex ipsum cillum.</Message>
                    <Message type="sent">Fugiat duis dolor voluptate fugiat ad cupidatat id eu adipisicing labore incididunt pariatur.</Message>
                    <Message type="received">Duis amet id consectetur eiusmod irure nulla quis aliqua.</Message>
                    <Message type="sent">Deserunt ipsum voluptate fugiat aliqua eu reprehenderit.</Message>
                    <Message type="received">Ut ullamco ex magna cupidatat labore.</Message>
                    <Message type="sent"> Duis amet nulla aliqua aliqua anim commodo adipisicing aliqua ut ea consectetur. </Message>
                    <Message type="received">Mollit officia cupidatat ex ipsum cillum.</Message>
                    <Message type="sent">Fugiat duis dolor voluptate fugiat ad cupidatat id eu adipisicing labore incididunt pariatur.</Message>
                    <Message type="received">Duis amet id consectetur eiusmod irure nulla quis aliqua.</Message>
                    <Message type="sent">Deserunt ipsum voluptate fugiat aliqua eu reprehenderit.</Message>
                    <Message type="received">Ut ullamco ex magna cupidatat labore.</Message>
                    <Message type="sent"> Duis amet nulla aliqua aliqua anim commodo adipisicing aliqua ut ea consectetur. </Message>
                    <Message type="received">Mollit officia cupidatat ex ipsum cillum.</Message>
                    <Message type="sent">Fugiat duis dolor voluptate fugiat ad cupidatat id eu adipisicing labore incididunt pariatur.</Message>
                    <Message type="received">Duis amet id consectetur eiusmod irure nulla quis aliqua.</Message>
                    <Message type="sent">Deserunt ipsum voluptate fugiat aliqua eu reprehenderit.</Message>
                    <Message type="received">Ut ullamco ex magna cupidatat labore.</Message>
                </DayMessages>
                <MessageFooter>
                    <img src='/images/smile.svg' alt='' />
                    <input type="text" placeholder='Message...' />
                    <img src='/images/image.svg' alt='' />
                    <img src='/images/heart.svg' alt='' />
                </MessageFooter>
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
    height: 95vh;
    overflow-y: scroll;
    position: relative;
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

const DayMessages = styled.div`
    padding: 10px;
`;

const DateTime = styled.div`
    margin: auto;
    width: fit-content;
    font-size: 12px;
    color: rgb(168, 168, 168);
    font-weight: 400;
`;

const Message = styled.div`
    width: 80%;
    max-width: 500px;
    margin-left: ${(props)=>(props.type=='sent'?"auto":"initial")};
    padding: 16px;
    background-color: rgb(250, 250, 250);
    font-size: 14px;
    font-weight: 400;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 22px;
    border: 1px solid rgba(0,0,0,0.1);
`;

const MessageHeader = styled.div`
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin: 3px;
    border-bottom: 1px solid rgba(0,0,0,0.3);
    position: sticky;
    top: 0;

    div{
        display: flex;
        align-items: center;
        gap: 10px;

        p{
            font-size: 16px;
            font-weight: 600;
        }
    }

    img{
        width: 32px;
        height: 32px;
        border-radius: 50%;
    }
`;

const MessageFooter = styled.div`
    background-color: white;
    display: flex;
    background-color: white;
    align-items: center;
    margin: 12px 30px;
    gap: 5px;
    padding: 10px 20px;
    border-radius: 50px;
    border: 1px solid rgba(0,0,0,0.3);
    position: sticky;
    bottom: 0;

    input{
        flex-grow: 1;
        padding: 7px;
        background-color: transparent;
        border: none;
    }

    img{
        width: 28px;
        height: 28px;
    }
`;

export default Chat;