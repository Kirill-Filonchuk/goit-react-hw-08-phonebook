import styled from 'styled-components';

export const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: palevioletred;
  }
`;

export const Form = styled.form`
  margin: 0 auto;
  width: 320px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;

  font-weight: 500;
  font-size: 16px;
`;

export const Button = styled.button`
  display: block;
  color: white;

  font-weight: 700;
  text-decoration: none;

  width: 90px;
  height: 40px;

  text-align: center;
  font-size: 16px;

  background: ${props => (props.active ? 'indianred' : 'dodgerblue')};
  border: 2px solid ${props => props.borderColor};
  border-radius: 10px;
  margin-right: 5px;
  &:hover,
  &:focus {
    color: rgb(135, 224, 105);
  }
  &:active {
    color: rgb(135, 224, 105);
  }
`;
