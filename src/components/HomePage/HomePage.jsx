import { textToRender } from '../../data/credentional';
import s from './HomePage.module.css';

const textUse = textToRender();

const write = textUse.map((item, index) => <li key={index}>{item}</li>);

export const HomePage = () => {
  return (
    <div className={s.container}>
      <h1 className={s.title}>Contacts aplication welcome page </h1>
      <h2>Short instruction</h2>
      <ul className={s.list}>{write}</ul>
      <h4 className={s.refer}>
        {'* '}The developer is not responsible for the safety of your data,
        because the database was developed by third-party specialists, and they
        did not provide guarantees.
      </h4>
    </div>
  );
};
