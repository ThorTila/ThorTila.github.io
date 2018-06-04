import React from 'react';
import './Form.css';

const Form = props => (
  <form action="https://formspree.io/thor@tilla.int.pl" method="POST">
    <label for="name">Your name*</label>
    <input id="name" type="text" name="name" placeholder="Your name" required />
    <label for="mail">Your mail*</label>
    <input
      id="mail"
      type="email"
      name="_replyto"
      placeholder="Your mail"
      required
    />
    <label for="subject">Subject of your message*</label>
    <input
      id="subject"
      type="text"
      name="_subject"
      placeholder="Subject of your message"
      required
    />
    <label for="msg">You message*</label>
    <textarea
      id="msg"
      name="msg"
      cols="30"
      rows="10"
      placeholder="You message"
      required
    />
    <input type="hidden" name="_language" value="pl" />
    <button type="submit">Send</button>
  </form>
);

export default Form;
