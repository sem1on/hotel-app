import React from 'react';
import './login.css';

const Login = () => {
    return (
        <div className="login-page">
            <div className='login'>
                <h3>Simple Hotel Check</h3>
                <form>
                    <div className='login-input'>
                        <label htmlFor="lodinInput">Логин</label>
                        <input id='lodinInput' type='text'/>    
                    </div>
                    <div className='login-input'>
                        <label htmlFor="password">Пароль</label>
                        <input id='password' type='text'/>    
                    </div>
                    <button className='login-btn'>Войти</button>
                </form>
            </div>
        </div>

    );
};

export default Login;