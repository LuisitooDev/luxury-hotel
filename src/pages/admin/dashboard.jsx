import React, { useState } from 'react';
import Tabla_Habitaciones from "./tablaHabitaciones";
import Tabla_Reservaciones from "./tablaReservaciones";
import Agregar_Reservacion from './agregarReservacion';

function Dashboard() {
  const [tablaActual, setTablaActual] = useState('habitaciones'); // Estado para gestionar la tabla actual

  const cambiarTabla = (nuevaTabla) => {
    setTablaActual(nuevaTabla);
  };

  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Menu</label>
          
          {/* Mostrar la tabla según el estado actual */}
          {tablaActual === 'habitaciones' && <Tabla_Habitaciones />}
          {tablaActual === 'reservaciones' && <Tabla_Reservaciones />}
          {tablaActual === 'agregar reservaciones' && <Agregar_Reservacion />}

        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          <img src="logo2.png" alt="Logo de la empresa" className="w-30" />
            {/* Sidebar content here */}
            <li>
              <a onClick={() => cambiarTabla('habitaciones')}>
                Tabla Habitaciones
              </a>
            </li>
            <li>
              <a onClick={() => cambiarTabla('reservaciones')}>
                Tabla Reservaciones
              </a>
            </li>
            <li>
              <a onClick={() => cambiarTabla('agregar reservaciones')}>
                Agregar Reservacion
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Dashboard;