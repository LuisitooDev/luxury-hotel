import React, { useEffect, useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import { parseISO } from "date-fns";

function Tabla_Reservaciones() {
  const [reservations, setReservations] = useState([]);
  const [fecha_llegada, setFecha_llegada] = useState("");
  const [fecha_salida, setFecha_salida] = useState("");
  const [total_pago, setTotal_pago] = useState("");
  const [token, setToken] = useState(0);
  const [cliente, setCliente] = useState(0);
  const [habitacion, setHabitacion] = useState("");

  const [id_reservation, setId] = useState("");
  const [editar, setEditar] = useState(false);

  useEffect(() => {
    getReservations();
  }, []);

  const getReservations = () => {
    axios
      .get("http://localhost:3001/getReservations")
      .then((response) => {
        setReservations(response.data);
      })
      .catch((error) => {
        console.log("Error: No se pueden obtener las reservaciones", error);
      });
  };

  const add = () => {
    axios
      .post("http://localhost:3001/createReservation", {
        fecha_llegada: fecha_llegada,
        fecha_salida: fecha_salida,
        total_pago: total_pago,
        id_habitacion: habitacion,
      })
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error al insertar en la base de datos:", error);
      });
  };

  const update = () => {
    axios
      .put(`http://localhost:3001/updateReservation`, {
        id_reservacion: id_reservation,
        fecha_llegada: fecha_llegada,
        fecha_salida: fecha_salida,
        total_pago: total_pago,
        id_usuario: cliente,
        id_habitacion: habitacion,
      })
      .then(() => {
        alert("Reservacion actualizado con éxito");
        setEditar(false);
        getReservations();
      })
      .catch((error) => {
        console.error("Error al actualizar reservacion:", error);
      });
  };

  const deleteReservation = (idReservacion) => {
    axios
      .delete(`http://localhost:3001/deleteReservation/${idReservacion}`)
      .then(() => {
        console.log("Reservacion eliminada con éxito");
        getReservations();
      })
      .catch((error) => {
        console.error("Error al eliminar reservacion:", error);
      });
  };

  const limpiarCampos = () => {
    setFecha_llegada("");
    setFecha_salida("");
    setTotal_pago("");
    setHabitacion("");
    setEditar(false);
  };

  const editarReservation = (reservation) => {
    setId(reservation.id_reservacion);
    setFecha_llegada(parseISO(reservation.fecha_llegada));
    setFecha_salida(parseISO(reservation.fecha_salida));
    setTotal_pago(reservation.total_pago);
    setHabitacion(reservation.id_habitacion);
    setCliente(reservation.id_usuario);
    setEditar(true);
  };

  const handleArrivalDateChange = (date) => {
    setFecha_llegada(date);
  };

  const handleDepartureDateChange = (date) => {
    setFecha_salida(date);
  };

  return (
    <>
      <div className="overflow-x-auto min-h-screen w-full">
        <table className="table  bg-white text-black table-hover w-full">
          {/* head */}
          <thead className="text-black">
            <tr>
              <th>ID Reservación</th>
              <th>Fecha de Llegada</th>
              <th>Fecha de Salida</th>
              <th>Total de Pago</th>
              <th>Cliente</th>
              <th>Habitación</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {/* Mapear las reservaciones */}
            {reservations.map((reservation) => (
              <tr className="table-dark" key={reservation.id_reservacion}>
                <th scope="row">{reservation.id_reservacion}</th>
                <td>{reservation.fecha_llegada}</td>
                <td>{reservation.fecha_salida}</td>
                <td>${reservation.total_pago}</td>
                <td>{reservation.id_usuario}</td>
                <td>{reservation.id_habitacion}</td>
                <td>
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button
                      type="button"
                      onClick={() => {
                        document.getElementById("edit_modal").showModal();
                        editarReservation(reservation);
                      }}
                      className="btn btn-warning"
                    >
                      Editar
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        deleteReservation(reservation.id_reservacion)
                      }
                      className="btn btn-danger"
                    >
                      Eliminar
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <dialog id="edit_modal" className="modal">
        <div className="modal-box w-11/12 max-w-5xl p-4">
          <h3 className="font-bold text-lg mb-4">Edit your reservation</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              onChange={(event) => setHabitacion(event.target.value)}
              value={habitacion}
              placeholder="Set Habitation"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              onChange={(event) => setTotal_pago(event.target.value)}
                    value={total_pago}
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
          </div>
          <div className="modal-action">
          <button className="btn" onClick={() => update(id_reservation)}>Edit</button>
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default Tabla_Reservaciones;
