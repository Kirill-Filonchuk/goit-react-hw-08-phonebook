import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

import { Form, Input, Label, Button } from './RegisterForm-styling.js';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements[0].value;
    const email = form.elements[1].value;
    const password = form.elements[2].value;
    // console.log(
    //   {
    //     name,
    //     email,
    //     password,
    //   },
    //   'Registe-Form'
    // );
    dispatch(
      register({
        name,
        email,
        password,
      })
    );
    form.reset();
  };
  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        UserName
        <Input type="text" name="name" placeholder="Name" />
      </Label>

      <Label>
        UserMail
        <Input type="email" name="mail" placeholder="Email" />
      </Label>
      <Label>
        Password
        <Input type="password" name="password" placeholder="Password" />
      </Label>
      <Button type="submit">Register</Button>
    </Form>
  );
};
