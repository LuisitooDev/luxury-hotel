function Navbar() {
  return (
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="text-lg text-white" href="/">Home</a>
            </li>
            <li>
              <a className="text-lg text-white">Facilities</a>
            </li>
            <li>
              <a className="text-lg text-white" href="/rooms">Rooms</a>
            </li>
            <li>
              <a className="text-lg text-white">Contact Us</a>
            </li>
          </ul>
        </div>
        <img className="h-50 w-auto ml-2 lg:ml-0" src="/logo.png" alt="Logo" />
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className="text-lg text-white font-bold" href="/">Home</a>
          </li>
          <li>
            <a className="text-lg text-white font-bold">Facilities</a>
          </li>
          <li>
            <a className="text-lg text-white font-bold" href="/rooms">Rooms</a>
          </li>
          <li>
            <a className="text-lg text-white font-bold">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
