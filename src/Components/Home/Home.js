import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Data from '../Data/Data';

import Header from '../Header/Header';
import HomeDetail from './HomeDetail';

const Home = () => {
    const [cource,setCource]=useState(Data.slice(0,4));
    
    return (
        <div className="">
            <Header/>
            <div className="row">
            {
                cource.map(cource=>{
                    return <HomeDetail id={cource.id} cource={cource}/>
                })
            }
            <Link to="/service">
            <button>Show More </button></Link>
            </div>
            
        </div>
    );
};

export default Home;