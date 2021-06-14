import Nav from "./components/Nav";
import styles from "./style.module.css";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { useState } from "react";

interface PropsInterface {
  images: ReadonlyArray<string>;
}

function Slider(props: PropsInterface) {
  const { images } = props;

  const [index, setIndex] = useState(1);

  const image = images[index];

  const onClickRight = () => {
    if (index < images.length - 1) {
      setIndex(index + 1);
    } else setIndex(0);
  };

  const onClickLeft = () => {
    if (index === 0) {
      setIndex(images.length - 1);
    } else setIndex(index - 1);
  };

  return (
    <div className={styles.slider}>
      <FaAngleLeft onClick={onClickLeft} className={styles.slider__btnLeft} />
      <img className={styles.slider__img} src={image} alt="star_wars" />
      <FaAngleRight
        onClick={onClickRight}
        className={styles.slider__btnRight}
      />
      <Nav images={images} image={image} />
    </div>
  );
}

export default Slider;
