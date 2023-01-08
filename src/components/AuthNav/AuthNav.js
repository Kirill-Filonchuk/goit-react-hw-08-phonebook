import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

const StyledActiveLink = styled(NavLink)`
  display: inline-block;
  color: white;
  font-size: 18px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 700;
  text-decoration: none;

  width: 80px;
  height: 20px;
  text-align: center;
  padding: 10px;
  background: ${props => (props.active ? 'indianred' : 'dodgerblue')};
  border: 2px solid ${props => props.borderColor};
  border-radius: 4px;
  margin-left: 10px;
  &:hover,
  &:focus {
    color: rgb(135, 224, 105);
  }
  &:active {
    color: rgb(135, 224, 105);
  }
`;

const NavbarContainer = styled.nav`
  display: flex;
  width: 100%;
  height: 60px;
  background-color: rgb(34, 134, 134);
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  border-radius: 4px;
  padding: 5px;
`;

export const AuthNav = () => {
  return (
    <NavbarContainer>
      <StyledActiveLink to="/register">Register</StyledActiveLink>
      <StyledActiveLink to="/login">Log In</StyledActiveLink>
    </NavbarContainer>
  );
};
