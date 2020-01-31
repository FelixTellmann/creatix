import React from "react";
import './Search.scss';
import { MdSearch, MdCancel } from 'react-icons/md';


export default function Search({ className }) {
  return (
    <div className={`${className} search`}>
      <input className="search__input" type="text" placeholder="Search" required />
      <MdSearch className="search__search-icon" />
      <button className="search__cancel"><MdCancel className="search__cancel-icon" /></button>
      <button className="search__submit">Submit</button>
    </div>
  );
}