import React from 'react';
import './search.css';


const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

if (month < 10) month = "0" + month;
if (day < 10) day = "0" + day;

const today = year + "-" + month + "-" + day;

const Search = () => {
    return (
        <div className='search'>
            <form>
                <div className='search-input'>
                    <label htmlFor="location">Локация</label>
                    <input id='location' type='text'/>    
                </div>
                <div className='search-input'>
                    <label htmlFor="date">Дата заселения</label>
                    <input id='date' type='date' defaultValue={today}/>    
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