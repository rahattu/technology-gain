import React from 'react';
import './HomeDetails.css';
const HomeDetail = ({cource}) => {
    return (
        <div className="col-md-4 home">
            <div className="card ">
                 <img  style={{height:'350px',width:'450px'}} className="" src={cource.picture} alt=""/>
                <div className="card-body">
                    <p>{cource.name} <span style={{float:'right'}}>{cource.price}</span></p>
                    <p className="text-muted">{cource.info}</p>
                    <button className="btn btn-danger">Enroll_now</button>
                </div>
            </div>
            
        </div>
    );
};

export default HomeDetail;