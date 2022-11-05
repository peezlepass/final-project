import React from "react";
import styles from "./OneAchiv.module.css";

export const OneAchiv = ({ achiveIcon, i }) => {
  console.log(achiveIcon);
  return (
    <>
      <div className={styles.achive}>
        <div className={styles.layoutImg}>
          <div
            style={{ backgroundImage: `url(${achiveIcon[i].img})` }}
            className={styles.achiveImg}
          ></div>
        </div>
        <div className={styles.achiveInfo}>
          <div className={styles.achiveInfoTitle}>Название ачивки</div>
          <div className={styles.achiveInfoDesc}>
            Описание что нужно сделать для ачивки
          </div>
          <div className={styles.achiveInfoScore}>100 GP</div>
        </div>
      </div>
    </>
  );
};
