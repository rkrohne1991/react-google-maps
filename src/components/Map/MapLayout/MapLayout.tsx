import React, { useRef, useEffect, ReactElement } from "react";

import { Wrapper, Status } from "@googlemaps/react-wrapper";

import styles from "./MapLayout.module.scss";

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
  const center = { lat: 52.1935161702226, lng: 20.9304286193486 };
  const zoom = 10;

  return (
    <div className={styles["map-layout"]}>
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
