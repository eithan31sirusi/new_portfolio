import { useState, useEffect } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { useRef } from "react";
import emailjs from "emailjs-com";

import { validateForm } from "../../helpers/validateForm";

import AnimatedBG from "../../UI/AnimatedBG";

const Contact = () => {
  const initialValues = { userName: "", email: "", message: "" };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [send, setSend] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    console.log(formErrors);

    if (Object.keys(formErrors).length === 0) {
      if (isSubmitting) {
        setSend(true);
      }
      console.log(formValues);
    }
  }, [formErrors]);

  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues({ ...formValues, [name]: value });
    setFormErrors(validateForm(formValues));

    console.log(formValues);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (send) {
      emailjs
        .sendForm(
          "service_frgmv5c",
          "template_dxz667m",
          e.target,
          "KF7EFQKoBhcp7aC9P"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );

      e.target.reset();
    }
  };

  return (
    <section id="contact">
      <AnimatedBG />
      <h4>Get In Touch</h4>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>eithan26sirusi@gmail.com</h5>
            <a href="mailto:eithan26sirusi@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
        </div>

        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          {Object.keys(formErrors).length === 0 && isSubmitting ? (
            <div className="success_message">
              The message was received successfully!
            </div>
          ) : (
            ""
          )}
          <p className="error_message">{formErrors.userName}</p>
          <input
            type="text"
            name="userName"
            placeholder="Your Full Name"
            value={formValues.userName}
            onChange={handleChange}
          />
          <p className="error_message">{formErrors.email}</p>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formValues.email}
            onChange={handleChange}
          />
          <p className="error_message">{formErrors.message}</p>
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            value={formValues.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
