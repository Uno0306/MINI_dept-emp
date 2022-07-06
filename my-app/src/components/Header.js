import React from "react";
import { Link, Outlet, NavLink } from 'react-router-dom';

function Header(){
    // function activeStyle({ isActive }) {
    //     return {
    //       textDecoration: isActive ? 'underline' : undefined,
    //       fontSize: isActive ? '24px' : undefined,
    //     };
    // }

    return(   
        <ul>
            <li>
                <NavLink to='/'>도메인</NavLink>
            </li>
            <li>
                <NavLink to='/dept'>부서</NavLink>
            </li>
            <li>
                <NavLink to='/emp'>사원</NavLink>
            </li>
        </ul>
    );
}

export default Header;