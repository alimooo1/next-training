import React, { useState, useEffect } from "react";
import User from "../User/User";
import styles from "./singleUser.module.scss";
import { useRouter } from "next/router";

export default function SingleUser() {
  const [user, setUser] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const router = useRouter();
  console.log(router);

  async function getData() {
    const { userID } = router.query;
    console.log(userID);
    const data = await fetch(`https://reqres.in/api/users/${userID}`);
    const result = await data.json();
    const user = result.data;
    return user;
  }

  const result = async () => {
    const user = await getData();
    setUser(user);
    setIsLoaded(true);
  };

  useEffect(() => {
    if (router.isReady) {
      result();
    }
  }, [router.isReady]);

  return (
    <div className={styles.singleUser}>
      {isLoaded ? (
        <User
          firstName={user.first_name}
          lastName={user.last_name}
          email={user.email}
          avatar={user.avatar}
        />
      ) : (
        <div className="loading">is loading...</div>
      )}
    </div>
  );
}
