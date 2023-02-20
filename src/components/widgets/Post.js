import React from 'react'
import styled from 'styled-components'

function Post(props){
    return(
        <PostComponent>
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
            content
        </PostComponent>
    );
}

const PostComponent = styled.div`
    background-color: red;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    width: 100%;
    max-width: 400px;
`;

const Heading = styled.div`
    width: 100%;
    display: flex;
    background-color: aqua;
    padding: 5px 0;
    align-items: center;
    justify-content: space-between;

    div>img{
        width: 32px;
        height: 32px;
        border-radius: 50%;
        border: 2px solid pink;
        object-fit: cover;
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

    p{
        padding: 0;
        margin: 0;
    }
`;

export default Post