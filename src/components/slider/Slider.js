import React from 'react';
import './slider.css';

import one from './1.jpg';
import two from './2.jpg';
import three from './3.jpg';
import four from './4.jpg';
import five from './5.jpg';
import six from './6.jpg';
import seven from './7.jpg';


const Slider = () => {
    return (
        <div class="slider">
            <div class="slide-track">
                <div class="slide">
                    <img src={one} height="150" width="165" alt="" />
                </div>
                <div class="slide">
                    <img src={two} height="150" width="165" alt="" />
                </div>
                <div class="slide">
                    <img src={three} height="150" width="165" alt="" />
                </div>
                <div class="slide">
                    <img src={four} height="150" width="165" alt="" />
                </div>
                <div class="slide">
                    <img src={five} height="150" width="165" alt="" />
                </div>
                <div class="slide">
                    <img src={six} height="150" width="165" alt="" />
                </div>
                <div class="slide">
                    <img src={seven} height="150" width="165" alt="" />
                </div>

                <div class="slide">
                    <img src={one} height="150" width="165" alt="" />
                </div>
                <div class="slide">
                    <img src={two} height="150" width="165" alt="" />
                </div>
                <div class="slide">
                    <img src={three} height="150" width="165" alt="" />
                </div>
                <div class="slide">
                    <img src={four} height="150" width="165" alt="" />
                </div>
                <div class="slide">
                    <img src={five} height="150" width="165" alt="" />
                </div>
                <div class="slide">
                    <img src={six} height="150" width="165" alt="" />
                </div>
                <div class="slide">
                    <img src={seven} height="150" width="165" alt="" />
                </div>
                
            </div>
        </div>
    );
};

export default Slider;