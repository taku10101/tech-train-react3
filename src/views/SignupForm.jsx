import React from "react";
import FormProvider from "../components/FormProvider";
import TextFieldComponent from "../components/TextFieldComponent";
import { signup } from "../api/auth";
const SignupForm = () => {
  const onSubmit = (data) => {
    const { email, password } = data;

    try {
      signup({ email, password });
      console.log(data);
    } catch (error) {
      console.error(error);
      console.log(data);
    }
  };

  return (
    <FormProvider
      defaultValues={{ name: "", email: "", password: "" }}
      onSubmit={onSubmit}
    >
      <TextFieldComponent
        name='name'
        label='name'
        validationRules={{ required: "First Name is required" }}
      />
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

export default SignupForm;
