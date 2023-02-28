import React from 'react';
import styled from 'styled-components';

function UserMsgCard(props){
    return (
        <Card>
            <img src='https://pbs.twimg.com/profile_images/1295112038096629760/3eCOaKDb_400x400.jpg' alt='' />
            <Content>
                <p>Arag Agrawal</p>
                <p>Sent a post
                    <span>• 1h</span>
                </p>
            </Content>
            <Indicator>●</Indicator>
        </Card>
    );
}

const Card = styled.div`
    display: flex;
    width: 100%;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;

    img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
`;

const Content = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    margin-left: 5px;
    gap: 3px;

    P{
        margin: 0;
        padding: 0;
        font-size: 12px;
        font-weight: 600;
        color: rgb(38, 38, 38);
    }

    p:last-child{
        font-size: 10px;

        span{
            color: rgb(142, 142, 142);
            margin-left: 5px;
        }
    }
`;

const Indicator = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 8px;
    color: rgb(0, 149, 246);
    margin-left: 10px;
`;

export default UserMsgCard;