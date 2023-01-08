import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
// import s from './Navigation.module.css';
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
  background: ${props => (props.active ? 'lightblue' : 'orange')};
  border: 2px solid ${props => props.borderColor};
  border-radius: 4px;
  margin-right: 10px;
  &:hover,
  &:focus {
    color: rgb(248, 192, 236);
  }
  &:active {
    color: rgb(248, 192, 236);
  }
`;

const NavbarContainer = styled.nav`
  width: 100%;
  height: 60px;
  background-color: rgb(34, 134, 134);
  display: flex;
  align-items: center;
  border-radius: 4px;
  padding: 5px;
`;

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavbarContainer>
      <StyledActiveLink to="/">Home</StyledActiveLink>

      {isLoggedIn && (
        <StyledActiveLink to="/contacts">Contacts</StyledActiveLink>
      )}
    </NavbarContainer>
  );
};
