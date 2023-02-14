import React from 'react'

interface IProps {
    name: string;
    path: string;
}
const MenuItem = (props: IProps) => {
    const { name } = props;
    return (
        <div className='capitalize hover:text-[#e26300] hover:cursor-pointer'>{name}</div>
    )
}

export default MenuItem