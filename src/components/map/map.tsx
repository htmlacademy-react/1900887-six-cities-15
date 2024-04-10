import { Marker, layerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { FC, useEffect, useRef } from 'react';
import { useMap } from '../../app/hooks/useMap';
import { MapProps } from '../../types/map';
import { currentCustomIcon, defaultCustomIcon } from '../../const';
import { roundNumber } from '../../utils';

export const Map: FC<MapProps> = ({ city, offers, selectedOffer, className }) => {
  const mapRef = useRef(null);
  const map = useMap({ mapRef, city });

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);

      offers.forEach((offer) => {
        const lat = roundNumber(offer.location.latitude);
        const lng = roundNumber(offer.location.longitude);

        const marker = new Marker({
          lat: lat,
          lng: lng
        });

        marker
          .setIcon((selectedOffer && offer.id === selectedOffer.id) ? currentCustomIcon : defaultCustomIcon)
          .addTo(markerLayer);
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
      <section className={`${className} map`} ref={mapRef}></section>
    </div>
  );
};
