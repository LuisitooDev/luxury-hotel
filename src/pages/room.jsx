import React, { useState, useEffect } from "react";
import Hero from "../components/hero";
import axios from "axios";

function Rooms() {
  useEffect(() => {
    getHabitaciones();
  }, []);

  const [habitaciones, setHabitaciones] = useState("");

  const getHabitaciones = () => {
    axios
      .get("http://localhost:3001/getRooms")
      .then((response) => {
        setHabitaciones(response.data);
      })
      .catch((error) => {
        console.log("Error: No se pueden obtener las habitaciones", error);
      });
  };
  return (
    <>
<Hero backgroundUrl="rooms-bg.png" />
<div className="flex flex-wrap justify-center mb-4">
  {habitaciones.length > 0 ? (
    habitaciones.map((habitacion, index) => (
      <div key={index} className="card lg:w-96 md:w-full sm:w-full bg-base-100 shadow-xl mx-4 mt-8">
        <div className="md:w-96 sm:w-full bg-base-100 shadow-xl mx-auto mt-8">
          <figure>
            <img
              className="object-cover w-full h-40"
              src={habitacion.imagen}
              alt="room"
            />
          </figure>
          <div className="card-body p-4">
            <h2 className="card-title text-lg font-semibold">{habitacion.tipo_de_habitacion}</h2>
            <p className="text-sm mb-4">{habitacion.precio}</p>
            <div className="card-actions flex justify-end">
              <button className="btn bg-customGold" onClick={() => (window.location.href = `/reservation-details/${habitacion.id_habitacion}`)}>Book Now</button>
            </div>
          </div>
        </div>
      </div>
    ))
  ) : (
    <p>No hay habitaciones disponibles.</p>
  )}
</div>
    </>
  );
}

export default Rooms;
