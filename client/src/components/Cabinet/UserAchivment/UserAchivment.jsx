import React from "react";
import { OneAchiv } from "./OneAchiv/OneAchiv";
import styles from "./UserAchivment.module.css";

const achiveIcon = [
  {
    img: "https://static.stratege.ru/trophies/NPWR11536_00/TROP000_w100h100.PNG",
  },
  {
    img: "https://static.stratege.ru/trophies/NPWR11536_00/TROP010_w100h100.PNG",
  },
  {
    img: "https://static.stratege.ru/trophies/NPWR11536_00/TROP038_w100h100.PNG",
  },
  {
    img: "https://static.stratege.ru/trophies/NPWR11536_00/TROP004_w100h100.PNG",
  },
  {
    img: "https://static.stratege.ru/trophies/NPWR11536_00/TROP015_w100h100.PNG",
  },
  {
    img: "https://static.stratege.ru/trophies/NPWR11536_00/TROP018_w100h100.PNG",
  },
  {
    img: "https://static.stratege.ru/trophies/NPWR11536_00/TROP023_w100h100.PNG",
  },
];
export const UserAchivment = () => {
  return (
    <>
      <div className={styles.userAchivment}>
        {achiveIcon.map((el, i) => (
          <OneAchiv key={i} achiveIcon={achiveIcon} i={i} />
        ))}
      </div>
    </>
  );
};
