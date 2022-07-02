import React, { FC } from 'react'

type ButtonPropType = {
    name: string,
    callBackFunction: () => void,
}

const Button:FC<ButtonPropType> = ({name, callBackFunction}) => {
  return (
    <button type='button' onClick={callBackFunction} >{name}</button>
  )
}

export default Button