import React from "react";
import FormProvider from "../components/FormProvider";
import TextFieldComponent from "../components/TextFieldComponent";

const SignupForm = () => {
  const onSubmit = (data) => {
    console.log(data);
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

export default SignupForm;
