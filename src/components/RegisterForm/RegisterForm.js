import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

import s from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements[0].value;
    const email = form.elements[1].value;
    const password = form.elements[2].value;
    console.log(
      {
        name,
        email,
        password,
      },
      'Registe-Form'
    );
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
    <form className={s.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={s.label}>
        UserName
        <input type="text" name="name" />
      </label>
      UserMail
      <label className={s.label}>
        <input type="email" name="mail" />
      </label>
      <label className={s.label}>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};
