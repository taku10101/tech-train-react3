import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import FormTest from "./views/FormTest";
import Login from "./views/Login";
import Signup from "./views/Signup";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>Welcome to the home page</h1>} />
        <Route path='/form-test' element={<FormTest />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
