import { useRef } from "react";
import emailjs from '@emailjs/browser';


const ContactUs = () => {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs
      .sendForm(
        "service_qj3diqq",
        "template_wqksyar",
        form.current,
        "WTzmeoLfqC4vdIERJ"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("message sent Thanks for your message");
          document.getElementById("form").reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
    }

  return (

  <div id='contact' className="biggest contact">
    <div className="main forms-wrapper">
        <div className="resumes">
          <h3>Ready to build your career with us?</h3>
          <p>Send us your resume at <a href='#' className='email'>careers@wevers.com</a> or upload below.</p>
          <input type="file" style={{width:"100%"}}/>
          <div className="upload-btn-wrapper">
          <button 
          className='upload-btn'
          >Upload
          </button>
          </div>
        </div>
        <div className="contact-form">
          <h3>Contact Us</h3>
          <form id="form" ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <button className="upload-btn" type="submit">Send</button>
          </form>
        </div>
    </div>
  </div>
  )
}

export default ContactUs;