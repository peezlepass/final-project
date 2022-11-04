import React from "react";
import { useSelector } from "react-redux";
import styles from "./cabinet.module.css";

const activeBtn = {
  background: "black",
  color: "white",
};

export const Cabinet = () => {
  const user = useSelector((state) => state.user.user);
  const [select, setSelect] = React.useState({
    1: true,
    2: false,
    3: false,
  });
  const selectBtn = (num) => {
    setSelect({ [num]: true });
  };
  return (
    <>
      <div className={styles.layout}>
        <div className={styles.cabinet}>
          <div className={styles.cabinetHeader}>
            <div className={styles.userName}>
              {user.name}
              <div className={styles.userControls}>
                <div
                  onClick={() => selectBtn(1)}
                  style={select["1"] ? activeBtn : null}
                >
                  Профиль
                </div>
                <div
                  onClick={() => selectBtn(2)}
                  style={select["2"] ? activeBtn : null}
                >
                  Достижения
                </div>
                <div
                  onClick={() => selectBtn(3)}
                  style={select["3"] ? activeBtn : null}
                >
                  Таблица рекордов
                </div>
              </div>
            </div>
          </div>
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
        </div>
      </div>
    </>
  );
};
