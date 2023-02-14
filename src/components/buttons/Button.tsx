import React from 'react'

interface IProps {
    onClickHandler: () => void;
    text: string;
}
const Button = (props: IProps) => {
    const { onClickHandler, text} = props;
    return (
        <button onClick={onClickHandler} className='px-10 py-3 rounded-lg text-white capitalize bg-gradient-to-r from-[#de9844] to-[#d22464] hover:from-[#d22464] hover:to-[#d22464]  shadow-lg'>{text}</button>
    )
}

export default Button