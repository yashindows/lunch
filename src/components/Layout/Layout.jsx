import React, { useState } from "react";
import headerStyles from "./header.module.css";
import asideStyles from "./aside.module.css";
import { Link } from "react-router-dom";

function Layout() {
  const [active, setActive] = useState(false);
  return (
    <>
      <header className={headerStyles.header}>
        <Link to="/" className={headerStyles.headerLogo}>
          <img src="/src/assets/logo.svg" alt="Логотип" />
        </Link>
        <div className={headerStyles.searchbar}>
          <input type="text" placeholder="Найти рецпет..." />
          <button className={headerStyles.searchBtn}>
            <img src="/src/assets/icons/search-icon.svg" alt="Искать" />
          </button>
        </div>
        <Link to={"/add"} className={`${headerStyles.addRecipe} btn`}>
          <img src="/src/assets/icons/plus.svg" alt="Добавить рецпет" />
        </Link>
        <div
          className={headerStyles.menuIcon}
          onClick={() => {
            if (active) {
              setActive(false);
              document.body.style.overflow = "";
            } else {
              setActive(true);
              document.body.style.overflow = "hidden";
            }
          }}
        >
          <span
            style={
              active
                ? { transform: "rotate(-45deg)", top: "calc(50% - 2.5px)" }
                : {}
            }
          ></span>
          <span style={active ? { scale: 0 } : {}}></span>
          <span
            style={
              active
                ? { transform: "rotate(45deg)", bottom: "calc(50% - 2.5px)" }
                : {}
            }
          ></span>
        </div>
      </header>
      <aside className={asideStyles.sidebar}>
        <div
          className={asideStyles.sidebarWrapper}
          style={active ? { left: 0 } : { left: "-150%" }}
        >
          <ul className={asideStyles.sidebarBody}>
            <h2 className={asideStyles.sidebar__title}>Категории</h2>
            <li className={asideStyles.sidebar__item}>
              <Link
                to="/soups"
                className={`${asideStyles.sidebar__link} link_close`}
              >
                Супы
              </Link>
            </li>
            <li className={asideStyles.sidebar__item}>
              <Link
                to="/salads"
                className={`${asideStyles.sidebar__link} link_close`}
              >
                Салаты
              </Link>
            </li>
            <li className={asideStyles.sidebar__item}>
              <Link
                to="/main-course"
                className={`${asideStyles.sidebar__link} link_close`}
              >
                Вторые блюда
              </Link>
            </li>
            <li className={asideStyles.sidebar__item}>
              <Link
                to="/drinks"
                className={`${asideStyles.sidebar__link} link_close`}
              >
                Напитки
              </Link>
            </li>
          </ul>
          <div className={asideStyles.links}>
            <Link
              to="/my-recipes"
              className={`btn ${asideStyles.myRecipes} link_close`}
            >
              Мои рецпеты
            </Link>
            <Link
              to="/add"
              className={`btn ${asideStyles.myRecipes} add-recipe_mobile link_close`}
            >
              Добавить рецпет
            </Link>
            <Link
              to="/recipe-search"
              className={`btn ${asideStyles.myRecipes} add-recipe_mobile link_close`}
            >
              Поиск рецепта
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Layout;
