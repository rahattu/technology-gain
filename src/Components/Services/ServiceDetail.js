import React from 'react';


const ServiceDetail = ({cource}) => {
    return (
        <div className="col-md-4 ">
            <div className="card mt-4">
                <img style={{height:'250px',width:'400px'}} src={cource.picture} className="img-fluid" alt=""/>
                <div className="card-body">
                    <p className="bg-info fw-bold fs-5" style={{textAlign:'center'}}>{cource.name} <span style={{float:'right'}}>${cource.price}</span> </p>
                    <p>{cource.info}</p>
                    <button className="btn btn-success">Enroll Now</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;