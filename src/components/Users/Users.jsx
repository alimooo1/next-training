import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import User from "./User/User";
import styles from "./Users.module.scss";
import Head from "next/head";

export default function Users({ fetchedData }) {
  const [users, setUsers] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const router = useRouter();

  const clickHandler = (ID) => {
    router.push(`/${ID}`);
  };

  function getData(data) {
    let users = data.map((item) => {
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
    return users;
  }

  useEffect(() => {
    setUsers(getData(fetchedData));
    setIsLoaded(true);
  }, []);

  return (
    <div className={styles.Users}>
      <Head>
        <title>Users List</title>
      </Head>
      {isLoaded ? users : <div className={styles.loading}>is loading...</div>}
    </div>
  );
}
