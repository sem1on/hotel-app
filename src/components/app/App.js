import React from 'react';

import Search from '../search/Search';
import Favorit from '../favorit/Favorit';
import './App.css';
import Navbar from '../navbar/Navbar';
import Hotels from '../hotels/Hotels';
import Login from '../login/Login';

function App() {
  return (
    <div className="App">
        {/* <Login/> */}
        <Navbar/>
        <div className='wrapper'>
            <div>
                <Search/>
                <Favorit/>
            </div>
            <Hotels/>
        </div>
    </div>
  );
}

export default App;
