import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setPostsAction } from "./redux/actionType";
import { PlanetInterface } from "./interfaces";
import { getPostsSelector } from "./redux/selectors";
import OnClickPlanet from "../../lib/onClickPlanet/OnClickPlanets";

import styles from "./style.module.css";

function PostsList() {
  const dispatch = useDispatch();

  const posts = useSelector(getPostsSelector);

  useEffect(() => {
    // myFetch('/planets').then((response) => response.json()).then((data) => dispatch(setPostsAction(data.results)) )
    fetch(`${process.env.REACT_APP_BASE_URL}/planets/`)
      .then((response) => response.json())
      .then((data) => dispatch(setPostsAction(data.results)));
  }, [dispatch]);

  return (
    <div className={styles.posts}>
      {posts.map((post: PlanetInterface) => (
        <ul key={post.diameter}>
          <li className={styles.post__item}>
            <Link
              className={styles.planet}
              onClick={OnClickPlanet}
              to="/discription"
            >
              {post.name}
            </Link>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default PostsList;
