import React from "react";
import styles from "./UserInfo.module.css";

export const UserInfo = ({ user }) => {
  return (
    <>
      <div className={styles.userInfo}>
        <div className={styles.userAvatar}>
          <div className={styles.avatar}></div>
        </div>
        <div className={styles.userStat}>
          <div className={styles.userStatName}>
            <div>Имя</div>
            <div>{user.name}</div>
          </div>
          <div className={styles.userGender}>
            <div>Пол</div>
            <div>Мужской</div>
          </div>
          <div className={styles.userBirth}>
            <div>День рождения</div>
            <div>12.11.1991</div>
          </div>
          <div className={styles.userLocation}>
            <div>Местонахлждение</div>
            <div>Тайланд</div>
          </div>
          <div className={styles.userMeeting}>
            <div>Присоединился</div>
            <div>02.11.2022</div>
          </div>
        </div>
      </div>
    </>
  );
};
