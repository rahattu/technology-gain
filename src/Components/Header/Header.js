import React from 'react';
import './Header.css'
const Header = () => {
    return (
        
        <div className="row">
            <div className="col-md-6 mt-5 pt-5  h">
            <h1>Learn Like Yourselves,Build Confidence</h1>
            <h5 className="text-muted t">Acquire the most important skills of the present time by enrolling in online courses, training and career track programs of your choice.</h5>
            </div>
            <div className="col-md-6 mt-5 pt-5">
                <img className="img-fluid" src={'https://coderevolution.ro/wp-content/uploads/2019/06/online-courses-2.jpg'} alt=""/>
            </div>
           
        </div>
        
    );
};

export default Header;