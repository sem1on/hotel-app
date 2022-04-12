import React from 'react';
import './login.css';

const Login = () => {
    return (
        <div className="login-page">
            <div className='login'>
                <h3>Simple Hotel Check</h3>
                <form>
                    <div className='form_field'>
                        <label htmlFor="lodinInput">Логин</label>
                        <input id='lodinInput' type="email"/>    
                        <span className="form_error">Это поле должно содержать E-Mail в формате example@site.com</span>
                    </div>
                    <div className='form_field'>
                        <label htmlFor="password">Пароль</label>
                        <input id='password' type='text'pattern='^[a-zA-Z0-9]+$' minLength='8'/>
                        <span className="form_error">Пароль - без кириллицы, минимум 8 символов</span>
                    </div>
                    <button className='login-btn'>Войти</button>
                </form>
            </div>
        </div>

    );
};

export default Login;
