import React from 'react';
import { MdSearch, MdCancel, MdWeb } from 'react-icons/md';

import Link from 'next/link';

export default () => (
  <page className="layout">
    <header className="layout__header">
      <div className="layout__logo">
        <img src="https://www.exchangegrill.co.za/wp-content/uploads/2018/11/Logo-no-Whitespace-dark.png" alt="Exchange" />
      </div>
      <nav className="layout__nav nav">
        <a className="nav__link" href="/about"><span className="nav__text">About</span></a>
        <a className="nav__link" href="/philosophy"><span className="nav__text">Philosophy</span></a>
        <a className="nav__link" href="/components"><span className="nav__text">Components</span></a>
        <a className="nav__link" href="/design"><span className="nav__text">Design</span></a>
        <a className="nav__link" href="/contact"><span className="nav__text">Contact</span></a>

      </nav>
      <div className="layout__search search">
        <input className="search__input" type="text" placeholder="Search" required />
        <MdSearch className="search__search-icon" />
        <button className="search__cancel"><MdCancel className="search__cancel-icon" /></button>
        <button className="search__submit">Submit</button>
      </div>
    </header>
    <aside className="layout__aside">
      <nav className="secondary-nav">
        <a href="#" className="secondary-nav__link">
          <MdWeb className="secondary-nav__icon" />
          <span className="secondary-nav__text">Structure</span>
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
          <li className="subnav__item">
            <a href="#" className="subnav__link">
              <span className="subnav__text">Page</span>
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
          <li className="subnav__item">
            <a href="#" className="subnav__link">
              <span className="subnav__text">Page Action</span>
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
          <li className="subnav__item">
            <a href="#" className="subnav__link">
              <span className="subnav__text">Layout</span>
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
          <li className="subnav__item">
            <a href="#" className="subnav__link">
              <span className="subnav__text">Empty State</span>
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
          <li className="subnav__item">
            <a href="#" className="subnav__link">
              <span className="subnav__text">Stack</span>
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
          <li className="subnav__item">
            <a href="#" className="subnav__link">
              <span className="subnav__text">Card</span>
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
          <li className="subnav__item">
            <a href="#" className="subnav__link">
              <span className="subnav__text">Callout Card</span>
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
      </nav>
    </aside>
    <main className="layout__main">
      Content
    </main>
    <footer className="layout__footer">
      Footer
    </footer>
  </page>
)
