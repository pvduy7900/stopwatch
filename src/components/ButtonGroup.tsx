import React, { FC } from 'react'
type ButtonGroupPropsType = {
    buttons: {
        name: string,
        handleEvent: () => void,
    }[],
}
const ButtonGroupDisplay:FC<ButtonGroupPropsType> = ({buttons}) => {
  return (
    <div>
        {
            buttons.map((item) => (
                <button onClick={item.handleEvent}>{item.name}</button>
            ))
        }
    </div>
  )
}

export default ButtonGroupDisplay