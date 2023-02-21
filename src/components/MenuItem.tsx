import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

interface IProps {
    name: string;
    path: string;
}
const MenuItem = (props: IProps) => {
    const { name, path } = props;
    return (
        <NavLink end to={path} className={({ isActive }) => `capitalize hover:text-[#e26300] hover:cursor-pointer ${isActive ? "text-[#e26300]" : ""} `}>{name}</NavLink>
    )
}

export default MenuItem