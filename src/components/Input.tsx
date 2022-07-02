import React, { FC } from 'react'
import '../App.css'

type InputPropType = {
    inputMinutesRef: React.RefObject<HTMLInputElement>,
    inputValueRef: React.RefObject<HTMLInputElement>,
    secondToMinutes: (second: string | number) => string,
}

const Input: FC<InputPropType> = ({ inputMinutesRef, inputValueRef, secondToMinutes }) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (inputValueRef.current) {
            inputValueRef.current.textContent = secondToMinutes(e.target.value);
        }
    }
    
    return (
        <label className='container'>
            <span>Type minutes</span>
            <input type="number" min={0} placeholder='typing minutes' ref={inputMinutesRef} onChange={(e) => handleChange(e)} />
        </label>
    )
}

export default Input