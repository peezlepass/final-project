import React from "react";
import { OneAchiv } from "./OneAchiv/OneAchiv";
import { Spinner } from "../../Spinner/Spinner";
import styles from "./UserAchivment.module.css";
import * as action from "../../../redux/reducers/achivReducer/action";
import { useDispatch, useSelector } from "react-redux";

export const UserAchivment = () => {
  const achivState = useSelector((state) => state.achiv);
  console.log(achivState);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(action.getAchiv());
  }, []);
  return (
    <>
      {achivState.length > 0 ? (
        <div className={styles.userAchivment}>
          {achivState.map((el, i) => (
            <OneAchiv key={i} el={el} />
          ))}
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};
