import { useState, useEffect } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { useRef } from "react";
import emailjs from "emailjs-com";

import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "../../helpers/validateForm";

import { useForm } from "react-hook-form";

import AnimatedBG from "../../UI/AnimatedBG";

const Contact = () => {
  const [isconfirmMsg, setIsconfirmMsg] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isDirty },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },

    resolver: yupResolver(validationSchema),
  });

  console.log(isDirty);
  const onError = (errors, e) => console.log(errors, e);

  const form = useRef();

  const sendMail = (e) => {
    e.preventDefault();
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
    reset();
  };

  const onSubmit = (data, e) => {
    console.log(data);
    console.log(e);
    sendMail(e);
    setIsconfirmMsg(true);

    setTimeout(() => {
      setIsconfirmMsg(false);
    }, 3000);
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
          <h2 className="success_message">
            {" "}
            {isconfirmMsg && "Thanks for contacting me!"}
          </h2>
        </div>

        {/* END OF CONTACT OPTIONS */}
        <form id="form" ref={form} onSubmit={handleSubmit(onSubmit)}>
          <p className="error_message"> {errors.name?.message}</p>
          <input placeholder="Name" {...register("name")} />
          <p className="error_message"> {errors.email?.message}</p>
          <input placeholder="Email" {...register("email")} />
          <p className="error_message"> {errors.message?.message}</p>
          <textarea
            name="Message"
            rows="7"
            placeholder="Your Message"
            {...register("message")}
          ></textarea>
          <button
            disabled={!isDirty}
            type="submit"
            className={!isDirty ? "btn-disabled" : "btn btn-primary"}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
