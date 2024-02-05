import React from "react";
import { useForm } from "react-hook-form";

const TextFieldComponent = ({ name, label, validationRules }) => {
  const {
    register,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const errorMessage = errors[name]?.message;

  return (
    <div className='formContainer'>
      <div className='formContents'>
        <label>{label}</label>
        <input {...register(name, validationRules)} className='textField' />
        {errorMessage && (
          <p className='errorMessage'>{errorMessage.toString()}</p>
        )}
      </div>
    </div>
  );
};

export default TextFieldComponent;
