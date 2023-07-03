"use client";

import Head from "next/head";
import React, { useState, useEffect } from "react";
import User from "../User/User";
import styles from "./singleUser.module.scss";
import UserInterface from "../../../interfaces/User"

export default function SingleUser({ fetchedData } : { fetchedData: UserInterface}) {
  const [user, setUser] = useState<UserInterface>({} as UserInterface);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setUser(fetchedData);
    setIsLoaded(true);
  }, []);

  return (
    <div className={styles.singleUser}>
      <Head>
        <title>
          {user.first_name} {user.last_name}
        </title>
      </Head>
      {isLoaded ? (
        <User
          firstName={user.first_name}
          lastName={user.last_name}
          email={user.email}
          avatar={user.avatar}
          clickHandler={null}
          single
        />
      ) : (
        <div className={styles.loading}>is loading...</div>
      )}
    </div>
  );
}
