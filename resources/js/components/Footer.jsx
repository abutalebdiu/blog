import React from 'react';
import ReactDOM from 'react-dom';

function Footer(){
    return (
        <section className="footer-top py-4">
            <div className="custom-container">
                <div className="row">
                    <div className="col-12">
                        <div className="footer-top-content">
                            <div className="footer-logo">
                                <img src="images/logo/logo.png" alt="" />
                            </div>
                            <div className="footer-social py-3">
                                <div className="head-top-social">
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                    <a href="#"><i className="fa fa-instagram"></i></a>
                                    <a href="#"><i className="fa fa-youtube"></i></a>
                                </div>
                            </div>
                            <div className="footer-top-menu">
                                <a href="#">about</a>
                                <a href="#">contact</a>
                                <a href="#">archive</a>
                                <a href="#">teams</a>
                                <a href="#">policy</a>
                                <a href="#">ADVERTISEMENT</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;

