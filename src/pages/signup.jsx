import React, { useState } from "react";
import axios from "axios";

function SignUp() {
  const [email, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido_p, setApellido_p] = useState("");
  const [apellido_m, setApellido_m] = useState("");
    
  const add = () => {
    axios.post("https://backend-hotel-dyeg.onrender.com/createUser", {
      email: email,
      contrasena: contrasena,
      nombre: nombre,
      apellido_p: apellido_p,
      apellido_m: apellido_m
    }).then(() => {
      alert(`El empleado ${nombre} fue registrado con éxito.`);
      window.location.href = "/login";
    }).catch((error) => {
      alert("Error" + (error));
    });
  };
      
  return (
    <>
    <div className="flex flex-col items-center justify-center bg-customBlue text-white">
    <img src={("logo.png")} alt="Logo" />
    <div className="text-7xl p-4">SIGN UP</div>
    </div>
  
    <div className="container mx-auto mt-8 px-4 sm:px-6 lg:px-8">
        
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

          <label htmlFor="nombre" className="text-sm font-medium text-gray-700 mb-1 block">
            Nombre:
          </label>
          <input
            type="text"
            className="border w-full p-2 mb-4"
            id="nombre"
            placeholder="Enter your name"
            name="nombre"
            value={nombre}
            onChange={(event) => setNombre(event.target.value)}
          />

          <label htmlFor="apellidoPaterno" className="text-sm font-medium text-gray-700 mb-1 block">
            Apellido Paterno:
          </label>
          <input
            type="text"
            className="border w-full p-2 mb-4"
            id="apellidoPaterno"
            placeholder="Enter your paternal last name"
            name="apellidoPaterno"
            value={apellido_p}
            onChange={(event) => setApellido_p(event.target.value)}
          />

          <label htmlFor="apellidoMaterno" className="text-sm font-medium text-gray-700 mb-1 block">
            Apellido Materno:
          </label>
          <input
            type="text"
            className="border w-full p-2 mb-4"
            id="apellidoMaterno"
            placeholder="Enter your maternal last name"
            name="apellidoMaterno"
            value={apellido_m}
            onChange={(event) => setApellido_m(event.target.value)}
          />

          <div className="text-center">
            <button
              className="btn bg-customGold text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
              onClick={add}
            >
              SIGN UP
            </button>
            <p className="mt-4">
              <a href="/login" className="text-blue-500">
                I already have an account
              </a>
            </p>
          </div>
        </form>
      </div>
      
      </>
  );
}


export default SignUp;