import React from 'react';
import styled from 'styled-components';

function ChatNavigation(props) {
    return (
        <Navigation>
            <Heading>
                <div>
                    _ankit_aggrawal&nbsp;&nbsp;
                    <span>
                        <svg aria-label="Down Chevron Icon" class="_ab6-" color="rgb(38, 38, 38)" fill="rgb(38, 38, 38)" height="20" role="img" viewBox="0 0 24 24" width="20"><path d="M21 17.502a.997.997 0 0 1-.707-.293L12 8.913l-8.293 8.296a1 1 0 1 1-1.414-1.414l9-9.004a1.03 1.03 0 0 1 1.414 0l9 9.004A1 1 0 0 1 21 17.502Z"></path></svg>
                    </span>
                </div>
                <span>
                    <svg aria-label="New message" class="_ab6-" color="rgb(38, 38, 38)" fill="rgb(38, 38, 38)" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M12.202 3.203H5.25a3 3 0 0 0-3 3V18.75a3 3 0 0 0 3 3h12.547a3 3 0 0 0 3-3v-6.952" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><path d="M10.002 17.226H6.774v-3.228L18.607 2.165a1.417 1.417 0 0 1 2.004 0l1.224 1.225a1.417 1.417 0 0 1 0 2.004Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="16.848" x2="20.076" y1="3.924" y2="7.153"></line></svg>
                </span>
            </Heading>
            <Navigator>
                <button>PRIMARY</button>
                <button>GENERAL</button>
                <button>Requests (1)</button>
            </Navigator>
        </Navigation>
    );
}

const Navigation = styled.div`
    background-color: white;
    flex-grow: 1;
    width: 100%;
    padding: 8px;
    max-width: 300px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
`;

const Heading = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    background-color: white;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    padding: 10px;

    div{
        flex-grow: 1;
        text-align: center;
        font-size: 14px;
        font-weight: 600;
        color: rgb(38, 38, 38);
        
        p{
            margin-right: 50px;
        }
    }

    div svg{
        display: inline-block; transform: rotate(180deg);
    }
`;

const Navigator = styled.div`
    background-color: white;
    display: flex;
    justify-content: space-between;
    padding: 0 5px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);

    button{
        color: rgb(38, 38, 38);
        font-size: 12px;
        font-weight: 500;
        padding: 10px 0;
        transition: all 0.3s;
        border: none;
        background-color: transparent;
        width: 100%;
        margin-bottom: -0.5px;
    border-bottom: 1px solid rgb(0, 0, 0);
    }

    button:hover{
        color: rgb(0, 149, 246);
    }
`;

export default ChatNavigation;