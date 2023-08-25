import banner from "./Banner.png";
import styles from "./Banner.module.css";

export default function Banner() {
  return (
    <img src={banner} className={styles.banner} alt="Banner Gourmet Express"/>
  )
}
