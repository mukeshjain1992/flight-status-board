// FlightTable.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FlightRow from './FlightRow';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import styles from '../FlightTable.css';

/**
 * Fetches flight data periodically and displays it in a table with detailed flight information.
 *
 * @description This component fetches the flight data from the provided API endpoint
 *              and displays it in a table format. The data is fetched every 5 seconds
 *              and the component is automatically updated with the new data.
 *
 * @return {JSX.Element} The FlightTable component containing flight details in a table format.
 */
const FlightTable = () => {
  const [flights, setFlights] = useState([]); // Stores the list of flights
  const [error, setError] = useState(null); // Stores any error message that occurs during data fetching

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        // Fetch the flight data from the API endpoint
        const response = await axios.get('https://flight-status-mock.core.travelopia.cloud/flights');
        // Update the state with the new data
        setFlights(response.data);
      } catch (error) {
        // Set the error message if any error occurs during data fetching
        setError('Error fetching flight data');
      }
    };

    // Fetch the data initially
    fetchFlights();
    // Set an interval to fetch the data every 5 seconds
    const interval = setInterval(fetchFlights, 5000);
    // Clear the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);

  // If there is any error, display the error message
  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  // Render the table with the flight details
  return (
    <TableContainer component={Paper} className={styles.tableContainer}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Flight Number</TableCell>
            <TableCell>Airline</TableCell>
            <TableCell>Origin</TableCell>
            <TableCell>Destination</TableCell>
            <TableCell>Departure Time</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {flights.map((flight) => (
            <FlightRow key={flight.id} flight={flight} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default FlightTable;

