import React from "react";
import { useState } from "react";
import "./Form.css";
function Form() {
  const [formdata, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    message: "",
    check: false,
  });

  //   console.log(formdata);

  // const message = (
  //   <p
  //     style={{
  //       color: "#F83F23",
  //       fontWeight: 400,
  //       fontSize: "14px",
  //       lineHeight: "20px",
  //     }}
  //   >
  //     Please enter a message
  //   </p>
  // );

  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <div className="Formpage">
      <h3>Contact Me</h3>
      <p>Hi there, contact me to ask me about anything you have in mind.</p>
      <form onSubmit={handleSubmit}>
        <div className="user_name">
          <div>
            <label htmlFor="first_name">First name</label>
            <input
              type="text"
              name="first_name"
              id="first_name"
              onChange={handleChange}
              placeholder="Enter your first name"
              value={formdata.first_name}
              required
              className="form-control"
            />
          </div>
          <div>
            <label htmlFor="last_name">Last name</label>
            <input
              type="text"
              name="last_name"
              id="last_name"
              onChange={handleChange}
              placeholder="Enter your last name"
              value={formdata.last_name}
              required
              className="form-control"
            />
          </div>
        </div>
        <div className="user_details">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            placeholder="yourname@email.com"
            value={formdata.email}
            required
            className="form-control"
          />

          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            onChange={handleChange}
            placeholder="Send me a message and I'll reply you as soon as possible..."
            value={formdata.message}
            required
            className="form-control"
          />
          {/* {formdata.message === "" ? message : ""} */}

          <div className="user_check">
            <input
              type="checkbox"
              name="check"
              id="is_checked"
              onChange={handleChange}
              placeholder=""
              checked={formdata.check}
            />
            <label htmlFor="is_checked">
              You agree to providing your data to name who may contact you.
            </label>
          </div>
        </div>

        <input
          type="submit"
          value="Send Message"
          className="submit btn btn-primary"
          id="btn_submit"
        />
      </form>
    </div>
  );
}

export default Form;
