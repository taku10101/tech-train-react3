import React from "react";
import { Routes, Route } from "react-router-dom";
import FormTest from "./views/FormTest";
import Login from "./views/LoginForm";
import Signup from "./views/SignupForm";
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<h1>Welcome to the home page</h1>} />
      <Route path='/form-test' element={<FormTest />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
    </Routes>
  );
};

export default App;
