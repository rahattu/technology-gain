import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <div class="footer-dark">
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li>Web design</li>
                            <li>Web Development</li>
                            <li>Language</li>
                        </ul>
                    </div>
                    <div class="col-sm-6 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li>Javascript</li>
                            <li>Html</li>
                            <li>Java</li>
                        </ul>
                    </div>
                    <div class="col-md-6 item text">
                        <h3>Technology Gain</h3>
                        <p>The knowledge of some programming language can be very important to develop capacities in terms of problem solving and task automation. Certainly this type of knowledge coupled with some basic notions of algorithms can open a whole new panorama of job possibilities.</p>
                    </div>
    
                </div>
                <p class="copyright">Technology Gain © 2022</p>
            </div>
        </footer>
    </div>
    );
};

export default Footer;