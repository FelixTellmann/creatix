import React, { Fragment } from "react";
import './SideNavigation.scss';

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


export default function SideNavigation({ className, componentCategories = exampleNavigation }) {


  return (
    <nav className={`${className} secondary-nav`}>
      {
        componentCategories.map(({ component_category_id, name, description, icon }) => {
          return (
            <div key={component_category_id} className="secondary-nav__item">
              <a href="#" className="secondary-nav__link">
                {React.createElement(require('react-icons/io')[icon], { className: "secondary-nav__icon" })}
                <span className="secondary-nav__text">{name}</span>
              </a>
              <ul className="subnav">
                <li className="subnav__item">
                  <a href="#" className="subnav__link">
                    <span className="subnav__text">Frame</span>
                  </a>
                  <ul className="subnav__list">
                    <li className="subnav__list__item">
                      <a href="#" className="subnav__list__link">
                        <span className="subnav__list__text">Examples</span>
                      </a>
                    </li>
                    <li className="subnav__list__item">
                      <a href="#" className="subnav__list__link">
                        <span className="subnav__list__text">Bext Practices</span>
                      </a>
                    </li>
                    <li className="subnav__list__item">
                      <a href="#" className="subnav__list__link">
                        <span className="subnav__list__text">Content Guidelines</span>
                      </a>
                    </li>
                    <li className="subnav__list__item">
                      <a href="#" className="subnav__list__link">
                        <span className="subnav__list__text">Related Components</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          );
        })
      }

    </nav>
  );
}