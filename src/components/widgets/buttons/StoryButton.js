import React from 'react'
import styled from 'styled-components'

export default function StoryBtn(props) {
  return (
    <Story>
      <Button className={props.class}>
        <img src={props.icon} alt="" />
        <svg viewbox="0 0 100 100" style={{ width: '100%', height: '100%' }}>
          <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#ffc500" />
            <stop offset="40%" stop-color="#ff3c35" />
            <stop offset="60%" stop-color="#d201c5" />
            <stop offset="100%" stop-color="#ff3c35" />
          </linearGradient    >
          <circle cx="33" cy="33" r="27" />
        </svg>
      </Button>
      <p>{props.title}</p>
    </Story>
  )
}
const Story = styled.div`
  width:66px; 
  cursor: pointer; 
p{
  font-size: 0.75rem;
  text-align: center;
  margin: 0; 
}
`
const Button = styled.div`
  position: relative;
  width:66px;
  height:66px;
  overflow:hidden;
img {
  width:75%;
  border-radius:50%;
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
}
svg {
  fill:none;
  stroke:url(#linear);
  stroke-width:2px;
  stroke-dasharray:1;
  stroke-dashoffset:0;
  stroke-linecap:round;  
}
&.active svg{
    animation:loading 3s ease-out infinite alternate;
}
@keyframes loading {
  to { 
    stroke-dasharray:5;
    transform:rotate(180deg);
  }
} 
`