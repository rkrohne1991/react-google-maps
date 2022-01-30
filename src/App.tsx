import React, { useState, useCallback, useEffect } from "react";

import MapLayout from "./components/Map/MapLayout/MapLayout";
import Modal from "./components/UI/Modal/Modal";

import classes from "./App.module.scss";

const App: React.FC = () => {
  const [objects, setObjects] = useState<[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const hideModalHandler = () => {
    setError(null);
  };

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://dev.vozilla.pl/api-client-portal/map?objectType=VEHICLEs"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      if (data.length === 0) {
        setError("Brak wyników ze serwera");
      } else {
        setObjects(data);
      }
    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  let content;

  if (error) {
    content = (
      <Modal>
        <React.Fragment>
          <div>
            Prawdopodobnie wystąpił błąd na serwerze, prosimy spróbować
            później...
          </div>
          {error && <div>Wiadomość ze serwera - {error}</div>}
          <div>Mapa będzie działać z ograniczoną funkcjonalnością</div>
          <div>
            <button onClick={hideModalHandler}>Close</button>
          </div>
        </React.Fragment>
      </Modal>
    );
  }

  if (isLoading) {
    content = (
      <Modal>
        <React.Fragment>
          <div>Prosimy o cierpliwość, trwa ładowanie...</div>
        </React.Fragment>
      </Modal>
    );
  }

  return (
    <div className={classes.mainApp}>
      <main>
        <h1>React Google Map</h1>
        <MapLayout />
      </main>
      {content}
    </div>
  );
};

export default App;
