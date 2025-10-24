import React, { useState } from "react";
import headerStyles from "./header.module.css";
import asideStyles from "./aside.module.css";

function Layout() {
  const [active, setActive] = useState(false);
  return (
    <>
      <header className={headerStyles.header}>
        <a data-item="link" className={headerStyles.headerLogo} href="/">
          <img src="./src/assets/logo.svg" alt="Логотип" />
        </a>
        <div className={headerStyles.searchbar}>
          <input type="text" placeholder="Найти рецпет..." />
          <button className={headerStyles.searchBtn}>
            <img src="./src/assets/icons/search-icon.svg" alt="Искать" />
          </button>
        </div>
        <a
          data-item="link"
          href="/add"
          className={`${headerStyles.addRecipe} btn`}
        >
          <img src="./src/assets/icons/plus.svg" alt="Добавить рецпет" />
        </a>
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
              <a
                data-item="link"
                href="/soups"
                className={`${asideStyles.sidebar__link} link_close`}
              >
                Супы
              </a>
            </li>
            <li className={asideStyles.sidebar__item}>
              <a
                data-item="link"
                href="/salads"
                className={`${asideStyles.sidebar__link} link_close`}
              >
                Салаты
              </a>
            </li>
            <li className={asideStyles.sidebar__item}>
              <a
                data-item="link"
                href="/main-course"
                className={`${asideStyles.sidebar__link} link_close`}
              >
                Вторые блюда
              </a>
            </li>
            <li className={asideStyles.sidebar__item}>
              <a
                data-item="link"
                href="/drinks"
                className={`${asideStyles.sidebar__link} link_close`}
              >
                Напитки
              </a>
            </li>
          </ul>
          <div className={asideStyles.links}>
            <a
              data-item="link"
              href="/my-recipes"
              className={`btn ${asideStyles.myRecipes} link_close`}
            >
              Мои рецпеты
            </a>
            <a
              data-item="link"
              href="/add"
              className={`btn ${asideStyles.myRecipes} add-recipe_mobile link_close`}
            >
              Добавить рецпет
            </a>
            <a
              data-item="link"
              href="/my-recipes"
              className={`btn ${asideStyles.myRecipes} add-recipe_mobile link_close`}
            >
              Поиск рецепта
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Layout;
