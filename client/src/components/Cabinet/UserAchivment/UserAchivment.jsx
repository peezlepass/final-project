import React from "react";
import { OneAchiv } from "./OneAchiv/OneAchiv";
import styles from "./UserAchivment.module.css";
import { Spinner } from "../../Spinner/Spinner";

export const UserAchivment = () => {
  const [state, setState] = React.useState([]);
  React.useEffect(() => {
    fetch("/cabinet")
      .then((res) => res.json())
      .then((json) => setState(json));
  }, []);
  return (
    <>
      {state.length > 0 ? (
        <div className={styles.userAchivment}>
          {state.map((el, i) => (
            <OneAchiv key={i} el={el} />
          ))}
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};
