import React from "react";
import styles from "./User.module.scss";

export default function User({
  firstName,
  lastName,
  email,
  avatar,
  clickHandler,
  single,
}) {
  return (
    <div className={`${styles.Card} ${single ? styles.single : ""}`}>
      <img src={avatar} alt="" />
      <div className={styles.firstName}>
        <span>FirstName: </span>
        {firstName}
      </div>
      <div className={styles.lastName}>
        <span>LastName: </span>
        {lastName}
      </div>
      <div className={styles.EmailAddress}>
        <span className={styles.email}>Email: </span>
        {email}
      </div>
      <button onClick={clickHandler}>Visit Compelete Profile</button>
    </div>
  );
}
