import { useState, useEffect } from "react";
import Home from "./pages/home";
import Rooms from "./pages/room";
import Reservation from "./pages/reservation";
import Login from "./pages/login";
import Contacts from "./pages/contacts";
import Dashboard from "./pages/admin/dashboard";
import SignUp from "./pages/signup";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Facilities from "./pages/facilities";

const stripePromise = loadStripe(
  "pk_test_51O2gfuJw0dovYyK3ViteKYgwaQz7Fh3fDPUDkqFrzI7zoIQ5c6EcT43rAjU37s4QvJaQJqGqE2uvllPbPS0SoWDI00NywlwgMx"
);

function App() {
  const [isStripeLoaded, setStripeLoaded] = useState(false);

  useEffect(() => {
    stripePromise.then(() => setStripeLoaded(true));
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route
          path="/reservation-details/:id"
          element={
            <div>
              {isStripeLoaded && (
                <Elements stripe={stripePromise}>
                  <Reservation />
                </Elements>
              )}
            </div>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/facilities" element={< Facilities />} />

      </Routes>
    </Router>
  );
}

export default App;