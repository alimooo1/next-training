import React, { useEffect, useState } from "react";
// import { useNavigate } from 'react-router-dom'
import User from "./User/User";
import styles from "./Users.module.scss";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  // const navigate = useNavigate();

  // const clickHandler = (ID) => {
  //   navigate(`/${ID}`)
  // }

  async function getData() {
    const data = await fetch("https://reqres.in/api/users");
    const result = await data.json();
    let users = result.data.map((item) => {
      return (
        <User
          firstName={item.first_name}
          lastName={item.last_name}
          email={item.email}
          avatar={item.avatar}
          key={item.id}
          clickHandler={() => clickHandler(item.id)}
        />
      );
    });
    return await users;
  }

  useEffect(() => {
    const result = async () => {
      setUsers(await getData());
      setIsLoaded(true);
    };
    result();
  }, []);

  return (
    <div className={styles.Users}>
      {isLoaded ? users : <div className={styles.loading}>is loading...</div>}
    </div>
  );
}
