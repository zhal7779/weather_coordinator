import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const First = () => {
  const navigate = useNavigate();

  return (
    <section>
      <h1 style={{ textAlign: "center" }}>자크의 날씨</h1>

      <article>
        <h2>자크이신가요?</h2>

        <ul>
          <li>
            <button onClick={() => navigate("/user")}>No</button>
          </li>
          <li>
            <button onClick={() => navigate("/admin")}>Yes</button>
          </li>
        </ul>
      </article>
    </section>
  );
};

export default First;
