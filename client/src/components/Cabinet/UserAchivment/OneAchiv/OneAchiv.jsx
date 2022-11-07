import React from "react";
import styles from "./OneAchiv.module.css";

export const OneAchiv = ({ el }) => {
  return (
    <>
      <div className={styles.achive}>
        <div className={styles.layoutImg}>
          <div
            style={{ backgroundImage: `url(${el.img})` }}
            className={styles.achiveImg}
          ></div>
        </div>
        <div className={styles.achiveInfo}>
          <div className={styles.achiveInfoTitle}>{el.title}</div>
          <div className={styles.achiveInfoDesc}>{el.desc}</div>
          <div className={styles.achiveInfoScore}>{el.cost} GP</div>
        </div>
      </div>
    </>
  );
};
