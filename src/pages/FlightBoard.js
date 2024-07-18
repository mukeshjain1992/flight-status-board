import React from 'react';
import FlightTable from '../components/FlightTable';

/**
 * FlightBoard component:
 * This component renders the flight board, which is the main component of the application.
 * It displays the real-time flight status board.
 *
 * @return {JSX.Element} The rendered FlightBoard component.
 */
const FlightBoard = () => {
  return (
    // Render a div element as the root container
    <div>
      {/* Render a heading element with the text "Real-Time Flight Status Board" */}
      <h1>Real-Time Flight Status Board</h1>
      {/* Render a FlightTable component to display the flight status board */}
      <FlightTable />
    </div>
  );
};

export default FlightBoard;

