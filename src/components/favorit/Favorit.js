import React from 'react';
import FavoritItem from '../favoritItem/FavoritItem';
import './favorit.css';
const Favorit = () => {
    return (
        <div className='favorit'>
            <h3>Избранное</h3>
            <div className="sort-btns">
                <button>Рейтинг</button>
                <button>Цена</button>
            </div>
            <div className="favorit-items">
                <FavoritItem/>
                <FavoritItem/>
                <FavoritItem/>
                <FavoritItem/>
                <FavoritItem/>
                <FavoritItem/>
                <FavoritItem/>
                <FavoritItem/>
            </div>
            
        </div>
    );
};

export default Favorit;