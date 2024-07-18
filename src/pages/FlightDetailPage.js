import React from 'react';
import FlightDetail from '../components/FlightDetail';

/**
 * FlightDetailPage Component
 *
 * This component is responsible for rendering the Flight Detail Page.
 * It displays the flight details provided by the FlightDetail component.
 *
 * @return {JSX.Element} Returns the JSX for the Flight Detail Page.
 */
const FlightDetailPage = () => {
  return (
    // Container for the Flight Detail Page
    <div>
      {/* Heading for the Flight Detail Page */}
      <h1>Flight Detail</h1>
      {/* Render the FlightDetail component to display flight details */}
      <FlightDetail />
    </div>
  );
};

export default FlightDetailPage;

