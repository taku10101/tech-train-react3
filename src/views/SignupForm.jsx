import { useForm } from "react-hook-form";
import { signup } from "../api/auth";
import styled from "styled-components";
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
    <Sform onSubmit={handleSubmit((data) => onSubmit(data))}>
      <Scontainer>
        <label>name</label>
        <input {...register("name", { required: true })} />
        {errors.name && <p>name is required.</p>}
      </Scontainer>

      <Scontainer>
        <label>email</label>
        <input
          {...register("email", {
            required: "Email is required",
            pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" },
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </Scontainer>

      <Scontainer>
        <label>password</label>
        <input
          {...register("password", {
            required: true,
            minLength: 8,
          })}
        />
        {errors.password && (
          <p>password is required and must be at least 8 characters long.</p>
        )}
      </Scontainer>
      <Sbutton type='submit'>送信</Sbutton>
    </Sform>
  );
};
export default Signup;

const Scontainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 20px;
`;

const Sform = styled.form`
  display: flex;
  margin: 20px;
  margin-left: 30px;
  justify-content: center;
`;

const Sbutton = styled.button`
  margin: 20px;
  width: 100px;
  height: 40px;
`;
