import React from 'react';

const HomeDetail = ({cource}) => {
    return (
        <div className="col-md-5">
            <div className="card">
                <img className="img-fluid" src={cource.picture} alt=""/>
                <div className="card-body">
                    <p>{cource.name} <span style={{float:'right'}}>{cource.price}</span></p>
                    <p className="text-muted">{cource.info}</p>
                    <button className="btn btn-primary">Enroll_now</button>
                </div>
            </div>
            
        </div>
    );
};

export default HomeDetail;