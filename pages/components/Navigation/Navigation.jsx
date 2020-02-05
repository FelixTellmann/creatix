import React from "react";
import './Navigation.scss';


const exampleNavigation = [
  {
    navigation_id: 1,
    name: "About",
    href: "/about",
  },
  {
    navigation_id: 2,
    name: "Philosophy",
    href: "/philosophy",
  },
  {
    navigation_id: 3,
    name: "Components",
    href: "/components",
  },
  {
    navigation_id: 4,
    name: "Design",
    href: "/design",
  },
  {
    navigation_id: 5,
    name: "Contact",
    href: "/contact",
  },
];


export default function Navigation({ className, nav = exampleNavigation }) {
  return (
    <nav className={`${className || ""} nav`}>
      {
        nav.map(({ navigation_id, name, href }) => {
          return (
            <a key={navigation_id} className="nav__link" href={href}><span className="nav__text">{name}</span></a>
          );
        })
      }
    </nav>
  );
}