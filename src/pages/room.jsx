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
      <div className="flex flex-wrap justify-center">
      {habitaciones.length > 0 ? (
        habitaciones.map((habitacion) => (
      
            <div className="card lg:w-96 md:w-full sm:w-full bg-base-100 shadow-xl mx-4 mt-8">
              <div className="card md:w-96 sm:w-full bg-base-100 shadow-xl mx-auto mt-8">
                <figure>
                  <img
                    className="object-cover w-full h-40"
                    src={`${habitacion.imagen}`}
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body p-4">
                  <h2 className="card-title text-lg font-semibold">Shoes!</h2>
                  <p className="text-sm mb-4">
                    If a dog chews shoes whose shoes does he choose?
                  </p>
                  <div className="card-actions flex justify-end">
                    <button className="btn btn-primary" onClick={() => (window.location.href = `/reservation-details/${habitacion.id_habitacion}`)}>Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
          
        ))
      ) : (
        <p>No hay datos disponibles</p>
      )}
      </div>
    </>
  );
}

export default Rooms;
