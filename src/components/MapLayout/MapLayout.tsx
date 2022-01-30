import React, { useRef, useEffect, ReactElement } from "react";

import { Wrapper, Status } from "@googlemaps/react-wrapper";

const render = (status: Status): ReactElement => {
  switch (status) {
    case Status.LOADING:
      return <h3>{status} ..</h3>;
    case Status.FAILURE:
      return <h3>{status} ..</h3>;
    case Status.SUCCESS:
      return <h3>{status} ..</h3>;
  }
};

const Map = ({
  center,
  zoom,
}: {
  center: google.maps.LatLngLiteral;
  zoom: number;
}) => {
  const ref = useRef<any>();

  useEffect(() => {
    new window.google.maps.Map(ref.current, {
      center,
      zoom,
    });
  });

  return <div ref={ref} id="map" />;
};

const MapLayout = () => {
  const center = { lat: -34.397, lng: 150.644 };
  const zoom = 4;

  return (
    <div>
      <h2>Map</h2>
      <Wrapper
        apiKey={"AIzaSyAwadTBu0eWy62P5paqTikU7SK6UNx-DYA"}
        render={render}
      >
        <Map center={center} zoom={zoom} />
      </Wrapper>
    </div>
  );
};

export default MapLayout;
