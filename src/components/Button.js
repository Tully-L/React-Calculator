import React from 'react';
import { StyledButton } from './styles';

const Button = ({ value, onClick, operator }) => {
  return (
    <StyledButton operator={operator} onClick={() => onClick(value)}>
      <span>{value}</span>
    </StyledButton>
  );
};

export default Button;