// This component renders a table row for a flight with various flight details.
// The flight object is passed as a prop and its properties are used to display the flight details.
// The flight details include flight number, airline, origin, destination, departure time, and status.
// The flight number is displayed as a link to the flight details page.
// The FlightRow component is used in the FlightTable component to display a list of flights.
// The FlightRow component is exported as the default export of the module.

import React from 'react';
import { Link } from 'react-router-dom';
import { TableRow, TableCell } from '@mui/material';
import { Link as MuiLink } from '@mui/material';
import styles from '../FlightTable.css';
import { format } from 'date-fns';

/**
 * Renders a row for a flight with various flight details.
 *
 * @param {Object} flight - The flight object containing flight details.
 * @return {JSX.Element} A table row element representing the flight details.
 */

const FlightRow = ({ flight }) => {
  const formattedDepartureTime = format(new Date(flight.departureTime), 'Pp');
  return (
    <TableRow>
      <TableCell>
        {/* Displays the flight number as a link to the flight details page */}
        <MuiLink component={Link} to={`/flights/${flight.id}`} className={styles.link}>
          {flight.flightNumber}
        </MuiLink>
      </TableCell>
      <TableCell>{flight.airline}</TableCell>
      <TableCell>{flight.origin}</TableCell>
      <TableCell>{flight.destination}</TableCell>
      <TableCell>{formattedDepartureTime}</TableCell>
      <TableCell>{flight.status}</TableCell>
    </TableRow>
  );
};

export default FlightRow;

