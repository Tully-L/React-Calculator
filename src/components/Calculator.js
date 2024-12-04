import React, { useState } from 'react';
import Button from './Button';
import { CalculatorContainer, DisplayContainer, DisplayRow, ButtonGrid } from './styles';

const Calculator = () => {
  const [primaryDisplay, setPrimaryDisplay] = useState('0');
  const [secondaryDisplay, setSecondaryDisplay] = useState('');
  const [startNew, setStartNew] = useState(true);

  const formatNumber = (num) => {
    if (Number.isInteger(num)) return num.toString();
    const rounded = Number(parseFloat(num).toFixed(10));
    return rounded.toString();
  };

  const handleNumber = (num) => {
    if (startNew) {
      setSecondaryDisplay(num === '.' ? '0.' : num);
      setStartNew(false);
    } else {
      if (num === '.') {
        const lastNumber = secondaryDisplay.split(/[+\-×÷]/).pop();
        if (lastNumber.includes('.')) {
          return;
        }
        if (lastNumber === '') {
          setSecondaryDisplay(secondaryDisplay + '0.');
          return;
        }
      }
      setSecondaryDisplay(secondaryDisplay + num);
    }
  };

  const handleOperator = (operator, display) => {
    setStartNew(false);
    
    if (display === '-') {
      const lastChar = secondaryDisplay.slice(-1);
      if (secondaryDisplay === '' || '+-×÷'.includes(lastChar)) {
        setSecondaryDisplay(secondaryDisplay + '(-');
        return;
      }
    }
    
    const lastChar = secondaryDisplay.slice(-1);
    if ('+-×÷'.includes(lastChar)) {
      setSecondaryDisplay(secondaryDisplay.slice(0, -1) + display);
    } else {
      if (lastChar === ')') {
        setSecondaryDisplay(secondaryDisplay + display);
      } else {
        const needClosingBracket = secondaryDisplay.includes('(-') && 
                                 !secondaryDisplay.endsWith(')');
        setSecondaryDisplay(secondaryDisplay + (needClosingBracket ? ')' : '') + display);
      }
    }
  };

  const handleEqual = () => {
    try {
      let finalExpression = secondaryDisplay;
      if (finalExpression.includes('(-') && 
          !finalExpression.endsWith(')') && 
          !'+-×÷'.includes(finalExpression.slice(-1))) {
        finalExpression += ')';
      }

      setPrimaryDisplay(finalExpression);
      
      const expression = finalExpression
        .replace(/×/g, '*')
        .replace(/÷/g, '/');
      
      const result = eval(expression);
      const formattedResult = formatNumber(result);
      setSecondaryDisplay(formattedResult);
      setStartNew(true);
    } catch (error) {
      setPrimaryDisplay('Error');
      setSecondaryDisplay('');
    }
  };

  const handleClear = () => {
    setPrimaryDisplay('0');
    setSecondaryDisplay('');
    setStartNew(true);
  };

  return (
    <CalculatorContainer>
      <DisplayContainer>
        <DisplayRow>{primaryDisplay}</DisplayRow>
        <DisplayRow primary>{secondaryDisplay || '0'}</DisplayRow>
      </DisplayContainer>
      <ButtonGrid>
        <Button value="7" onClick={handleNumber} />
        <Button value="8" onClick={handleNumber} />
        <Button value="9" onClick={handleNumber} />
        <Button value="÷" onClick={() => handleOperator('/', '÷')} operator />
        
        <Button value="4" onClick={handleNumber} />
        <Button value="5" onClick={handleNumber} />
        <Button value="6" onClick={handleNumber} />
        <Button value="×" onClick={() => handleOperator('*', '×')} operator />
        
        <Button value="1" onClick={handleNumber} />
        <Button value="2" onClick={handleNumber} />
        <Button value="3" onClick={handleNumber} />
        <Button value="-" onClick={() => handleOperator('-', '-')} operator />
        
        <Button value="0" onClick={handleNumber} />
        <Button value="." onClick={handleNumber} />
        <Button value="=" onClick={handleEqual} operator />
        <Button value="+" onClick={() => handleOperator('+', '+')} operator />
        
        <Button value="C" onClick={handleClear} operator />
      </ButtonGrid>
    </CalculatorContainer>
  );
};

export default Calculator;