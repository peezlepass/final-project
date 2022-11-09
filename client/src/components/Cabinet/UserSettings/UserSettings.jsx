import React from "react";
import { useDispatch } from "react-redux";
import styles from "./UserSettings.module.css";
import * as action from "../../../redux/reducers/userReducer/actions";

export const UserSettings = () => {
  const dispatch = useDispatch();
  const saveChanges = (e) => {
    dispatch(action.updateInfo(e));
  };
  return (
    <>
      <div className={styles.userSettings}>
        <form onSubmit={saveChanges}>
          <div className={styles.gender}>
            <label htmlFor="name">Пол: </label>
            <select name="userGender" id="name">
              <option value="Мужской">Мужской</option>
              <option value="Женский">Женский</option>
            </select>
          </div>
          <div className={styles.country}>
            <label htmlFor="country">Откуда вы: </label>
            <input type="text" name="userCountry" id="country" />
          </div>
          <div className={styles.birthday}>
            <label>Когда вы родились:</label>
            <div className={styles.days}>
              <select name="day">
                <option disabled value="День" selected>
                  День
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <select name="month">
                <option disabled value="Месяц" selected>
                  Месяц
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
              <select name="year">
                <option disabled value="Год" selected>
                  Год
                </option>
                <option value="11991">1991</option>
                <option value="1992">1992</option>
                <option value="1993">1993</option>
                <option value="1994">1994</option>
                <option value="1995">1995</option>
              </select>
            </div>
          </div>
          <div className={styles.controls}>
            <button className={styles.btn}>Сохранить</button>
          </div>
        </form>
      </div>
    </>
  );
};
