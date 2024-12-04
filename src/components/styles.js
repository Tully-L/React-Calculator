import styled from 'styled-components';

export const CalculatorContainer = styled.div`
  width: 340px;
  margin: 100px auto;
  background: #1a1a1a;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 
    0 20px 40px rgba(0,0,0,0.6),
    inset 0 2px 0 rgba(255,255,255,0.1),
    inset 0 -1px 0 rgba(0,0,0,0.8);
  border: 2px solid #333;
`;

export const DisplayContainer = styled.div`
  background: #202020;
  width: 90%;
  margin: 0 auto 25px auto;
  border-radius: 8px;
  border: 1px solid #444;
  box-shadow: 
    inset 0 2px 8px rgba(0,0,0,0.5),
    0 1px 0 rgba(255,255,255,0.1);
  overflow: hidden;
`;

export const DisplayRow = styled.div`
  height: 35px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: ${props => props.primary ? '30px' : '20px'};
  font-weight: bold;
  font-family: 'Digital-7', Consolas, monospace;
  color: ${props => props.primary ? '#00ff00' : '#00bb00'};
  text-shadow: 0 0 5px rgba(0,255,0,0.5);
`;

export const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  padding: 5px;
  background: #1a1a1a;
`;

export const StyledButton = styled.button`
  position: relative;
  width: 100%;
  height: 65px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  outline: none;
  font-size: 24px;
  font-weight: bold;
  color: ${props => props.operator ? '#ff9f43' : '#ffffff'};
  background: none;
  margin-top: 5px;
  
  // 按键主体
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: ${props => props.operator ? '#444' : '#3a3a3a'};
    border-radius: 10px;
    border: 2px solid rgba(255,255,255,0.1);
    transform: translateY(-8px);
    transition: all 0.1s ease-in-out;
    box-shadow: 
      0 8px 0 #222,
      0 8px 8px rgba(0,0,0,0.4),
      inset 0 2px 2px rgba(255,255,255,0.2),
      inset 0 -2px 2px rgba(0,0,0,0.2);
  }

  // 按键底部阴影
  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -10px;
    height: 10px;
    background: #1a1a1a;
    border-radius: 0 0 10px 10px;
    box-shadow: 
      inset 0 -4px 8px rgba(0,0,0,0.5),
      0 2px 4px rgba(0,0,0,0.3);
  }

  span {
    position: relative;
    z-index: 1;
    display: block;
    width: 100%;
    height: 100%;
    line-height: 65px;
    text-align: center;
    transform: translateY(-8px);
    transition: all 0.1s ease-in-out;
    text-shadow: 0 -1px 0 rgba(0,0,0,0.8);
  }

  // 按下效果
  &:active::before {
    transform: translateY(-2px);
    box-shadow: 
      0 2px 0 #222,
      0 2px 4px rgba(0,0,0,0.4),
      inset 0 2px 2px rgba(255,255,255,0.2),
      inset 0 -2px 2px rgba(0,0,0,0.2);
  }

  &:active span {
    transform: translateY(-2px);
  }

  // 悬浮效果
  &:hover::before {
    background: ${props => props.operator ? '#4a4a4a' : '#404040'};
    box-shadow: 
      0 8px 0 #222,
      0 8px 10px rgba(0,0,0,0.5),
      inset 0 2px 3px rgba(255,255,255,0.2),
      inset 0 -2px 2px rgba(0,0,0,0.2);
  }
`;