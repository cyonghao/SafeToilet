// TODO: ADD PWA SUPPORT
// TODO: FIGURE OUT CUSTOM OFFLINE PAGE PWA

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";
import { Card } from "./components/card";
import { fetchToilets } from "./api/fetchToilets";

const App = () => {
  const [locations, setLocations] = useState([]);

  const getPosition = async (position) => {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;

    const data = await fetchToilets(lat, long);
    setLocations(data);
  };

  const getLocationError = (error) => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.");
        break;
    }
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getPosition, getLocationError);
    } else {
      console.log("Geolocation not supported by browser");
    }
  };

  const HaveLocations = () => {
    return (
      <div className="mt-3">
        {locations.map((location) => (
          <Card key={location.id} location={location} />
        ))}
        <p className="text-muted">
          Data from{" "}
          <a className="text-reset" href="https://www.refugerestrooms.org/">
            Refuge Restrooms
          </a>
        </p>
      </div>
    );
  };

  return (
    <React.Fragment>
      <div className="d-flex align-items-center min-vh-100 py-5">
        <div className="container text-center">
          <h1 className="display-4">A Safe Toilet</h1>
          <p>
            <i>
              Find the nearest restroom for transgender, intersex and gender
              nonconforming individuals
            </i>
          </p>
          <button onClick={getLocation} className="btn btn-light">
            Send location
          </button>
          {locations.length !== 0 && <HaveLocations />}
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
