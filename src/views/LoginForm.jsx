import React from "react";
import FormProvider from "../components/FormProvider";
import TextFieldComponent from "../components/TextFieldComponent";

import { signin } from "../api/auth";

const LoginForm = () => {
  const onSubmit = (data) => {
    const { email, password } = data;
    try {
      signin({ email, password });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormProvider
      defaultValues={{ email: "", password: "" }}
      onSubmit={onSubmit}
    >
      <TextFieldComponent
        name='email'
        label='Email'
        validationRules={{
          required: "Email is required",
          pattern: {
            value: /^\S+@\S+$/i,
            message: "Email is invalid",
          },
        }}
      />
      <TextFieldComponent
        name='password'
        label='Password'
        validationRules={{ required: "Password is required", minLength: 6 }}
      />
    </FormProvider>
  );
};

export default LoginForm;
