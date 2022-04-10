import React from 'react';
import './favoritItem.css';

const FavoritItem = () => {
    return (
        <div className='favItem'>
            <div className="main">
                <h5>Moscow Marriott Grand Hotel</h5>
                <div className="icon">★</div>
            </div>
            <div className="date">
                28 June, 2020 - 1 день
            </div>
            <div className="stats">
                <div className="rating-result">
                    <span className="active"></span>	
                    <span className="active"></span>    
                    <span className="active"></span>  
                    <span></span>    
                    <span></span>
                </div>
                
                <div className="price">
                    <p className='name'>Price:</p>
                    <p className='money'>23 924 ₽</p>
                </div>
            </div>
        </div>
    );
};

export default FavoritItem;