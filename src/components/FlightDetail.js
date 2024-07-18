// This component fetches flight details from the flight-status-mock API based on the flight ID in the URL
// and displays the flight details in a user-friendly format.
//
// It uses the useParams hook from react-router-dom to extract the flight ID from the URL.
// It uses the useState hook to manage the state of flight details and error messages.
// It uses the useEffect hook to fetch the flight details when the component mounts and when the flight ID changes.
//
// The fetchFlight function makes an HTTP GET request to the flight-status-mock API endpoint with the flight ID.
// If the request is successful, it updates the flight state with the response data.
// If there is an error, it updates the error state with an error message.
//
// The component renders a loading message if the flight details are not yet available.
// It renders an error message if there is an error fetching the flight details.
// It renders the flight details if they are available.
//
// The flight details include flight number, airline, origin, destination, departure time, and status.
// The component displays these details in a formatted way.

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

/**
 * Renders the flight detail component.
 *
 * @return {JSX.Element} The flight detail component.
 */
const FlightDetail = () => {
  const { id } = useParams();
  const [flight, setFlight] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFlight = async () => {
      try {
        const response = await axios.get(`https://flight-status-mock.core.travelopia.cloud/flights/${id}`);
        setFlight(response.data);
      } catch (error) {
        setError('Error fetching flight details');
      }
    };

    fetchFlight();
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!flight) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Flight Details for {flight.flightNumber}</h2>
      <p>Airline: {flight.airline}</p>
      <p>Origin: {flight.origin}</p>
      <p>Destination: {flight.destination}</p>
      <p>Departure Time: {flight.departureTime}</p>
      <p>Status: {flight.status}</p>
      {/* Add more details as necessary */}
    </div>
  );
};

export default FlightDetail;

