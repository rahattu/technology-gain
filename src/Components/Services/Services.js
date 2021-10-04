import React, { useState } from 'react';
import Data from '../Data/Data';
import ServiceDetail from './ServiceDetail';

const Services = () => {
    const [cource,setCource]=useState(Data)
    return (
        <div className="container">
        <div className="row mt-5">
            {
                cource.map(cource=>{
                    return <ServiceDetail key={cource.id} cource={cource}/>
                })
            }
        </div>
        </div>
    );
};

export default Services;