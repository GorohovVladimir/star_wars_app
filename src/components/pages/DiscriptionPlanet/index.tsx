import { useSelector} from "react-redux";
import { names } from "../../../lib/onClickPlanet/OnClickPlanets";
import { getPostsSelector } from "../../PostsList/redux/selectors";

import styles from "./style.module.css";

function Discrption() {
  const posts = useSelector(getPostsSelector);

  const planetDiscription = posts.filter((data: any) => data.name === names);

  const planetEntries = planetDiscription.map((data: any) =>
    Object.entries(data)
  );

  return (
    <main className={styles.discription}>
      {planetEntries.map((data: any) =>
        data.map((key: any) => (
          <ul key={data.diameter}>
            <li className={styles.key}>
              {key[0]}: {key[1]}
            </li>
          </ul>
        ))
      )}
    </main>
  );
}

export default Discrption;
