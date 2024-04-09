import React, { useEffect, useState } from "react";
import axios from "axios";

function Tabla_Habitaciones() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    getRooms();
  }, []);

  const getRooms = () => {
    axios.get("https://backend-hotel-dyeg.onrender.com/getRooms")
      .then((response) => {
        setRooms(response.data);
      })
      .catch((error) => {
        console.error("Error en la solicitud Axios:", error.message);
      });
  };

  return (
    <div className="overflow-x-auto min-h-screen w-full">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>ID</th>
            <th>Estado</th>
            <th>Tipo de Habitacion</th>
          </tr>
        </thead>
        <tbody>
          {/* Mapear las habitaciones */}
          {rooms.map((room) => (
            <tr>
              <th></th>
              <td>{room.id_habitacion}</td>
              <td>{room.estado}</td>
              <td>{room.tipo_de_habitacion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tabla_Habitaciones;