"use client";

import { useEffect, useRef } from "react";

interface GoogleMapProps {
  lat: number;
  lng: number;
  zoom?: number;
  title?: string;
  address?: string;
}

export function GoogleMap({ lat, lng, zoom = 15, title = "Our Location", address }: GoogleMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<any>(null);

  useEffect(() => {
    if (mapContainer.current && !map.current) {
      // Using Google Maps Embed API
      const mapEmbed = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBu-_-Nn5vQSKwCX9_8R-AECP0sIsqKVlw&q=${lat},${lng}&zoom=${zoom}`;
      
      mapContainer.current.innerHTML = `
        <iframe 
          width="100%" 
          height="400" 
          frameborder="0" 
          src="${mapEmbed}"
          allowfullscreen="" 
          aria-hidden="false" 
          tabindex="0"
          style="border: 0; border-radius: 12px;"
        ></iframe>
      `;
    }
  }, [lat, lng, zoom]);

  return (
    <div className="space-y-4">
      <div className="rounded-lg overflow-hidden shadow-md">
        <div ref={mapContainer} />
      </div>
    </div>
  );
}
