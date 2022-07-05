import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faHome, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <footer className="text-center bg-dark text-muted pt-3">
        <div>
            <div class="container text-center text-md-start mt-3">
                <div class="row mt-3">
                    <div class="col-xl-3 mx-auto mb-3">
                        <h6 class="text-uppercase fw-bold mb-3">
                            <FontAwesomeIcon icon={faAward} className="me-1" />
                            <a href="/" className="text-reset text-decoration-none">Restaurant Reviews</a>
                        </h6>
                        <p>Restaurant Reviews is dedicated to providing restaurant-goers a peace of mind when choosing a restaurant.</p>
                    </div>  
                    <div class="col-xl-3 mx-auto mb-3">
                        <h6 class="text-uppercase fw-bold mb-3">Contact Us</h6>
                        <p><FontAwesomeIcon icon={faHome} className="me-2"/>New York, NY 10012, US</p>
                        <p><FontAwesomeIcon icon={faEnvelope} className="me-2"/>contact@restaurantreviews.com</p>
                        <p><FontAwesomeIcon icon={faPhone} className="me-2"/> + 01 234 567 88</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer;