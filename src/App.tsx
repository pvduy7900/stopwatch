import React, { useRef } from 'react'
import { useEffect } from 'react';
import './App.css'
import Button from './components/Button';
import DisplayTime from './components/DisplayTime';
import Input from './components/Input';

const App = () => {
  const inputMinutes = useRef<any>(null);
  const inputValue = useRef<any>(null)

  let startFlag = false;
  let interval: any = null;
  const defaultSettingTimeDisplay = '0: 00: 00';
  const HOUR_IN_SECONDS = 3600;
  
  const secondToMinutes = (second: string | number) => {
    const secondInput = Math.abs(Number(second));
    const hourResult = Math.floor(Number(secondInput) / HOUR_IN_SECONDS);
    const minutestest = Math.floor((Number(secondInput) - hourResult * HOUR_IN_SECONDS) / 60);
    const secondResult = Number(secondInput) - (hourResult * HOUR_IN_SECONDS) - (minutestest * 60);
    return `${hourResult}: ${String(minutestest).padStart(2, '0')}: ${String(secondResult).padStart(2, '0')}`
  }

  const handleIncreaseSecondTime = () => {
    const secondArray = String(inputValue.current.textContent).split(':');
    const sumSecondTime = Number(secondArray[0]) * HOUR_IN_SECONDS + Number(secondArray[1]) * 60 + Number(secondArray[2]);
    inputValue.current.textContent = secondToMinutes(sumSecondTime + 1);
  }

  const handleStart = () => {
    if (inputValue.current && startFlag === false) {
      startFlag = true;
      interval = setInterval(handleIncreaseSecondTime, 1000);
    }
  }

  const handleStop = () => {
    startFlag = false;
    clearInterval(interval);
  }

  const handleReset = () => {
    handleStop();
    inputMinutes.current.value = '';
    inputValue.current.textContent = defaultSettingTimeDisplay;
    inputMinutes.current.focus();
  }

  const buttonDisplay = [
    {name: 'start' , handleEvent: handleStart},
    {name: 'stop' , handleEvent: handleStop},
    {name: 'reset' , handleEvent: handleReset},
  ]

  useEffect(() => {
    if (inputMinutes) {
      inputMinutes.current.focus()
      inputValue.current.textContent = defaultSettingTimeDisplay;
    }
  }, [])

  return (
    <div className='container'>
      <div>Clock</div>
      <Input inputMinutesRef={inputMinutes} inputValueRef={inputValue} secondToMinutes={secondToMinutes} />
      <DisplayTime inputValueRef={inputValue} />
      <div>
        {
          buttonDisplay.map((item) => (<Button name={item.name} callBackFunction={item.handleEvent} />))
        }
      </div>
    </div>
  )
}

export default App