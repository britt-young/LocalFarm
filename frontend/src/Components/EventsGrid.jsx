import { useEffect, useState, useMemo } from "react";

const EventsGrid = () => {
  const [events, setEvents] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");

  useEffect(() => {
    fetch("/data/events.json")
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((err) => {
        console.error("Failed to fetch events:", err);
        setEvents([]);
      });
  }, []);

  const locations = useMemo(() => {
    return [...new Set(events.map((event) => event.location).filter(Boolean))];
  }, [events]);

  const filteredEvents = useMemo(() => {
    if (!selectedLocation) return events;
    return events.filter((event) => event.location === selectedLocation);
  }, [selectedLocation, events]);

  return (
    <div className="container max-w-7xl mx-auto p-4 mb-10 mt-10 min-h-screen">
      {/* Filter by location */}
      <div className="mb-6 flex justify-start items-center">
        <label htmlFor="location" className="mr-2 text-lg">
          Filter by Location
        </label>
        <select
          id="location"
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
          className="cursor-pointer border border-gray-300 p-1 rounded-lg"
        >
          <option value="">See All</option>
          {locations.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
      </div>

      {/* Display Events */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-10 md:mx-5 lg:mx-0 gap-6">
        {filteredEvents.length === 0 ? (
          <p className="text-center text-xl">
            No events found for the selected location.
          </p>
        ) : (
          filteredEvents.map((event) => (
            <article
              key={event.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 transform"
            >
              <h3 className="mb-4 text-xl font-bold">{event.title}</h3>
              <img
                src={event.image || "/default-image.jpg"}
                alt={event.title}
                loading="lazy"
                className="w-full h-50 object-cover rounded-t-lg mb-4"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/default-image.jpg";
                }}
              />
              <p>
                <strong>Date:</strong>{" "}
                {event.date ? new Date(event.date).toLocaleString() : "TBD"}
              </p>
              <p className="mb-4">
                <strong>Location:</strong> {event.location || "TBA"}
              </p>
              <p className="text-gray-700">{event.description}</p>
            </article>
          ))
        )}
      </div>
    </div>
  );
};

export default EventsGrid;

