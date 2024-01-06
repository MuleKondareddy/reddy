import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px 0;
`;

const ContactForm = styled.form`
  max-width: 400px;
  margin: 0 auto;
`;

const FormLabel = styled.label`
  display: block;
  text-align: left;
  margin-bottom: 8px;
  font-weight: bold;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Contact = () => {
  return (
    <ContactContainer>
      <h2>Contact Me</h2>
      <ContactForm>
        <FormLabel htmlFor="name">Your Name:</FormLabel>
        <FormInput type="text" id="name" placeholder="Enter your name" />

        <FormLabel htmlFor="email">Your Email:</FormLabel>
        <FormInput type="email" id="email" placeholder="Enter your email" />

        <FormLabel htmlFor="message">Your Message:</FormLabel>
        <FormTextarea id="message" placeholder="Type your message here"></FormTextarea>

        <SubmitButton type="submit">Send Message</SubmitButton>
      </ContactForm>
    </ContactContainer>
  );
};

export default Contact;
