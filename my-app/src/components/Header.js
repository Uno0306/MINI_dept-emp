import React from "react";
import { Link, Outlet, NavLink } from "react-router-dom";
import styled from "styled-components";
const PaginationUl = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 5px;
`;

const PaginationLi = styled.li`
  padding: 5px;
  font-size: 24px;
  border-radius: 5px;
  color: black;

  &:hover {
    cursor: pointer;
    color: green;
    background: orange;
  }
`;

function Header() {
  function activeStyle({ isActive }) {
    return {
      textDecoration: "none",
      fontSize: isActive ? "32px" : undefined,
      color: isActive ? "green" : "black",
    };
  }

  return (
    <PaginationUl>
      <PaginationLi>
        <NavLink to="/" style={activeStyle}>
          메인
        </NavLink>
      </PaginationLi>
      <PaginationLi>
        <NavLink to="/dept" style={activeStyle}>
          부서
        </NavLink>
      </PaginationLi>
      <PaginationLi>
        <NavLink to="/emp" style={activeStyle}>
          사원
        </NavLink>
      </PaginationLi>
    </PaginationUl>
  );
}

export default Header;
