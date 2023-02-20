import React from 'react'
import styled from 'styled-components'

function Post(props){
    return(
        <PostCard>
            <Heading>
                <div>
                    <img src='https://images.unsplash.com/photo-1518644730709-0835105d9daa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' alt='' />
                </div>
                <Text>
                    <p>
                        itz_hunter
                        <span>• 17 h</span>
                    </p>
                    <p>
                        anassheikh_48 • Original audio
                    </p>
                </Text>
                <img src='/images/menu.svg'></img>
            </Heading>
            <Content>
                <img src='https://images.unsplash.com/photo-1676809537630-59f0df6a3322?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80' alt='' />
            </Content>
            <Buttons>
                <div>
                <img src='/images/heart.svg' alt='' />
                <img src='/images/messenger-outline-light.svg' alt='' />
                <img src='/images/send.svg' alt='' />
                </div>
                <img src='/images/bookmark.svg' alt='' />
            </Buttons>
            <Comments>
                <p>View all 27,221 comments</p>
                <div>
                    <input placeholder='Add a comment...' />
                    <div>
                        <button>Post</button>
                        <img src='/images/smile.svg' alt='' />
                    </div>
                </div>
            </Comments>
        </PostCard>
    );
}

const PostCard = styled.div`
    background-color: white;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    width: 100%;
    max-width: 400px;
    padding-bottom: 15px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const Heading = styled.div`
    width: 100%;
    display: flex;
    background-color: white;
    padding: 5px 0;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
    font-weight: 600;

    div>img{
        width: 32px;
        height: 32px;
        border-radius: 50%;
        border: 2px solid pink;
        object-fit: cover;
        padding: 1px;
    }

    img{
        /* menu button */
        width: 24px;
        height: 24px;
    }
`;

const Text = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;
    margin-left: 5px;

    p:first-child{
        padding: 0;
        margin: 0;

        span{
            font-weight: 400;
            margin-left: 5px;
            color: rgb(38, 38, 38);
        }
    }

    p:last-child{
        padding: 0;
        margin: 0;
        font-size: 8px;
        color: rgb(38, 38, 38);
        font-weight: 400;
    }
`;

const Content = styled.div`
    width: 100%;
    height: 400px;
    background-color: black;

    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

const Buttons = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;

    img{
        width: 24px;
        height: 24px;
    }
    
    div{
        display: flex;
        gap: 10px;
    }
`;

const Comments = styled.div`
    width: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;

    p{
        font-size: 10px;
        font-weight: 400;
        color: rgb(142, 142, 142);
    }

    div{
        background-color: aqua;
        width: 100%;
        display: flex;

        input{
            flex-grow: 1;
            padding: 5px 0;
            border: 0;
            background-color: white;
            font-size: 10px;
        }

        input:focus{
            outline: none;
        }

        div{
            width: fit-content;
            background-color: white;

            button{
                padding: 0;
                margin: 0;
                font-size: 10px;
                font-weight: 700;
                color: rgb(0, 149, 246);
                background-color: white;
                border: none;
                margin-right: 3px;
            }

            img{
                width: 24px;
                height: 24px;
            }
        }
    }
`;


export default Post