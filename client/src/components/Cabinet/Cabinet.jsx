import React from "react";
import { useSelector } from "react-redux";
import styles from "./cabinet.module.css";

export const Cabinet = () => {
  const user = useSelector((state) => state.user.user);
  console.log(user);
  return (
    <>
      <div className={styles.layout}>
        <div className={styles.cabinet}>
          <div className={styles.cabinetHeader}>
            <div className={styles.userName}>
              {user.name}
              <div className={styles.userControls}>
                <div>Профиль</div>
                <div>Достижения</div>
                <div>Таблица рекордов</div>
              </div>
            </div>
          </div>
          <div className={styles.userInfo}></div>
        </div>
      </div>
    </>
  );
};
