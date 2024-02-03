import { useState,useRef } from "react";
import "./contact.scss";
import emailjs from '@emailjs/browser';
  
export default function Contact() {
  const [message, setMessage] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const form = useRef();
  const [showNotification, setShowNotification] = useState(false);

 
  const submitForm = async () => {
    // your form submission logic here
    // e.g. make an API call, save data to the backend, etc.
    console.log("Form submitted");
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    setIsButtonDisabled(true);
    //await submitForm();
    //setTimeout(() => setIsButtonDisabled(false), 70);
  };
  const sendEmail = (e) => {
    e.preventDefault();
    

    emailjs.sendForm('service_a90n6mq', 'template_ki2tcd8', form.current, '7HUMQ7s6YeMzRSf2x')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      setIsButtonDisabled(true);
  };

  return (
    <div className="contact" id="contact">
     
      <div className="right">
      <form ref={form} onSubmit={sendEmail}>
  
      <h2>Leave a feedback</h2>
      <input className="inputmail" type="email" name="user_email" placeholder="YOUR EMAIL" />
      <input className="inputcontact" type="text" name="message" placeholder="MESSAGE" />
      
      <input disabled={isButtonDisabled} style={{ color: isButtonDisabled ? 'grey' : 'red' }} className="sendbutton" type="submit" value="Send"/>
      
      
    </form>
    <div className="buttom">Mail: boudmaker@gmail.com</div>
    <div className="buttom">Thanks for passing by ❤️ </div>
      </div>
    </div>
  );
}
