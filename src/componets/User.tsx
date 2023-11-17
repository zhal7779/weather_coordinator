import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
const User = () => {
  const [data, setData] = useState<any>();

  const getRead = async () => {
    const querySnapshot = await getDocs(collection(db, "admin"));

    querySnapshot.forEach((doc) => {
      setData(doc.data());
    });
  };

  useEffect(() => {
    getRead();
  }, []);

  return (
    <section>
      <h1>User</h1>
      <h2>자크의 조언</h2>
      {data?.textarea}
      <h2>자크의 오늘의 옷</h2>
      {data?.imageURL && (
        <img
          src={data.imageURL}
          alt="자크의 오늘의 옷"
          style={{ maxWidth: "100%" }}
        />
      )}
      {data?.img}
    </section>
  );
};

export default User;
