import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Form, Input, Label, Button } from './LoginForm-styling.js';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const email = form.elements[0].value;
    const password = form.elements[1].value;
    // console.log({ email, password });
    dispatch(logIn({ email, password }));
    form.reset();
  };
  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
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
