import React from 'react'
import styled from 'styled-components'

function NavbarLogo() {
  return (
    <Logo>
        <img src="/images/logo.svg" alt="" />
        <img src="/images/text-logo.svg" alt="" />
        <div className='xyz'></div>
    </Logo>
  )
}

const Logo = styled.div`
    width: fit-content;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    img{
        height: 32px;
        transition: all 0.3s;

        &:last-child{
            height: 32px;
        }

        &:first-child{
            height: 0;
        }

        @media (max-width: 768px){
            &:last-child{
                height: 0;
            }
            &:first-child{
                height: 32px;
            }
        }
    }
`;

export default NavbarLogo