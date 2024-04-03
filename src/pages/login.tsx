import { FormEventHandler, useRef } from 'react';
import { loginAction } from '../api/api-actions';
import { useAppDispatch } from '../app/hooks';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../app/routes/routes';

export const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const handleFormSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (loginRef.current && passwordRef.current) {
      dispatch(loginAction({ login: loginRef.current.value, password: passwordRef.current.value }));
    }

    navigate(AppRoutes.Root);
  };

  return (
    <main className="page__main page__main--login">
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <form className="login__form form" action='/' onSubmit={handleFormSubmit}>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">E-mail</label>
              <input className="login__input form__input" type="email" name="email" placeholder="Email" required ref={loginRef} />
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">Password</label>
              <input className="login__input form__input" type="password" name="password" placeholder="Password" pattern="^(?=.*[a-zA-Z])(?=.*\d).+$" required ref={passwordRef} />
            </div>
            <button className="login__submit form__submit button" type="submit">Sign in</button>
          </form>
        </section>
        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="#">
              <span>Amsterdam</span>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
};
