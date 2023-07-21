import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import EditUser from "./components/EditUser";
import Profile from "./components/Profile";
function App() {
   return (
      <div className="App">
         <BrowserRouter>
            <Header />
            <Routes>
               <Route path="/home" element={<Home />} />
               <Route path="login" element={<Login />} />
               <Route path="/register" element={<Register />} />
               <Route path="/register" element={<Register />} />
               <Route path="/edit/:id" element={<EditUser />} />
               <Route path="/profile" element={<Profile />} />
            </Routes>
         </BrowserRouter>
      </div>
   );
}

export default App;
