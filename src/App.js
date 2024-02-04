import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <form>
        <input type='email' name='email' />
        <input type='password' name='password' />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;
