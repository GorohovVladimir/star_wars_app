import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setFilmsAction,
  setPeopleAction,
  setSpeciesAction,
  setStarshipsAction,
  setVehiclesAction,
} from "./redux/actionType";

import {
  getFilmsSelector,
  getPeopleSelector,
  getSpeciesSelector,
  getStarshipsSelector,
  getVehiclesSelector,
} from "./redux/selectors";

import styles from "./style.module.css";

function Statistic() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/films/`)
      .then((response) => response.json())
      .then((data) => dispatch(setFilmsAction(data.results)));
  }, [dispatch]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/people/`)
      .then((response) => response.json())
      .then((data) => dispatch(setPeopleAction(data.results)));
  }, [dispatch]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/species/`)
      .then((response) => response.json())
      .then((data) => dispatch(setSpeciesAction(data.results)));
  }, [dispatch]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/starships/`)
      .then((response) => response.json())
      .then((data) => dispatch(setStarshipsAction(data.results)));
  }, [dispatch]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/vehicles/`)
      .then((response) => response.json())
      .then((data) => dispatch(setVehiclesAction(data.results)));
  }, [dispatch]);

  const listFilms = useSelector(getFilmsSelector);
  const listPeople = useSelector(getPeopleSelector);
  const listSpecies = useSelector(getSpeciesSelector);
  const listStarships = useSelector(getStarshipsSelector);
  const listVehicles = useSelector(getVehiclesSelector);

  return (
    <div className={styles.statistics}>
      <div className={styles.block}>
        <h3>Films:</h3>
        {listFilms.map((item: any) => (
          <ul key={item.episode_id}>
            <li>{item.title}</li>
          </ul>
        ))}
      </div>
      <div className={styles.block}>
        <h3>People:</h3>
        {listPeople.map((item: any) => (
          <ul key={item.height}>
            <li>{item.name}</li>
          </ul>
        ))}
      </div>
      <div className={styles.block}>
        <h3>Species:</h3>
        {listSpecies.map((item: any) => (
          <ul className={styles.post} key={item.name}>
            <li>{item.name}</li>
          </ul>
        ))}
      </div>
      <div className={styles.block}>
        <h3>Starships:</h3>
        {listStarships.map((item: any) => (
          <ul className={styles.post} key={item.name}>
            <li>{item.name}</li>
          </ul>
        ))}
      </div>
      <div className={styles.block}>
        <h3>Vehicles:</h3>
        {listVehicles.map((item: any) => (
          <ul className={styles.post} key={item.name}>
            <li>{item.name}</li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default Statistic;
