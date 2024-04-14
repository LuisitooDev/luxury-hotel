import React, { useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';

function SignUp() {
  const [email, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido_p, setApellido_p] = useState("");
  const [apellido_m, setApellido_m] = useState("");
  const [error, setError] = useState("");


  const add = () => {
    if (!email || !contrasena || !nombre || !apellido_p || !apellido_m) {
        setError("Todos los campos son requeridos");
        return;
    }
    //Validacion de correo
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        setError("Por favor ingresa un correo electrónico válido");
        return;
    }
    
    // Validacion de contraseña
    if (contrasena.length < 8 || contrasena === contrasena.toLowerCase()) {
      setError("La contraseña debe tener al menos 8 caracteres y contener al menos una mayúscula");
      return;
    }


    axios.get(`https://backend-hotel-production-c6a5.up.railway.app/checkEmail?email=${email}`)
        .then((response) => {
            if (response.data.exists) {
                Swal.fire({
                  icon: 'error',
                  title: 'Error',
                  text: `Este correo ya esta asociado con una cuenta.`,
                  timer: 3000,
                  timerProgressBar: true,
                  showConfirmButton: false
              });
            } else {
                axios.post("https://backend-hotel-production-c6a5.up.railway.app/createUser", {
                    email: email,
                    contrasena: contrasena,
                    nombre: nombre,
                    apellido_p: apellido_p,
                    apellido_m: apellido_m
                })
                    .then(() => {
                      Swal.fire({
                        icon: 'success',
                        title: '¡Bienvenido!',
                        text: `El usuario ${nombre} fue registrado con éxito.`,
                        timer: 4000,
                        timerProgressBar: true,
                        showConfirmButton: false
                    });
                        window.location.href = "/login";
                    })
                    .catch((error) => {
                      Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: `Hubo un error al registrar el usuario.`,
                        timer: 3000,
                        timerProgressBar: true,
                        showConfirmButton: false
                    });                    });
            }
        })
        .catch((error) => {
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: `Hubo un error al registrar el usuario.`,
              timer: 3000,
              timerProgressBar: true,
              showConfirmButton: false
          });                    });
};


  const handleInputChange = (event, setter) => {
    setter(event.target.value);
    setError("");
  };

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
                <a className="text-lg text-white" href="/login">Login</a>
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
                <a className="text-lg text-white font-bold" href="/login">Login</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center bg-customBlue text-white">
      <img src={("logo.png")} alt="Logo" />
        <div className="text-7xl p-4">SIGN UP</div>
      </div>

      <div className="container mx-auto mt-8 mb-9 px-4 sm:px-6 lg:px-8">
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
            onChange={(event) => handleInputChange(event, setEmail)}
          />

          <label htmlFor="password" className="text-sm font-medium text-gray-700 mb-1 block">
            Password:
            <span className="text-gray-500 ml-1">(Must be at least 8 characters and contain at least one uppercase letter)</span>
          </label>
          <input
            type="password"
            className="border w-full p-2 mb-4"
            id="password"
            placeholder="Enter your password"
            name="password"
            value={contrasena}
            onChange={(event) => handleInputChange(event, setContrasena)}
          />

          <label htmlFor="nombre" className="text-sm font-medium text-gray-700 mb-1 block">
            Name:
          </label>
          <input
            type="text"
            className="border w-full p-2 mb-4"
            id="nombre"
            placeholder="Enter your name"
            name="nombre"
            value={nombre}
            onChange={(event) => handleInputChange(event, setNombre)}
          />

          <label htmlFor="apellidoPaterno" className="text-sm font-medium text-gray-700 mb-1 block">
           Last name:
          </label>
          <input
            type="text"
            className="border w-full p-2 mb-4"
            id="apellidoPaterno"
            placeholder="Enter your paternal last name"
            name="apellidoPaterno"
            value={apellido_p}
            onChange={(event) => handleInputChange(event, setApellido_p)}
          />

          <label htmlFor="apellidoMaterno" className="text-sm font-medium text-gray-700 mb-1 block">
            Last name:
          </label>
          <input
            type="text"
            className="border w-full p-2 mb-4"
            id="apellidoMaterno"
            placeholder="Enter your maternal last name"
            name="apellidoMaterno"
            value={apellido_m}
            onChange={(event) => handleInputChange(event, setApellido_m)}
          />

          {error && <div className="text-red-500">{error}</div>}

          <div className="text-center">
          <button
            type="button"
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
