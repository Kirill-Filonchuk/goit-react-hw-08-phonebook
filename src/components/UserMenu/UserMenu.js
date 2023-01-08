import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import s from './UserMenu.module.css';
import styled from 'styled-components';

const Button = styled.button`
  display: block;
  color: white;

  font-family: Arial, Helvetica, sans-serif;
  font-weight: 700;
  text-decoration: none;
  margin: 10px;
  width: 90px;
  height: 40px;

  text-align: center;
  font-size: 16px;

  background: ${props => (props.active ? 'indianred' : 'dodgerblue')};
  border: 2px solid ${props => props.borderColor};
  border-radius: 4px;
  margin-right: 5px;
  &:hover,
  &:focus {
    color: rgb(135, 224, 105);
  }
  &:active {
    color: rgb(135, 224, 105);
  }
`;
const Span = styled.span`
  display: inline-block;
  border: 2px solid white;
  border-radius: 4px;
  min-width: 100px;
  height: 25px;
  margin-left: 10px;
  padding-top: 9px;
  color: white;
  text-align: center;
  font-size: 15px;
  font-weight: 500;
`;
const Greet = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const handleLogOut = () => dispatch(logOut());
  return (
    <div className={s.wrapper}>
      <Greet>
        <p className={s.username}>Welcome,</p>
        <Span>{user.name}</Span>
      </Greet>

      <Button type="button" onClick={handleLogOut}>
        Logout
      </Button>
    </div>
  );
};
