import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";

export default function ContactUs({ loadAnimation }) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8bf7x6b",
        "template_4jqk61u",
        form.current,
        "eNeELHIOuAwL8bAKs"
      )
      .then(
        (result) => {
          // console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <h2 className={`transparent ${loadAnimation >= 1 && "displayed"}`}>
        Kontaktirajte nas
      </h2>
      <form ref={form} onSubmit={sendEmail}>
        <label
          htmlFor="user_name"
          className={`transparent ${loadAnimation >= 2 && "displayed"}`}
        >
          Ime
        </label>
        <input
          type="text"
          name="user_name"
          id="user_name"
          required
          className={`transparent ${loadAnimation >= 2 && "displayed"}`}
        />
        <label
          htmlFor="user_email"
          className={`transparent ${loadAnimation >= 3 && "displayed"}`}
        >
          Mejl
        </label>
        <input
          type="email"
          name="user_email"
          id="user_email"
          required
          className={`transparent ${loadAnimation >= 3 && "displayed"}`}
        />
        <label
          htmlFor="message"
          className={`transparent ${loadAnimation >= 4 && "displayed"}`}
        >
          Poruka
        </label>
        <textarea
          name="message"
          id="message"
          required
          className={`transparent ${loadAnimation >= 4 && "displayed"}`}
        />
        <label
          htmlFor="sub"
          className={`transparent ${loadAnimation >= 5 && "displayed"}`}
        ></label>
        <input
          type="submit"
          name="sub"
          value="Send"
          id="sub"
          className={`transparent ${loadAnimation >= 6 && "displayed"}`}
        />
      </form>
    </section>
  );
}
