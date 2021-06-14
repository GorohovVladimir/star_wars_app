import Slider from "../../Slider";

import styles from "./style.module.css";

function Home() {
  return (
    <main className="home">
      <h2 className={styles.header}>Trainee task The star wars API</h2>
      <Slider images={["Star_wars.jpeg", "star_wars2.jpeg"]} />
    </main>
  );
}

export default Home;
