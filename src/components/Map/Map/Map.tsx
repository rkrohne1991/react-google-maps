import React, { useRef, useEffect, useState } from "react";

interface MapProps extends google.maps.MapOptions {
  //   style: { [key: string]: string };
  onClick?: (e: google.maps.MapMouseEvent) => void;
  onIdle?: (map: google.maps.Map) => void;
}

const Map: React.FC<MapProps> = ({ onClick, onIdle, children, ...options }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [map, setMap] = React.useState<google.maps.Map>();

  let center = options.center;
  const zoom = options.zoom;

  useEffect(() => {
    if (center && ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, { center, zoom }));
    }
  }, [center, ref, map]);

  return (
    <>
      <div ref={ref} id="map" />
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          // set the map prop on the child component
          return React.cloneElement(child, { map });
        }
      })}
    </>
  );
};

export default Map;
