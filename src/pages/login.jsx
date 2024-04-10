import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function Login() {
  
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [contrasenaError, setContrasenaError] = useState("");

    const login = () => {
      setEmailError("");
      setContrasenaError("");
  
      if (!email) {
          setEmailError("Email is required");
          return;
      }
  
      if (!contrasena) {
          setContrasenaError("Password is required");
          return;
      }
  
      axios.post('https://backend-hotel-production-c6a5.up.railway.app/login', {
          email: email,
          contrasena: contrasena
      })
          .then((response) => {
              localStorage.setItem('token', response.data.token); // Almacena el token en localStorage
              Swal.fire({
                title: "Successful login!!",
                text: "You will be redirected to the home screen",
                icon: "success",
                timer: 4000
              });
              window.location.href = "/";
          })
          .catch((error) => {
              Swal.fire({
                icon: "error",
                title: "Error",
                text: "Incorrect email or password",
              });
              console.error('Error de inicio de sesión:', error);
          });
      }
      
  return (
    <>
        <div className="navbar bg-base-200 bg-opacity-0 top-0 absolute w-full z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm bg-customBlue dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="text-lg text-white" href="/">Home</a>
              </li>
              <li>
                <a className="text-lg text-white" href="/facilities">Facilities</a>
              </li>
              <li>
                <a className="text-lg text-white" href="/rooms">Rooms</a>
              </li>
              <li>
                <a className="text-lg text-white" href="/contacts">Contact Us</a>
              </li>
              <li>
                <a className="text-lg text-white" href="/signup">Sign Up</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="text-lg text-white font-bold" href="/">Home</a>
            </li>
            <li>
              <a className="text-lg text-white font-bold" href="/facilities">Facilities</a>
            </li>
            <li>
              <a className="text-lg text-white font-bold" href="/rooms">Rooms</a>
            </li>
            <li>
              <a className="text-lg text-white font-bold" href="/contacts">Contact Us</a>
            </li>
            <li>
              <a className="text-lg text-white font-bold" href="/signup">Sign Up</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center bg-customBlue text-white">
        <img src={("logo.png")} alt="Logo" />
        <div className="text-7xl p-4 mt-9 mb-9">LOGIN</div>
      </div>
      <div className="container mb-9 mx-auto mt-20 px-4 sm:px-6 lg:px-8">  
        <form className="max-w-md mx-auto mt-9">
          <label htmlFor="email" className="text-sm  font-medium text-gray-700 mb-1 block">
            Email:
          </label>
          <input
          type="email"
          className="border w-full p-2 mb-4"
          id="email"
          placeholder="Enter your email"
          name="email"
          value={email}
          onChange={(event) => {
              setEmail(event.target.value);
              setEmailError(""); 
          }}
          />
          {emailError && <p className="text-red-500">{emailError}</p>}

          <label htmlFor="password" className="text-sm font-medium text-gray-700 mb-1 block">
            Password:
          </label>
          <input
          type="password"
          className="border w-full p-2 mb-4"
          id="password"
          placeholder="Enter your password"
          name="password"
          value={contrasena}
          onChange={(event) => {
              setContrasena(event.target.value);
              setContrasenaError("");
          }}
          />
          {contrasenaError && <p className="text-red-500">{contrasenaError}</p>}

          <div className="text-center p-4">
            <a
              className="btn bg-customGold text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
              onClick={login}
            >
              LOGIN
            </a>
            <p className="mt-4">
              <a href="/signup" className="text-blue-500">
                I don't have an account
              </a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
