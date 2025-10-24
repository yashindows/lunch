import React from "react";
import styles from "./card.module.css";

function Card(props) {
  return (
    <div className={styles.recipeCardWrapper}>
      <div className={styles.recipeCard}>
        <a data-item="link" href="/" className={styles.recipeForward}></a>
        <button data-action="save" className={styles.recipeSave}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g id="Interface / Heart_01">
                {" "}
                <path
                  id="Vector"
                  d="M12 7.69431C10 2.99988 3 3.49988 3 9.49991C3 15.4999 12 20.5001 12 20.5001C12 20.5001 21 15.4999 21 9.49991C21 3.49988 14 2.99988 12 7.69431Z"
                  stroke="#000000"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>{" "}
            </g>
          </svg>
        </button>
        <img className={styles.recipeImg} />
        <div className={styles.recipe__title}>{props.title}</div>
      </div>
    </div>
  );
}

export default Card;
