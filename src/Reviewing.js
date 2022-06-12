import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

/* テストの復習用 */
export const Reviewing = ({}) => {
  const [user, setUser] = useState(null);

  const fetchJson = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users/1");
    return res.data;
  };

  useEffect(() => {
    try {
      const getUser = async () => {
        const userDate = await fetchJson();
        setUser(userDate);
      };
      getUser();
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <div>
      {user ? (
        <p>
          I am {user.username} : {user.email}
        </p>
      ) : (
        <p>ローディング中</p>
      )}
    </div>
  );
};
