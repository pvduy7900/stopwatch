import React, { FC } from 'react'

type DisplayTimePropType = {
    inputValueRef: React.RefObject<HTMLInputElement>,
}

const DisplayTime:FC<DisplayTimePropType> = ({inputValueRef}) => {
  return (
    <div ref={inputValueRef} data-testid='clock-id' ></div>
  )
}

export default DisplayTime