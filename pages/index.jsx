import React from 'react';
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
      <div className="layout__search">
        <input type="text" />
        <button>Submit</button>
      </div>
    </header>
    <aside className="layout__aside">
      side navigation
    </aside>
    <main className="layout__main">
      Content
    </main>
    <footer className="layout__footer">
      Footer
    </footer>
  </page>
)
