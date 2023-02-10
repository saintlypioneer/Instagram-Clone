import React from 'react'
import styled from 'styled-components'

function NavbarButton(props) {
  return (
    <Button active={props.active}>
      <div>
      <img src={props.icon} alt="" srcset="" />
      <span>{props.notificationCount>9?'':props.notificationCount}</span>
      </div>
      <span>{props.title}</span>
    </Button>
  )
}

const Button = styled.button`
  padding: 8px 15px;
  background-color: transparent;
  border: none;
  color: white;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 15px;
  border-radius: 50px;
  min-width: 170px;

  @media (max-width: 768px) {
    min-width: fit-content;
    width: 30px;
    height: 30px;
    padding: 35px 20px;
  }

  div{
    position: relative;

    span {
      font-size: 0.6rem;
      width: 10px;
      height: 10px;
      background-color: #ff3040;
      padding: ${(props)=>(props.notificationCount>9?"0px":"2px 2px")};
      border-radius: 10px;
      position: absolute;
      top: -5px;
      right: -10px;
    }
  }

  img{
    width: 25px;
    height: 25px;
  }

   & > span{
    font-size: 1.1rem;
    font-weight: ${(props)=>(props.active? "600": "400")};

    @media (max-width: 768px) {
      display: none;
    }
  }

  &:hover{
    background-color: rgb(18, 18, 18);
  }
`;

export default NavbarButton