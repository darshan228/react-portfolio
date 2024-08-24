import { Snackbar } from "@mui/material";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
  padding-top: 50px;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin-top: 20px;

  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  color: ${({ theme }) => theme.text_secondary};
  max-width: 600px;
  text-align: center;

  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  padding: 32px;
  background-color: ${({ theme }) => theme.card};
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;

const ContactTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 6px;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  border-radius: 10px;
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  padding: 12px 16px;

  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  border-radius: 10px;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  padding: 12px 16px;

  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -moz-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -webkit-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
`;

const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;

function Contact() {
  const formRef = useRef();
  const [formErrors, setFormErrors] = useState({});

  const [open, setOpen] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validateName = (name) => {
    return name.trim().length > 0;
  };

  const validateSubject = (subject) => {
    return subject.trim().length > 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let errors = {};
    setFormErrors({});
    const formData = new FormData(formRef.current);

    const emailValue = formData.get("email");
    const nameValue = formData.get("name");
    const subjectValue = formData.get("subject");
    const messageValue = formData.get("message");

    if (!validateEmail(emailValue)) {
      errors.email = "Invalid email address";
    }

    if (!validateName(nameValue)) {
      errors.name = "Name is required";
    }

    if (!validateSubject(subjectValue)) {
      errors.subject = "Subject is required";
    }

    if (Object.keys(errors).length === 0) {
      // Form is valid, you can submit it
      console.log("Form Data:", {
        email: emailValue,
        name: nameValue,
        subject: subjectValue,
        message: messageValue,
      });
      // emailjs.sendForm('service_tox7kqs', 'template_nv7k7mj', form.current, 'SybVGsYS52j2TfLbi')
      // .then((result) => {
      //   setOpen(true);
      //   form.current.reset();
      // }, (error) => {
      //   console.log(error.text);
      // });
    } else {
      
    }
    setFormErrors({ ...errors });
  };

  return (
    <Container id="contact">
      <Wrapper>
        <Title>Contact</Title>
        <Desc>
          Feel free to reach out to me for any questions or opportunities!
        </Desc>
        <ContactForm ref={formRef} onSubmit={handleSubmit}>
          <ContactTitle>Email Me 🚀</ContactTitle>
          <ContactInput placeholder="Your Email" type="email" name="email" />
          {formErrors.email && <Span>{formErrors.email}</Span>}
          <ContactInput placeholder="Your Name" type="text" name="name" />
          {formErrors.name && <Span>{formErrors.name}</Span>}
          <ContactInput placeholder="Subject" type="text" name="subject" />
          {formErrors.subject && <Span>{formErrors.subject}</Span>}
          <ContactInputMessage placeholder="Message" rows="4" name="message" />
          <ContactButton type="submit" value="Send" />
        </ContactForm>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message="Email sent successfully!"
          severity="success"
        />
      </Wrapper>
    </Container>
  );
}

export default Contact;
