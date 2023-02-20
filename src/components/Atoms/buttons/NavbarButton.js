import React from 'react'
import styled from 'styled-components'

function NavbarButton(props) {
  return (
    <Button active={props.active}>
      <div>
      <img src={props.icon} alt="" srcset="" />
      {/* <span>{props.notificationCount}</span> */}
      </div>
      <span>{props.title}</span>
    </Button>
  )
}

const Button = styled.button`
  background-color: #fff;
  display: flex;
  padding: 12px;
  width: 100%;
  max-width: 280px;
  justify-content: start;
  align-items: center;
  gap: 10px;
  font-size: 18px;
  font-weight: 800;
  border-radius: 24px;
  border: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  transition: all 0.3s;

  &>div{
    width: 24px;
    height: 24px;
      position: relative;

    &>img{
      width: 24px;
      height: 24px;
      border-radius: ${({title})=>((title=="Profile")?'50%':'0%')};
    }
    /* 
      Notification Count
      &>span{
      font-size: 11px;
      font-weight: 400;
      position: absolute;
      background-color: #F3425F;
      color: white;
      top: -8px;
      right: -6px;
      padding: 2px 5px;
      border-radius: 50px;
      display: ${(props)=>(props.notificationCount=='0'?'none':'initial')};
      } */
  }

  &:hover{
    background-color: rgba(0, 0, 0, 0.03);
  }

  @media (max-width: 768px){
    width: fit-content;
    &>span{
      display: none;
    }
  }

  @media (max-width: 320px){
    background-color: aqua;
  }
`;

export default NavbarButton