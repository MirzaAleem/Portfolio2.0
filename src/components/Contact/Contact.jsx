import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './contact.css'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_5lymou2","template_oylhwe7", form.current, '4VleqRXJGggpOQR6O')
      .then((result) => {
          console.log(result.text);
          alert('Your message was sent successfully!');
      }, (error) => {
          console.log(error.text);
          alert('Oops... ' + JSON.stringify(error));
      });
  };

  return (
    <div id='contact'>
    <video src="assets\video\background.mp4" autoPlay muted loop></video>
    <h2 className="contact-heading">Contact Me</h2>
    <form ref={form} onSubmit={sendEmail}>
  <div className="form-group">
    <label htmlFor="user_name">Name:</label>
    <input type="text" name="user_name" id="user_name" />
  </div>
  <div className="form-group">
    <label htmlFor="user_email">Email:</label>
    <input type="email" name="user_email" id="user_email" />
  </div>
  <div className="form-group">
    <label htmlFor="message">Message:</label>
    <textarea name="message" id="message" rows="5" />
  </div>
  <button type="submit" className="btn">Send</button>
</form>
<footer className="footer">
  <h4 className='social-heading'>Lets's Connect</h4>
 <div className="social-links">
    <a href="https://www.linkedin.com/in/aleem-abbas-6aa8811a7/"><i className="fab fa-linkedin"></i></a>
    <a href="https://www.instagram.com/aleemabbas13/"><i className="fab fa-instagram"></i></a>
    <a href="https://github.com/MirzaAleem"><i className="fab fa-github"></i></a>
  </div>
  <p>Designed and crafted with <span className="heart-icon">&hearts;</span> by @Aleem</p>
</footer>
</div>
  );
};

export default Contact