import React, { useState, useEffect } from "react";
// import { useParams } from 'react-router-dom'
import User from "../User/User";
import styles from "./singleUser.module.scss";
import { useRouter } from "next/router";

export default function SingleUser() {
  // const { userID } = useParams();
  const router = useRouter();
  const [user, setUser] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  async function getData() {
    const data = await fetch(`https://reqres.in/api/users/${router.query}`);
    const result = await data.json();
    const user = result.data;
    return user;
  }

  useEffect(() => {
    const result = async () => {
      const user = await getData();
      setUser(user);
      setIsLoaded(true);
    };
    result();
  }, []);

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
