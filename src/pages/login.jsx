import React, { useState } from "react";
import axios from "axios";

function Login() {
    const [email, setEmail] = useState("");
    const [contrasena, setContrasena] = useState("");

    const login = () => {
        axios.post('https://backend-hotel-production-c6a5.up.railway.app/login', {
          email: email,
          contrasena: contrasena
        })
          .then((response) => {
            // Manejar la respuesta del servidor en caso de éxito
            localStorage.setItem('token', response.data.token); // Almacena el token en localStorage
            alert('Inicio de sesión exitoso:', response.data);
            window.location.href = "/";
            // Aquí puedes redirigir al usuario o realizar otras acciones necesarias.
          })
          .catch((error) => {
            // Manejar errores en caso de fallo en el inicio de sesión
            console.error('Error de inicio de sesión:', error);
          });
      }
      
  return (
    <>
 <div className="flex flex-col items-center justify-center bg-customBlue text-white">
    <img src={("logo.png")} alt="Logo" />
    <div className="text-7xl p-4">LOGIN</div>
  </div>
  
  <div className="container mx-auto mt-20 px-4 sm:px-6 lg:px-8">
        
        <form className="max-w-md mx-auto">
          <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1 block">
            Email:
          </label>
          <input
            type="email"
            className="border w-full p-2 mb-4"
            id="email"
            placeholder="Enter your email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

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
            onChange={(event) => setContrasena(event.target.value)}
          />

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