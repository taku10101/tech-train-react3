const Login = () => {
  return (
    <>
      <form>
        <input type='email' name='email' placeholder='Email' />
        <input type='password' name='password' placeholder='Password' />
        <button type='submit' name='login'>
          ログイン
        </button>
      </form>
    </>
  );
};

export default Login;
