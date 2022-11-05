import React from "react";
import styles from "./UserRecords.module.css";

const mock = [
  { id: 1, name: "Vadim", score: 120 },
  { id: 2, name: "Maxim", score: 220 },
  { id: 3, name: "Elena", score: 1000 },
  { id: 4, name: "Anton", score: 120 },
  { id: 5, name: "Polina", score: 980 },
  { id: 6, name: "Roman", score: 190 },
  { id: 7, name: "Sveta", score: 140 },
  { id: 8, name: "Kirill", score: 340 },
  { id: 9, name: "Maxim", score: 450 },
  { id: 10, name: "Olga", score: 720 },
];

export const UserRecords = () => {
  // тут надо будет вытянуть 10 юзеров и сделать sort, но не на селекторе а через спред
  const sortMock = [...mock].sort((a, b) => b.score - a.score);
  return (
    <>
      <div className={styles.userRecords}>
        <div className={styles.userRecordsTitle}>
          <div>№</div>
          <div>Имя</div>
          <div>Очки</div>
        </div>
        {sortMock.map((el, i) => (
          <div key={el.id} className={styles.userRecordsUserScore}>
            <div>{i + 1}</div>
            <div>{el.name}</div>
            <div>{el.score}</div>
          </div>
        ))}
      </div>
    </>
  );
};
