import { useState, useEffect } from "react";
import axios from "axios";

function Navbar() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [usuario, setUsuario] = useState(null);
  const [nombreUsuario, setNombreUsuario] = useState(null);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    window.location.href = "/login";
  };

  const getUsuario = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }
    axios
      .get("https://backend-hotel-production-c6a5.up.railway.app/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUsuario(response.data);
        console.log(response.data);
        const nombre_actual = response.data[0].nombre;
        setNombreUsuario(nombre_actual);
        const nombreCapitalizado =
        nombre_actual.charAt(0).toUpperCase() + nombre_actual.slice(1);
        setNombreUsuario(nombreCapitalizado);
      })
      .catch((error) => {
        console.log("Error: No se puede obtener el usuario", error);
      });
  };

  useEffect(() => {
    getUsuario();
  }, []);

  return (
    <div className="navbar bg-base-200 bg-opacity-0 top-0 absolute w-full z-50">
      <div className="navbar-start">
        {!token ? (
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            >
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
                <a className="text-lg text-white" href="/">
                  Home
                </a>
              </li>
              <li>
                <a className="text-lg text-white" href="/facilities">
                  Facilities
                </a>
              </li>
              <li>
                <a className="text-lg text-white" href="/rooms">
                  Rooms
                </a>
              </li>
              <li>
                <a className="text-lg text-white" href="/contacts">
                  Contact Us
                </a>
              </li>
              <li>
                <a className="text-lg text-white font-bold" href="/login">
                  Login
                </a>
              </li>
              <li>
                <a
                  className="text-lg text-white font-bold ml-2"
                  href="/signup"
                >
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
        ) : (
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            >
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
                <a className="text-lg text-white" href="/">
                  Home
                </a>
              </li>
              <li>
                <a className="text-lg text-white" href="/facilities">
                  Facilities
                </a>
              </li>
              <li>
                <a className="text-lg text-white" href="/rooms">
                  Rooms
                </a>
              </li>
              <li>
                <a className="text-lg text-white" href="/contacts">
                  Contact Us
                </a>
              </li>
              <li>
                <button
                  className="text-lg text-white bg-red-500 rounded-md px-2 py-1"
                  onClick={handleLogout}
                >
                  Log out
                </button>
              </li>
            </ul>
          </div>
        )}

        <img className="h-50 w-auto ml-2 lg:ml-0" src="/logo.png" alt="Logo" />
      </div>
      <div className="navbar-end hidden lg:flex">
        {!token ? (
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="text-lg text-white font-bold" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="text-lg text-white font-bold" href="/facilities">
                Facilities
              </a>
            </li>
            <li>
              <a className="text-lg text-white font-bold" href="/rooms">
                Rooms
              </a>
            </li>
            <li>
              <a className="text-lg text-white font-bold" href="/contacts">
                Contact Us
              </a>
            </li>
            <li>
              <a className="text-lg text-white font-bold" href="/login">
                Login
              </a>
            </li>
            <li>
              <a className="text-lg text-white font-bold ml-2" href="/signup">
                Sign Up
              </a>
            </li>
          </ul>
        ) : (
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="text-lg text-white font-bold" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="text-lg text-white font-bold" href="/facilities">
                Facilities
              </a>
            </li>
            <li>
              <a className="text-lg text-white font-bold" href="/rooms">
                Rooms
              </a>
            </li>
            <li>
              <a className="text-lg text-white font-bold" href="/contacts">
                Contact Us
              </a>
            </li>

            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost rounded-btn text-lg text-white font-bold"
              >
                Welcome, {nombreUsuario}
              </div>
              <ul
                tabIndex={0}
                className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box "
              >
                <li>
                  {" "}
                  <button
                    className="text-lg font-bold rounded-md  py-1"
                    onClick={handleLogout}
                  >
                    Log out
                  </button>
                </li>
              </ul>
            </div>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Navbar;
