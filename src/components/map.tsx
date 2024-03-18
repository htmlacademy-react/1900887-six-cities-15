import { Marker, layerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { FC, useEffect, useRef } from 'react';
import { useMap } from '../app/hooks/useMap';
import { MapProps } from '../types/map';
import { currentCustomIcon, defaultCustomIcon } from '../const';

export const Map: FC<MapProps> = ({ city, offers, selectedOffer }) => {
  const mapRef = useRef(null);
  const map = useMap({ mapRef, city });

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon(
            selectedOffer !== undefined && offer.title === selectedOffer?.title
              ? currentCustomIcon
              : defaultCustomIcon
          ).addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, selectedOffer]);

  useEffect(() => {
    if (map) {
      map.panTo({ lat: city.location.latitude, lng: city.location.longitude });
      map.setZoom(city.location.zoom);
    }
  });

  return (
    <div className="cities__right-section">
      <section className="cities__map map" ref={mapRef}></section>
    </div>
  );
};
