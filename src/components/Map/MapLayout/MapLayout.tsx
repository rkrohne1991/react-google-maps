import { ReactElement, useEffect, useState } from "react";

import Map from "../Map/Map";
import Marker from "../Marker/Marker";
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
  // const [defaultLat, setDefaultLat] = useState<number>(52);
  // const [defaultLong, setDefaultLong] = useState<number>(20);
  const [defaultLat, setDefaultLat] = useState<number>(52.1935161702226);
  const [defaultLong, setDefaultLong] = useState<number>(20.9304286193486);
  const [defaultZoom, setDefaultZoom] = useState<number>(15);

  useEffect(() => {
    if (props.objects !== undefined) {
      if (props.objects !== undefined) {
        const latitudes = props.objects.map((element: any) => {
          return element.location.latitude;
        });
        const longitudes = props.objects.map((element: any) => {
          return element.location.longitude;
        });
        setDefaultLat(calcMedian(latitudes));
        setDefaultLong(calcMedian(longitudes));
        setDefaultZoom(10);
      }
    }
  }, [props.objects]);

  let center = { lat: defaultLat, lng: defaultLong };

  const position1 = {
    lat: 52.1935161702226,
    lng: 20.9304286193486,
  };

  const position2 = {
    lat: 52.193275,
    lng: 20.930372,
  };

  const position3 = {
    lat: 52.193891367697,
    lng: 20.930564789789,
  };

  return (
    <div className={styles["map-layout"]}>
      <Wrapper
        apiKey={"AIzaSyAwadTBu0eWy62P5paqTikU7SK6UNx-DYA"}
        render={render}
      >
        <Map
          center={{
            lat: defaultLat,
            lng: defaultLong,
          }}
          zoom={defaultZoom}
        >
          <Marker position={position1} />
          <Marker position={position2} />
          <Marker position={position3} />
        </Map>
      </Wrapper>
    </div>
  );
};

export default MapLayout;
