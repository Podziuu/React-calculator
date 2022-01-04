import React, {Fragment} from "react";

import Button from "./Button";

const CalculatorDigits = (props) => {
  // const digitClickHandler = () => {
  //   // props.dispatch({type: 'addDigit', number: '1'})
  //   console.log('siema')
  // }

  return (
    <Fragment>
      <Button onClick={props.allClear} size="lg" digit="AC" />
      <Button onClick={props.delete} digit="DEL" />
      <Button onClick={props.addOperation} digit="÷" />
      <Button onClick={props.addDigit} digit="1" />
      <Button onClick={props.addDigit} digit="2" />
      <Button onClick={props.addDigit} digit="3" />
      <Button onClick={props.addOperation} digit="*" />
      <Button onClick={props.addDigit} digit="4" />
      <Button onClick={props.addDigit} digit="5" />
      <Button onClick={props.addDigit} digit="6" />
      <Button onClick={props.addOperation} digit="+" />
      <Button onClick={props.addDigit} digit="7" />
      <Button onClick={props.addDigit} digit="8" />
      <Button onClick={props.addDigit} digit="9" />
      <Button onClick={props.addOperation} digit="-" />
      <Button onClick={props.addDigit} digit="." />
      <Button onClick={props.addDigit} digit="0" />
      <Button onClick={props.equals} size="lg" digit="=" />
    </Fragment>
  );
};

export default CalculatorDigits;
