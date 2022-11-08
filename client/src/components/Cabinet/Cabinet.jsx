import React from "react";
import { useSelector } from "react-redux";
import styles from "./cabinet.module.css";
import { UserAchivment } from "./UserAchivment/UserAchivment";
import { UserInfo } from "./UserInfo/UserInfo";
import { UserRecords } from "./UserRecords/UserRecords";

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
              <p className={styles.name}>{user.name}</p>
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
          {select[1] ? <UserInfo user={user} /> : ""}
          {select[2] ? <UserAchivment /> : ""}
          {select[3] ? <UserRecords /> : ""}
        </div>
      </div>
    </>
  );
};
