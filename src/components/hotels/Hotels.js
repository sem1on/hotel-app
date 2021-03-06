import React from 'react';
import HotelItem from '../hotelsItem/HotelItem';
import Slider from '../slider/Slider';

import { useDispatch, useSelector } from 'react-redux';




import './hotels.css';

const Hotels = () => {

   

    return (
        <div className='hotels'>
            <div className="main-title">
                <div className="main-descr">
                    <h4>Отели</h4>
                    <span>
                        <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1.33334L9.66667 10L1 18.6667" stroke="#A7A7A7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </span>
                    <h4>Москва</h4>
                </div>
                <div className="data">07 июля 2020</div>
            </div>
            <Slider/>  
            <p className='fav-hotels'>Добавлено в Избранное: 3 отеля</p>
            <div className="hotels-list">
                <HotelItem/>
                <HotelItem/>
                <HotelItem/>
                <HotelItem/>
                <HotelItem/>
                <HotelItem/>
                <HotelItem/>
                <HotelItem/>
                <HotelItem/>
                <HotelItem/>
                <HotelItem/>
                
            </div>
        </div>
    );
};

export default Hotels;