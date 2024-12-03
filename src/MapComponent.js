import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { ref, onValue } from "firebase/database";
import { database } from "./firebase"; // Import the Firebase database instance

const MapComponent = () => {
  useEffect(() => {
    const map = L.map("map").setView([28.3949, 84.1240], 8);

    // Add OpenStreetMap layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Firebase reference to GPS data
    const gpsRef = ref(database, "GPS");

    // Listen for changes in the database
    onValue(gpsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // Add markers to the map
        Object.keys(data).forEach((key) => {
          const { f_latitude, f_longitude } = data[key];
          if (f_latitude && f_longitude) {
            L.marker([f_latitude, f_longitude]).addTo(map);
          }
        });
      }
    });
  }, []);

  return <div id="map" style={{ width: "100%", height: "100vh" }}></div>;
};

export default MapComponent;
