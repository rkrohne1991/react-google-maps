import React, { useRef, useEffect, ReactElement } from "react";

import Map from "../Map/Map";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

import styles from "./MapLayout.module.scss";

const calcMedian = (arr: []) => {
  const mid = Math.floor(arr.length / 2),
    nums = [...arr].sort((a, b) => a - b);
  return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
};

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

// export interface Object {
//   id: string;
//   location: {
//     latitude: number;
//     longitude: number;
//   };
// }

// export interface APIdata {
//   name: string;
//   packages: Object[];
// }

// type APIdataProps = {
//   objects: APIdata;
// };
// To Do: Declare interface in another file
// To Do: finish types

const MapLayout = (props: any) => {
  let defaultLat: number = 52;
  let defaultLong: number = 20;
  const zoom = 10;

  if (props.objects !== undefined) {
    const latitudes = props.objects.map((element: any) => {
      return element.location.latitude;
    });

    const longitudes = props.objects.map((element: any) => {
      return element.location.longitude;
    });

    defaultLat = calcMedian(latitudes);
    defaultLong = calcMedian(longitudes);
  }

  const center = { lat: defaultLat, lng: defaultLong };

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
