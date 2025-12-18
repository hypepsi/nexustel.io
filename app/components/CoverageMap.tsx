"use client";

import { MapContainer, TileLayer, Circle, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";

export default function CoverageMap() {
  // Center on United States
  const center: LatLngExpression = [39.8283, -98.5795];
  const zoom = 4;

  // Coverage zones - 5G Ultra Wideband areas
  const coverageZones = [
    {
      name: "Denver, CO - 5G Ultra Wideband",
      position: [39.7392, -104.9903] as LatLngExpression,
      radius: 80000, // 80km radius
      color: "#2563eb", // Vibrant Blue
      fillOpacity: 0.25,
    },
    {
      name: "New York, NY - 5G Ultra Wideband",
      position: [40.7128, -74.0060] as LatLngExpression,
      radius: 100000,
      color: "#2563eb", // Vibrant Blue
      fillOpacity: 0.25,
    },
    {
      name: "Los Angeles, CA - 5G Ultra Wideband",
      position: [34.0522, -118.2437] as LatLngExpression,
      radius: 120000,
      color: "#2563eb", // Vibrant Blue
      fillOpacity: 0.25,
    },
    {
      name: "Chicago, IL - 5G Ultra Wideband",
      position: [41.8781, -87.6298] as LatLngExpression,
      radius: 90000,
      color: "#2563eb", // Vibrant Blue
      fillOpacity: 0.25,
    },
    {
      name: "Houston, TX - 5G Ultra Wideband",
      position: [29.7604, -95.3698] as LatLngExpression,
      radius: 85000,
      color: "#2563eb", // Vibrant Blue
      fillOpacity: 0.25,
    },
    {
      name: "Phoenix, AZ - 5G Ultra Wideband",
      position: [33.4484, -112.0740] as LatLngExpression,
      radius: 75000,
      color: "#2563eb", // Vibrant Blue
      fillOpacity: 0.25,
    },
    {
      name: "Miami, FL - 5G Ultra Wideband",
      position: [25.7617, -80.1918] as LatLngExpression,
      radius: 70000,
      color: "#2563eb", // Vibrant Blue
      fillOpacity: 0.25,
    },
    {
      name: "Seattle, WA - 5G Ultra Wideband",
      position: [47.6062, -122.3321] as LatLngExpression,
      radius: 75000,
      color: "#2563eb", // Vibrant Blue
      fillOpacity: 0.25,
    },
  ];

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      style={{ height: "100%", width: "100%" }}
      className="z-0"
      scrollWheelZoom={true}
      zoomControl={true}
    >
      {/* CartoDB Positron Light Tiles - Clean Professional Style */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />

      {/* 5G Coverage Zones - Interactive Circles */}
      {coverageZones.map((zone, index) => (
        <Circle
          key={index}
          center={zone.position}
          radius={zone.radius}
          pathOptions={{
            color: zone.color,
            fillColor: zone.color,
            fillOpacity: zone.fillOpacity,
            weight: 2,
          }}
        >
          <Popup>
            <div className="text-center">
              <h3 className="font-bold text-sm mb-1">{zone.name}</h3>
              <p className="text-xs text-gray-600">Ultra-fast 5G speeds available</p>
              <p className="text-xs text-green-600 font-semibold mt-1">✓ Active</p>
            </div>
          </Popup>
        </Circle>
      ))}
    </MapContainer>
  );
}

