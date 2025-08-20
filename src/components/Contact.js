import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_pqsaxtg',      // Replace with EmailJS service ID
      'template_8w8cd07',     // Replace with EmailJS template ID
      form.current,
      '4B-HfMHx67UlfZpfb'       // Replace with your EmailJS public key
    ).then(
      (result) => {
        alert("Message sent successfully! 🎉");
        form.current.reset();
      },
      (error) => {
        alert("Failed to send message 😢, try again!");
      }
    );
  };

  return (
    <div className="contact-container">
      <header className="contact-header">
        <h1>Contact Us</h1>
      </header>

      <section className="contact-content">
        <h2>Get in Touch</h2>
        <p>
          We'd love to hear from you! Please fill out the form below or reach us at
          <a href="mailto:sanjaykanth45@gmail.com"> sanjaykanth45@gmail.com</a>.
        </p>

        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
}

export default Contact;
