import { Link } from "react-router-dom";
import styles from "./Switches.module.css";

function Switches({ id, name, type, pitch, force }) {
  return (
    <div className={styles.items}>
      {/* 이미지 눌렀을 때 link연결하도록 변경 */}
      <Link
        to={`/info/${id}`} // 현재 api로 받은 데이터를 /Info로 넘김
      >
        <div className={styles.image}>
          <img
            className={styles.image}
            src={`${process.env.PUBLIC_URL}/data/${name}.jfif`}
            alt={name}
          />
        </div>
      </Link>
      <div className={styles.info}>{name}</div>
      <div className={styles.info}>{type}</div>
      <div className={styles.info}>{pitch}피치</div>
      <div className={styles.info}>{force}g</div>
    </div>
  );
}

export default Switches;
