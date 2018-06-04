import React from 'react';
import Form from '../Form/Form';
import './contact.css';

const Contact = props => (
  <div className="contact">
    <h1>Contact</h1>
    <div className="contact-container">
      <address>
        <ul>
          <li>Phone:</li>
          <li>Mail:</li>
          <li>Addres:</li>
        </ul>
      </address>
      <Form />
    </div>
  </div>
);

export default Contact;
