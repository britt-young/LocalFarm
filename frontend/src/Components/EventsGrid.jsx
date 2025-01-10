import React, { useState, useEffect } from "react";

const EventsGrid = () => {
  const [events, setEvents] = useState([]); // Initially empty array
  const [filteredEvents, setFilteredEvents] = useState([]); // Events to display
  const [selectedLocation, setSelectedLocation] = useState(""); // Selected location for filtering

  // Extract unique locations for the filter dropdown
  const [locations, setLocations] = useState([]);

  // Fetch event data on component mount
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("data/events.json"); // Path to your JSON file in public folder
        const data = await response.json();
        setEvents(data);
        setFilteredEvents(data);
        
        // Extract unique locations for the filter dropdown
        const uniqueLocations = [...new Set(data.map((event) => event.location))];
        setLocations(uniqueLocations);
      } catch (error) {
        console.error("Error fetching event data:", error);
      }
    };

    fetchEvents();
  }, []); // Empty array ensures this runs only once, on component mount

  // Handle location filter change
  const handleLocationChange = (event) => {
    const location = event.target.value;
    setSelectedLocation(location);

    // Filter events based on selected location
    if (location) {
      const filtered = events.filter((event) => event.location === location);
      setFilteredEvents(filtered);
    } else {
      // Reset to show all events if no location is selected
      setFilteredEvents(events);
    }
  };

  return (
    <div className="container mx-auto p-4 mb-10 mt-10">
      <h1 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl m-6 text-center">
        Upcoming Local Events
      </h1>

      {/* Location Filter Dropdown */}
      <div className="mb-6 flex justify-start items-center">
        <label htmlFor="location" className="mr-2 text-lg">Filter by Location</label>
        <select
          id="location"
          value={selectedLocation}
          onChange={handleLocationChange}
          className="border border-gray-300 p-2 rounded-lg"
        >
          <option value="">All locations</option>
          {locations.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
      </div>

      {/* Display Events */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredEvents.length === 0 ? (
          <p className="text-center text-xl">
            No events found for the selected location.
          </p>
        ) : (
          filteredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h2 className="text-2xl font-semibold mb-4">{event.title}</h2>

              {/* Event Image */}
              <img
                src={event.image || "/default-image.jpg"} // Fallback image
                alt={event.title}
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />

              <p className="text-md">
                <strong>Date:</strong> {new Date(event.date).toLocaleString()}
              </p>
              <p className="text-md mb-4">
                <strong>Location:</strong> {event.location}
              </p>
              <p className="text-base text-gray-700">{event.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default EventsGrid;

