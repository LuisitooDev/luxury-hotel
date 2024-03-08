import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import DatePicker from "react-datepicker";
import { differenceInDays } from "date-fns"; // Importa la función differenceInDays
import "react-datepicker/dist/react-datepicker.css";

function Reservation() {
  const [arrivalDate, setArrivalDate] = useState(null);
  const [departureDate, setDepartureDate] = useState(null);
  const [numberOfNights, setNumberOfNights] = useState(null); // Estado para almacenar el número de noches
  const [isPaymentProcessing, setIsPaymentProcessing] = useState(false);

  // CONSTANTES PARA LOS FETCH
  const [habitaciones, setHabitaciones] = useState("");
  const [usuario, setUsuario] = useState(null);
  const [fecha_llegada, setFecha_llegada] = useState("");
  const [fecha_salida, setFecha_salida] = useState("");
  const [total_pago, setTotalPago] = useState(0);
  const [id_usuario, setIdUsuario] = useState(0);
  const [id_habitacion, setIdHabitacion] = useState(0);
  const { id } = useParams();
  const [habitacion, setHabitacion] = useState(null);
  const [pago, setPago] = useState("");

  const getHabitaciones = () => {
    axios
      .get(`http://localhost:3001/getRoomById/${id}`)
      .then((response) => {
        setHabitacion(response.data);
      })
      .catch((error) => {
        console.log("Error: No se pueden obtener las habitaciones", error);
      });
  };

  const getUsuario = () => {
    const token = localStorage.getItem("token"); // Obtener el token de localStorage
    axios
      .get("http://localhost:3001/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUsuario(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log("Error: No se puede obtener el usuario", error);
      });
  };

  const postPago = () => {
    console.log("Entro a postPago");
    axios
      .post("http://localhost:3001/create-checkout-session", {
        total_pago: total_pago,
        fecha_llegada: fecha_llegada,
        fecha_salida: fecha_salida,
        id_usuario: id_usuario,
        id_habitacion: id_habitacion,
      })
      .then((response) => {
        setPago(response.data);
        console.log(response.data);
        window.location.href = response.data.url;
      })
      .catch((error) => {
        console.log("Error: No se pudo concretar el pago", error);
      });
  };

  useEffect(() => {
    getUsuario();
    getHabitaciones();
  }, []);

  const handleArrivalDateChange = (date) => {
    setArrivalDate(date);
    calculateNumberOfNights(date, departureDate);
  };

  const handleDepartureDateChange = (date) => {
    setDepartureDate(date);
    calculateNumberOfNights(arrivalDate, date);
  };

  const calculateNumberOfNights = (arrival, departure) => {
    if (arrival && departure) {
      const nights = differenceInDays(departure, arrival);
      setNumberOfNights(nights);
      calculateTotalPayment();
    }
  };

  const calculateTotalPayment = () => {
    try {
      if (habitacion && numberOfNights) {
        const totalPago = habitacion.precio * numberOfNights;
        const idUsuario =
          usuario && usuario[0]
            ? usuario[0].id_usuario
            : "Nombre no disponible";
        const llegada = arrivalDate;
        const salida = departureDate;
        const habitacionId = habitacion.id_habitacion;

        setIdHabitacion(habitacionId);
        setFecha_salida(salida);
        setFecha_llegada(llegada);
        setIdUsuario(idUsuario);
        setTotalPago(totalPago);
        // Elimina el llamado a postPago de aquí
      }
    } catch (error) {
      console.error("Error in calculateTotalPayment:", error);
    }
  };

  useEffect(() => {
    if (total_pago > 0) {
      postPago();
    }
  }, [total_pago]);

  return (
    <>
      <div className="container mx-auto mt-8 p-4 bg-white shadow-md rounded-md">
        {habitacion ? (
          <div className="flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-xl font-semibold mb-4">
                Room: {habitacion.tipo_de_habitacion}
              </p>
              <p className="text-base mb-4">
                User Name:{" "}
                {usuario && usuario[0]
                  ? usuario[0].nombre
                  : "Nombre no disponible"}
              </p>
              <p className="text-base mb-4">
                Price: ${habitacion.precio} per night
              </p>
              <div className="mb-4">
                <p className="text-base">Arrival Date:</p>
                <DatePicker
                  className="border p-2"
                  selected={arrivalDate}
                  onChange={handleArrivalDateChange}
                />
              </div>
              <div className="mb-4">
                <p className="text-base">Departure Date:</p>
                <DatePicker
                  className="border p-2"
                  selected={departureDate}
                  onChange={handleDepartureDateChange}
                />
              </div>
              <p className="text-base mb-4">
                Number of Nights: {numberOfNights}
              </p>
              <p className="text-base mb-4">
                Total payment: ${(habitacion.precio * numberOfNights) / 100}
              </p>
              <button
                type="button"
                className="bg-customGold text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
                onClick={calculateTotalPayment}
              >
                Reserve Now
              </button>
            </div>
          </div>
        ) : (
          <p className="text-lg text-gray-700">Cargando habitación...</p>
        )}
      </div>
    </>
  );
}

export default Reservation;
