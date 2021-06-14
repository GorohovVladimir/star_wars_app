import PostsList from "../../PostsList";

import styles from "./style.module.css";

function Planets() {
  return (
    <main className={styles.planets}>
      <h2>Choose a planet:</h2>
      <PostsList />
    </main>
  );
}

export default Planets;
