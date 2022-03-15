import React, { useRef } from 'react';
import './Contact.css';
import * as Fa from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_35v1ufk',
      'template_qx4x6o9',
      form.current,
      'F2SySzsftqJZ84Wnc',
    );
    e.target.reset();
  };
  return (
    <section id='contact'>
      <h2>Contact Me</h2>
      <div className='container contact_container'>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type='text'
            name='name'
            id='name'
            placeholder='Your name here'
            required
          />
          <input
            type='text'
            name='subject'
            id='subject'
            placeholder='Subject'
            required
          />
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Your email'
          />
          <textarea
            name='message'
            id='message'
            rows={10}
            placeholder='Your message'
            required
          ></textarea>
          <button
            className='btn btn-primary'
            type='submit'
            style={{ fontSize: '1.1rem' }}
          >
            Send Message
          </button>
        </form>
        <div className='options'>
          <div className='option'>
            <Fa.FaWhatsapp />
            <h5>Whatsapp</h5>
            <a
              href='https://api.whatsapp.com/send?phone=15875978559'
              target='_blank'
            >
              Send a message
            </a>
          </div>
          <div className='option'>
            <Fa.FaEnvelope />
            <h5>Email</h5>
            <a href='mailto:lyndenflood@mail.com' target='_blank'>
              Send a message
            </a>
          </div>
          <div className='option'>
            <Fa.FaLinkedin />
            <h5>LinkedIn</h5>
            <a href='https://linkedin.com' target='_blank'>
              Send a message
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
