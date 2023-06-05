import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import ReCAPTCHA from "react-google-recaptcha";
import "./Contact.css"

function ContactForm() {
  const [state, handleSubmit] = useForm("xlekkvbd");
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    tel: '',
    services: '',
    message: '',
  });

  useEffect(() => {
    if (state.succeeded) {
      // Clear form fields after successful submission
      setFormValues({
        name: '',
        email: '',
        tel: '',
        services: '',
        message: '',
      });
    }
  }, [state.succeeded]);

  const handleInputChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <div className="contact-form">
     <form noValidate onSubmit={handleSubmit}>
  <label htmlFor="name">
    Nume
  </label>
  <input
    id="name"
    type="text" 
    name="name"
    required
    value={formValues.name}
    onChange={handleInputChange}
  />
  <ValidationError 
    prefix="Nume" 
    field="name"
    errors={state.errors}
  />

  <label htmlFor="email">
    Email Address
  </label>
  <input
    id="email"
    type="email" 
    name="email"
    required
    value={formValues.email}
    onChange={handleInputChange}
  />
  <ValidationError 
    prefix="Email" 
    field="email"
    errors={state.errors}
  />

  <label htmlFor="tel">
    Număr de telefon
  </label>
  <input
    id="tel"
    type="tel" 
    name="tel"
    required
    value={formValues.tel}
    onChange={handleInputChange}
  />
  <ValidationError 
    prefix="Număr de telefon" 
    field="tel"
    errors={state.errors}
  />

  <label htmlFor="services">
    Servicii
  </label>
  <select id="services" name="services" required value={formValues.services} onChange={handleInputChange}>
    <option value="Consultanta Fonduri europene">Consultanta Fonduri europene</option>
    <option value="Marketing online">Marketing online</option>
    <option value="Consultanta management">Consultanta management</option>
  </select>
  <ValidationError 
    prefix="Servicii" 
    field="services"
    errors={state.errors}
  />

  <label htmlFor="message">
    Mesaj
  </label>
  <textarea
    id="message"
    name="message"
    required
    value={formValues.message}
    onChange={handleInputChange}
  />
  <ValidationError 
    prefix="Mesaj" 
    field="message"
    errors={state.errors}
  />

  <ReCAPTCHA className='recaptcha'
    sitekey="6LcL00smAAAAAL9n6zguJ6bAexOc21x3pUAVwLBW"
  />

  <button type="submit" disabled={state.submitting}>
    Trimite
  </button>
</form>

      {state.succeeded && (
        <p className='message__succes'>Mesaj trimis cu succes!</p>
      )}
    </div>
  );
}

export default ContactForm;
