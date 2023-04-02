import React, { useState, useEffect } from "react";
import User from "../User/User";
import styles from "./singleUser.module.scss";

export default function SingleUser({ fetchedData }) {
  const [user, setUser] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setUser(fetchedData);
    setIsLoaded(true);
  }, []);

  return (
    <div className={styles.singleUser}>
      {isLoaded ? (
        <User
          firstName={user.first_name}
          lastName={user.last_name}
          email={user.email}
          avatar={user.avatar}
          single
        />
      ) : (
        <div className={styles.loading}>is loading...</div>
      )}
    </div>
  );
}
