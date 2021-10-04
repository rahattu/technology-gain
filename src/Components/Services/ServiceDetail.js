import React from 'react';

const ServiceDetail = ({cource}) => {
    return (
        <div className="col-md-4">
            <div className="card mt-4">
                <img style={{height:'200px',width:'400px'}} src={cource.picture} className="img-fluid" alt=""/>
                <div className="card-body">
                    <p style={{textAlign:'left'}}>{cource.name} <span style={{float:'right'}}>${cource.price}</span> </p>
                    <p className="bg-info">{cource.info}</p>
                    <button className="btn btn-success">Enroll Now</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;