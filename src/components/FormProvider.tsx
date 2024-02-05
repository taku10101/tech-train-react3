import React from "react";
import { useForm, FormProvider } from "react-hook-form";

function FormContainer({ defaultValues, children, onSubmit }) {
  const methods = useForm({
    defaultValues,
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className='formSubmit'>{children}</div>
        <input type='submit' />
      </form>
    </FormProvider>
  );
}

export default FormContainer;
