import { useForm } from "react-hook-form";
import { signup } from "../api/auth";
const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await signup(data.name, data.email, data.password);
      console.log(response);
      console.log(data);
    } catch (error) {
      console.error(error);
      console.log(data);
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
export default Signup;
