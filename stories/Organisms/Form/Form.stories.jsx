import React from 'react';
import Form from './Form';
import SelectField from '../../Molecules/FormFields/SelectField/SelectField';
import RadioField from '../../Molecules/FormFields/RadioField/RadioField';
import InputField from '../../Molecules/FormFields/InputField/InputField';
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';

export default {
  title: 'Organisms/Form',
  component: Form,
  parameters: {
    layout: 'centered',
  },
};

export const Login = () => {
  return (
    <Form
      title="Welcome back"
      subtitle="Enter your credentials to access your account"
      submitText="Sign In"
      onSubmit={(e) => console.log('Form submitted:', e)}
    >
      <InputField
        label="Email"
        type="email"
        placeholder="Enter your email"
        icon={<FaEnvelope />}
        required
      />
      <InputField
        label="Password"
        type="password"
        placeholder="Enter your password"
        icon={<FaLock />}
        required
      />
    </Form>
  );
};

export const Register = () => {
  return (
    <Form
      title="Create an account"
      subtitle="Fill in the details to get started"
      submitText="Sign Up"
      onSubmit={(e) => console.log('Form submitted:', e)}
    >
      <InputField
        label="Full Name"
        placeholder="Enter your name"
        icon={<FaUser />}
        required
      />
      <InputField
        label="Email"
        type="email"
        placeholder="Enter your email"
        icon={<FaEnvelope />}
        required
      />
      <SelectField
        label="Role"
        options={[
          { value: 'developer', label: 'Developer' },
          { value: 'designer', label: 'Designer' },
          { value: 'manager', label: 'Manager' },
        ]}
        required
      />
      <RadioField
        label="Experience Level"
        options={[
          { value: 'junior', label: 'Junior' },
          { value: 'mid', label: 'Mid-Level' },
          { value: 'senior', label: 'Senior' },
        ]}
        required
      />
      <InputField
        label="Password"
        placeholder="Create a password"
        icon={<FaLock />}
        required
    />
      <InputField
        label="Confirm Password"
        placeholder="Confirm your password"
        icon={<FaLock />}
        required
      />
    </Form>
  );
};

export const Contact = () => {
  return (
    <Form
      title="Get in touch"
      subtitle="We'd love to hear from you. Send us a message"
      submitText="Send Message"
      onSubmit={(e) => console.log('Form submitted:', e)}
    >
      <InputField
        label="Name"
        placeholder="Your name"
        icon={<FaUser />}
        required
      />
      <InputField
        label="Email"
        type="email"
        placeholder="Your email"
        icon={<FaEnvelope />}
        required
      />
      <SelectField
        label="Subject"
        options={[
          { value: 'general', label: 'General Inquiry' },
          { value: 'support', label: 'Technical Support' },
          { value: 'feedback', label: 'Feedback' },
        ]}
        required
      />
      <InputField
        label="Message"
        multiline
        rows={4}
        placeholder="Write your message here..."
        required
      />
    </Form>
  );
}; 