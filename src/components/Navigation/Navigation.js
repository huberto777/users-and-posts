import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Input from 'components/Input/Input';

const NavBar = styled.nav`
  background-color: ${({ theme }) => theme.cancel};
  font-family: ${({ theme }) => theme.fontSize.m};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 35px;
  width: 100%;
  margin: 0 auto;
  a {
    color: white;
    padding-right: 20px;
    text-decoration: none;
    color: ${({ theme }) => theme.grey300};
    font-weight: ${({ theme }) => theme.bold};
  }
  a:hover {
    color: ${({ theme }) => theme.add};
  }

  @media screen and (max-width: 600px) {
    display: block;
  }
`;
const Ul = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
`;

const StyledInput = styled(Input)`
  width: 25%;
`;

const Navigation = () => (
  <NavBar>
    <Ul>
      <NavLink to="/" activeClassName="active">
        HOME
      </NavLink>
      <NavLink to="/users" activeClassName="active">
        USERS
      </NavLink>
      <NavLink to="/posts" activeClassName="active">
        POSTS
      </NavLink>
    </Ul>
    <StyledInput search placeholder="search" />
  </NavBar>
);

export default Navigation;
