import { Button } from '../../shared/atoms/Button';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from '../core/User';

const Login = () => {
  const [formLogin, setFormLogin] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const saveOnStorage = (user: User) => {
    localStorage.setItem('user', JSON.stringify(user));
  };

  const onFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    console.log(e.target.name);
    setFormLogin({ ...formLogin, [e.target.name]: value });
    console.log(formLogin);
  };

  const submitForm = () => {
    fetch('http://127.0.0.1:8000/api/users/login/', {
      method: 'POST',
      body: JSON.stringify(formLogin),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const userSigned = data as User;
        saveOnStorage(userSigned);
        if (userSigned.user.profile.rol == 3) {
          navigate('/admin');
        } else if (userSigned.user.profile.rol == 2) {
          navigate('/search');
        } else {
          navigate('/home');
        }
        console.log('Token inicio sesion', data as User);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="bg-primary min-h-screen flex flex-row">
      <div className="flex flex-col w-2/3 items-center justify-center px-10 sm:px-14 md:px-24 lg:px-72 xl:px-96 gap-4">
        <h1 className="text-3xl text-white mb-4">Sign In</h1>
        <span className="text-xl text-white ">Sign in to your accout</span>
        <input
          className="px-8 py-2 w-full bg-primary-light text-lg border text-primary-dark hover:border hover:border-primary-dark rounded-2xl outline-none "
          type="email"
          name="email"
          onChange={(e) => onFormChange(e)}
        />
        <input
          className="px-8 py-2 w-full bg-primary-light text-lg border text-primary-dark hover:border hover:border-primary-dark rounded-2xl outline-none "
          type="password"
          name="password"
          onChange={(e) => onFormChange(e)}
        />
        <Button onClick={submitForm}>Iniciar sesion</Button>
        <span className="text-sm text-white ">
          I forgot my password{' '}
          <a className="font-bold text-primary-dark">Click here to reset</a>{' '}
        </span>
      </div>
      <div className="bg-secondary w-1/3 flex flex-col gap-4 items-center p-20">
        <img src="src/assets/images/Intermedio.png" className="w-4/5" />
        <img src="src/assets/images/login.png" className="rounded-xl" />
        <Button variant="secondary">Hola mundo</Button>
      </div>
    </div>
  );
};

export default Login;
