import React, { useState } from "react";
import styles from "./card.module.css";
import { Link } from "react-router-dom";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import db from "../../../firestore";

function Card(props) {
  const [hover, setHover] = useState(false);
  const docRef = doc(db, "recipes", props.id);

  return (
    <div
      className={styles.recipeCard}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <Link to={`/recipes/${props.url}`} className={styles.recipeForward} />
      <button
        onClick={() => {
          updateDoc(docRef, { saved: !props.saved });
        }}
        className={styles.recipeSave}
      >
        <svg
          viewBox="0 0 24 24"
          fill={props.saved ? "#ff5454ff" : "none"}
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
                stroke={props.saved ? "#ff5454ff" : "#000"}
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </g>
          </g>
        </svg>
      </button>
      <img className={styles.recipeImage} src={props.image} />
      {hover && <div className={styles.recipeTitleWrapper}>{props.title}</div>}
    </div>
  );
}

export default Card;
