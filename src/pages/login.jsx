import React, { useState } from "react";
import axios from "axios";

function Login() {
    const [email, setEmail] = useState("");
    const [contrasena, setContrasena] = useState("");

    const login = () => {
        axios.post('http://localhost:3001/login', {
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
        <div className="flex items-center justify-between p-4">
    <img src={("logo.png")} alt="Logo" />
  </div>
  <div className="container mx-auto">
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="text-2xl font-bold mb-4">LOGIN</div>
        <form>
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

          <div className="text-center">
            <a
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
              onClick={login}
            >
              LOGIN
            </a>
            <p className="mt-4">
              <a href="/sign-up" className="text-blue-500">
                I don't have an account
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
    </>
  );
}

export default Login;