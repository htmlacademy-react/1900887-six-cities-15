import { useEffect, useRef, useState } from 'react';
import { TUseMap } from '../../types/map';
import { Map, TileLayer } from 'leaflet';
import { LEAFLET_MAP_LAYERS, MAP_ATTRIBUTION } from '../../const';

export const useMap = ({mapRef, city}: TUseMap) => {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instanse = new Map(mapRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude
        },
        zoom: city.location.zoom
      });

      const layer = new TileLayer(LEAFLET_MAP_LAYERS.voyager, {attribution: MAP_ATTRIBUTION});

      instanse.addLayer(layer);

      setMap(instanse);
      isRenderedRef.current = true;
    }
  }, [mapRef, city]);

  return map;
};
