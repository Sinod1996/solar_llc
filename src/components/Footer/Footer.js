import React from 'react';
import '../../assets/styles/Footer.css'
import Form from '../Form';

function Footer(props) {
    return (
        <div className={'footer'} id={'contact'}>
             <div>
                <h3 data-aos={'fade-down'}>Contact Us</h3>
                <p data-aos={'fade-up'}>With engineers and professionals ready to answer your questions, we’ll do it all to meet your <br/> business’s needs.</p>

                <Form/>

            </div>
        </div>
    );
}

export default Footer;