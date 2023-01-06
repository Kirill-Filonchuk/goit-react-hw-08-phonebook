import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import s from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const email = form.elements[0].value;
    const password = form.elements[1].value;
    console.log({ email, password });
    dispatch(logIn({ email, password }));
    form.reset();
  };
  return (
    <form className={s.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={s.label}>
        Email
        <input type="email" name="email" />
      </label>
      <label className={s.label}>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};
