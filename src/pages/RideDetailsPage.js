import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import AddVehicle from "../components/AddVehicle";
import VehicleCard from "../components/VehicleCard";

const API_URL = "http://localhost:5005";

function RideDetailsPage(props) {
const [ride, setRide] = useState(null);
const { rideId } = useParams();

const getRide = () => {
// Get the token from the localStorage
const storedToken = localStorage.getItem("authToken");

axios
  .get(`${API_URL}/api/rides/${rideId}`, {
    headers: { Authorization: `Bearer ${storedToken}` },
  })
  .then((response) => {
    const oneRide = response.data;
    setRide(oneRide);
  })
  .catch((error) => console.log(error));

};

useEffect(() => {
getRide();
}, []);

return (
<div className="RideDetails">
{ride && (
<>
<h1 className="">
<span>{ride.fromCity}</span> → <span>{ride.toCity}</span>
</h1>
<p>Interval of rides: {ride.intervalOfRides}</p>
<p>Seats available: {ride.seats}</p>
<p>Vehicle: {ride.vehicle}</p>
<p>Driver name: {ride.driver}</p>
<p>Probational Driver: {ride.probationalDriversLicense}</p>
{ride.vehicles.map((vehicle) => (
<VehicleCard key={vehicle._id} {...vehicle} />
))}
</>
)}

  <Link to="/rides">
    <button>Back to rides</button>
  </Link>

  <Link to={`/rides/edit/${rideId}`}>
    <button>Edit Ride</button>
  </Link>
</div>
    );
}

export default RideDetailsPage;
