import React, { Fragment } from "react";
import { Subnav} from './Subnav';

import './SideNavigation.scss';


export default function SideNavigation({ className, componentCategories, components }) {

  return (
    <nav className={`${className || ""} secondary-nav`}>
      {
        componentCategories.map(({ component_category_id, name, description, icon }) => {
          const categoryComponents = components.filter((item) => {
            return item.component_category_id === component_category_id;
          });
          console.log(categoryComponents);
          return (
            <div key={component_category_id} className="secondary-nav__item">
              <a href="#" className="secondary-nav__link">
                {React.createElement(require('react-icons/io')[icon], { className: "secondary-nav__icon" })}
                <span className="secondary-nav__text">{name}</span>
              </a>
              {
                categoryComponents.length > 0 &&
                categoryComponents.map(({ component_id, name, description }) => {
                  console.log(name);
                  return (
                    <Subnav key={component_id} name={name} />
                  );
                })
              }
            </div>
          );
        })
      }

    </nav>
  );
}