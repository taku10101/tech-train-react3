import { useForm } from "react-hook-form";
import { signin } from "../api/auth";
const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await signin(data);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit((data) => onSubmit(data))}>
      <input {...register("name", { required: true })} />
      {errors.name && <p>name is required.</p>}

      <input
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      {errors.email && <p>email is required.</p>}

      <input
        {...register("password", {
          required: true,
          minLength: 8,
        })}
      />
      {errors.password && (
        <p>password is required and must be at least 8 characters long.</p>
      )}
      <input type='submit' />
    </form>
  );
};
export default LoginForm;
