import React, { useState, useCallback } from 'react';
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';
import { MapPin, Navigation, CheckCircle2, Compass } from 'lucide-react';

const MAP_CONTAINER_STYLE = {
  width: '100%',
  height: '240px',
  borderRadius: '0.75rem'
};

const DEFAULT_CENTER = {
  lat: 21.1458,
  lng: 79.0882
};

export default function LocationPicker({ onSelect }) {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '';

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey
  });

  const [coords, setCoords] = useState(DEFAULT_CENTER);
  const [detecting, setDetecting] = useState(false);
  const [address, setAddress] = useState('Laxmi Nagar, Ward 12, Nagpur');

  const handleMapClick = useCallback((e) => {
    if (e.latLng) {
      const newLat = e.latLng.lat();
      const newLng = e.latLng.lng();
      const newCoords = { lat: newLat, lng: newLng };
      setCoords(newCoords);
      const addrStr = `Pinned: ${newLat.toFixed(4)}° N, ${newLng.toFixed(4)}° E (Ward 12)`;
      setAddress(addrStr);
      onSelect?.(addrStr);
    }
  }, [onSelect]);

  const handleMarkerDragEnd = useCallback((e) => {
    if (e.latLng) {
      const newLat = e.latLng.lat();
      const newLng = e.latLng.lng();
      const newCoords = { lat: newLat, lng: newLng };
      setCoords(newCoords);
      const addrStr = `Pinned: ${newLat.toFixed(4)}° N, ${newLng.toFixed(4)}° E`;
      setAddress(addrStr);
      onSelect?.(addrStr);
    }
  }, [onSelect]);

  const handleDetectGPS = () => {
    setDetecting(true);
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (p) => {
          const l = { lat: p.coords.latitude, lng: p.coords.longitude };
          setCoords(l);
          const addrStr = `GPS Detected: ${l.lat.toFixed(4)}° N, ${l.lng.toFixed(4)}° E`;
          setAddress(addrStr);
          onSelect?.(addrStr);
          setDetecting(false);
        },
        () => {
          setCoords(DEFAULT_CENTER);
          const addrStr = 'Ward 12 Center, Laxmi Nagar';
          setAddress(addrStr);
          onSelect?.(addrStr);
          setDetecting(false);
        }
      );
    } else {
      setCoords(DEFAULT_CENTER);
      onSelect?.('Ward 12 Center, Laxmi Nagar');
      setDetecting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl p-5 border border-emerald-100 space-y-3 shadow-xs">
      <div className="flex justify-between items-center pb-2 border-b border-emerald-100">
        <div className="space-y-0.5">
          <span className="text-xs font-bold text-emerald-950 flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-emerald-600" />
            <span>Google Maps Location Pinpoint</span>
          </span>
          <p className="text-[11px] text-emerald-800">
            Click anywhere on the map or drag the marker to pin exact grievance coordinates.
          </p>
        </div>

        <button
          type="button"
          onClick={handleDetectGPS}
          className="btn-emerald text-xs py-1.5 px-3"
        >
          <Navigation className={`w-3.5 h-3.5 ${detecting ? 'animate-spin' : ''}`} />
          <span>{detecting ? 'GPS Sync...' : 'Auto GPS'}</span>
        </button>
      </div>

      {/* Google Map View or Smart Preview Container */}
      <div className="relative rounded-xl overflow-hidden border border-emerald-200 bg-emerald-50/30">
        {apiKey && isLoaded ? (
          <GoogleMap
            mapContainerStyle={MAP_CONTAINER_STYLE}
            center={coords}
            zoom={15}
            onClick={handleMapClick}
            options={{
              disableDefaultUI: false,
              zoomControl: true,
              streetViewControl: false,
              mapTypeControl: false
            }}
          >
            <MarkerF
              position={coords}
              draggable={true}
              onDragEnd={handleMarkerDragEnd}
              title="Grievance Location Pin"
            />
          </GoogleMap>
        ) : (
          /* Interactive Fallback Map Embed when VITE_GOOGLE_MAPS_API_KEY is pending */
          <div className="relative h-60 w-full overflow-hidden">
            <iframe
              title="Google Maps Location Pin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src={`https://maps.google.com/maps?q=${coords.lat},${coords.lng}&z=15&output=embed`}
            />
            <div className="absolute top-2 left-2 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-semibold text-emerald-800 border border-emerald-200 shadow-xs flex items-center gap-1">
              <Compass className="w-3 h-3 text-emerald-600" />
              <span>Interactive Google Map Layer</span>
            </div>
          </div>
        )}
      </div>

      {/* Selected Coordinates & Address Badge */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pt-1">
        <div className="flex items-center gap-1.5 text-xs text-emerald-900">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span className="font-medium text-[11px] truncate max-w-xs">{address}</span>
        </div>

        <span className="text-[11px] font-mono font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200 shrink-0">
          📍 {coords.lat.toFixed(4)}° N, {coords.lng.toFixed(4)}° E
        </span>
      </div>
    </div>
  );
}
