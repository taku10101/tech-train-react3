function FormTest() {
  return (
    <div>
      <form>
        <label htmlFor='email'>Email</label>
        <input id='email' type='email' />

        <label htmlFor='password'>Password</label>
        <input id='password' type='password' />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default FormTest;
