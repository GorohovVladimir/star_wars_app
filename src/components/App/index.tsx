import { BrowserRouter } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import Router from "../../system/Router";

import styles from "./style.module.css";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Header />
        <main className={styles.page}>
          <Router />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
