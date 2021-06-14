import styles from "./styles.module.css";

interface PropsInterface {
  images: ReadonlyArray<string>;
  image: string;
}

function Nav(props: PropsInterface) {
  const { images, image } = props;

  return (
    <ul className={styles.nav}>
      {images.map((img) => {
        const className =
          img === image
            ? `${styles.nav__item} ${styles.nav__active}`
            : styles.nav__item;
        return <li key={img} className={className} />;
      })}
    </ul>
  );
}

export default Nav;
