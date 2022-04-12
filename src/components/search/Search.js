import React from 'react';
import { useMemo } from 'react';

import { getCurrentDate } from '../../utils/dateFormat';

import './search.css';


const Search = () => {

    const currentDate = useMemo(() => getCurrentDate("YYYY-MM-DD"), []);

    return (
        <div className='search'>
            <form>
                <div className='search-input'>
                    <label htmlFor="location">Локация</label>
                    <input id='location' type='text'/>    
                </div>
                <div className='search-input'>
                    <label htmlFor="date">Дата заселения</label>
                    <input id='date' type='date' defaultValue={currentDate}/>    
                </div>
                <div className='search-input'>
                    <label htmlFor="counter">Количество дней</label>
                    <input id='counter' type='text'/>    
                </div>
                <button className='search-btn'>Найти</button>
            </form>
        </div>
    );
};

export default Search;