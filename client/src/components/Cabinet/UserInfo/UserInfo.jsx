import React from "react";
import styles from "./UserInfo.module.css";

export const UserInfo = ({ user }) => {
  return (
    <>
      <div className={styles.userInfo}>
        <div className={styles.userAvatar}>
          <div className={styles.avatar}></div>
          <div class="flex justify-center">
            <div class="mb-3 w-96">
              <input class="form-control
    `           block
                px-2
                py-1
                text-sm
                font-normal
                text-gray-700
                bg-[#a8a29e] bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                mt-3
                ml-8
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="formFileSm" type="file" />
            </div>
          </div>
        </div>
        <div className={styles.userStat}>
          <div className={styles.userStatName}>
            <div>Имя: {user.name}</div>
            {/* <div>{user.name}</div> */}
          </div>
          <div className={styles.userBirth}>
            <div>День рождения: 12.11.1991</div>
            {/* <div>12.11.1991</div> */}
          </div>
          <div className={styles.userLocation}>
            <div>Страна: Тайланд</div>
            {/* <div>Тайланд</div> */}
          </div>
          <div className={styles.userMeeting}>
            <div>Дата регистрации: 3.11.2022</div>
            {/* <div>02.11.2022</div> */}
          </div>
        </div>
      </div>
    </>
  );
};
