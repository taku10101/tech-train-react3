import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import FormTest from "./ components/FormTest";
import Login from "./ components/Login";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>Welcome to the home page</h1>} />
        <Route path='/form-test' element={<FormTest />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
