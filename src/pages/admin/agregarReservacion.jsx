import React, { useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";

function Agregar_Reservacion() {
  const [fecha_llegada, setFecha_llegada] = useState();
  const [fecha_salida, setFecha_salida] = useState();
  const [total_pago, setTotal_pago] = useState("");
  const [habitacion, setHabitacion] = useState("");

  const add = () => {
    axios.post("http://localhost:3001/createReservation", {
      fecha_llegada: fecha_llegada,
      fecha_salida: fecha_salida,
      total_pago: total_pago,
      id_habitacion: habitacion,
    })
      .then(() => {
        window.location.reload();
        alert("tu reservacion fue creada con exito")
      })
      .catch((error) => {
        console.error("Error al insertar en la base de datos:", error);
      });
  };

  const handleArrivalDateChange = (date) => {
    setFecha_llegada(date);
  };

  const handleDepartureDateChange = (date) => {
    setFecha_salida(date);
  };

  return (
    <>
      <h3 className="font-bold text-lg mb-4"> your reservation</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          onChange={(event) => setHabitacion(event.target.value)}
          placeholder="Set Habitation"
          className="input input-bordered w-full"
        />
        <input
          type="text"
          onChange={(event) => setTotal_pago(event.target.value)}
          placeholder="Set Price"
          className="input input-bordered w-full"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label htmlFor="arrivalDate" className="mb-2">
            Arrival Date:
          </label>
          <DatePicker
            id="arrivalDate"
            selected={fecha_llegada}
            onChange={handleArrivalDateChange}
            className="w-full input input-bordered"
            calendarContainer={(props) => (
              <div
                {...props}
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  zIndex: 9999,
                }}
              />
            )}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="departureDate" className="mb-2">
            Departure Date:
          </label>
          <DatePicker
            id="departureDate"
            selected={fecha_salida}
            onChange={handleDepartureDateChange}
            className="w-full input input-bordered"
            calendarContainer={(props) => (
              <div
                {...props}
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  zIndex: 9999,
                }}
              />
            )}
          />
        </div>
        <button className="btn bg-customGold" onClick={add}>Agregar</button>
      </div>
    </>
  );
}

export default Agregar_Reservacion;