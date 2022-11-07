import React from "react";
import { OneAchiv } from "./OneAchiv/OneAchiv";
import { Spinner } from "../../Spinner/Spinner";
import styles from "./UserAchivment.module.css";
import * as action from "../../../redux/reducers/achivReducer/action";
import { useDispatch, useSelector } from "react-redux";

export const UserAchivment = () => {
  const achivState = useSelector((state) => state.achiv);
  const sorted = [...achivState].sort((a, b) => a.id - b.id);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(action.getAchiv());
  }, [dispatch]);
  const testUnlock = (id) => {
    dispatch(action.changeStatus(id));
  };
  return (
    <>
      <button onClick={() => testUnlock(prompt())} className={styles.btn}>
        test unlock
      </button>
      {sorted.length > 0 ? (
        <div className={styles.userAchivment}>
          {sorted.map((el, i) => (
            <OneAchiv key={i} el={el} />
          ))}
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};
