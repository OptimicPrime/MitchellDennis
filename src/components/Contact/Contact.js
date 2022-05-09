import React from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Contact() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_vc6bqzq', 'template_rzeq8nd', e.target, 'user_ArNIx5BsJbvIZ4UNZawKu')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      alert("Message Sent!");
  }

  return (
    <form className="contact-form" onSubmit={sendEmail} id="Contact">
     <h2 className='contact-title'>Contact</h2>
    <div className="contact-card">
    <div className="row-2">
     <div className="column-3">
     <div className="details">
     <h2 className='phone-email'>Phone</h2>
     <p className='phone-email-info'>(403)-336-3067</p>
     <h2 className='phone-email2'>Email</h2>
     <p className='phone-email-info2'>mitchell19dennis@gmail.com</p>
     <h2 className='phone-email2'>Links</h2>
     <a target="_blank" href='https://www.linkedin.com/in/mitchell-dennis-41b487223/' rel="noopener noreferrer"><FaLinkedinIn className="icon"/></a> <a target="_blank" href='https://github.com/OptimicPrime' rel="noopener noreferrer"><FaGithub className="icon"/></a> 
     </div>
      </div>
      <div className="column-2">
      <h2 className='form-title'> Contact Form</h2>
      <input className="name-email" placeholder="  Your Name..." type="text" name="name"/>
      <input className="name-email"placeholder="  Your Email..." type="email" name="email"/>
      <textarea className="name-email" placeholder="  Your message to me..." name="message"/>
      <input className="send-button" type="submit" value="Send" />
      </div>
      </div>
      </div>
    </form>
  );
}