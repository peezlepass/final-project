import React from "react";
import styles from "./UserAchivment.module.css";

export const UserAchivment = () => {
  return (
    <>
      <div className={styles.userAchivment}>
        <div className={styles.achive}>
          <div className={styles.achiveImg}></div>
          <div className={styles.achiveInfo}>
            <div className={styles.achiveInfoTitle}></div>
            <div className={styles.achiveInfoDesc}></div>
            <div className={styles.achiveInfoScore}></div>
          </div>
        </div>
      </div>
    </>
  );
};
