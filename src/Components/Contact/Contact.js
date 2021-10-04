import React from 'react';
import Footer from '../Footer/Footer';
import './Contact.css'

const Contact = () => {
   
  
     

    return (
      <section className="Contact">
        <h3 className="pt-5 text-light">Contact Us</h3>
        <br/>
        <div className="row">
            <div className="col-md-4 m-auto">

           
        <form>
        
      <input placeholder="name" className="form-control " type="name" name="user_name" />
      <br/>
      <input placeholder="email" className="form-control " type="email" name="email" />
      <br/>
      
      
      <textarea placeholder="Enter text" className="form-control " name="message" />
      <br/>
      <input className="btn btn-outline-warning form-control btn-lg" type="submit" value="Send" />
    </form>
    </div>
    
        </div>
        <br/>
     
      
        <Footer/>
    
        </section>
            
    );
};

export default Contact;