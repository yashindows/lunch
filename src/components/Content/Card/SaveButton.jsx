import React, { useState } from "react";
import styles from "./card.module.css";

function SaveButton() {
  const [saved, setSaved] = useState(false);
  return (
    <button
      onClick={() => {
        if (saved == false) {
          setSaved(true);
        } else {
          setSaved(false);
        }
      }}
      className={styles.recipeSave}
    >
      <svg
        viewBox="0 0 24 24"
        fill={saved ? "#f03b3bff" : "none"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <g id="Interface / Heart_01">
            <path
              id="Vector"
              d="M12 7.69431C10 2.99988 3 3.49988 3 9.49991C3 15.4999 12 20.5001 12 20.5001C12 20.5001 21 15.4999 21 9.49991C21 3.49988 14 2.99988 12 7.69431Z"
              stroke={saved ? "f03b3bff" : "#000000"}
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </g>
        </g>
      </svg>
    </button>
  );
}

export default SaveButton;
