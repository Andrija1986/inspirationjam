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
          console.log("message sent", alert("Thanks for email"));
        },
        (error) => {
          console.log(error.text);
        }
      );
    }

  return (
    
      <div id='technology' className="biggest">

        <h3>Contact Us</h3>
        <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
      </div>
    
  )
}

export default ContactUs;