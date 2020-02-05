import React from 'react';
import App from 'next/app';
import fetch from 'isomorphic-unfetch';
import { Navigation, SideNavigation, Search } from './components';
import './_app.scss';
import { Page } from "./components/Page";

class Layout extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    let navData = await (await fetch(`http://localhost:3000/api/navigation`)).json();
    let componentCategoryData = await (await fetch(`http://localhost:3000/api/component_category`)).json();
    let componentData = await (await fetch(`http://localhost:3000/api/component`)).json();
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { ...pageProps, navData, componentCategoryData, componentData };
  }

  render() {
    const { Component, pageProps, navData, componentCategoryData, componentData } = this.props;
    return (
      <page className="layout">
        <header className="layout__header">
          <div className="layout__logo">
            <img src="https://www.exchangegrill.co.za/wp-content/uploads/2018/11/Logo-no-Whitespace-dark.png" alt="Exchange" />
          </div>
          <Navigation className="layout__nav" nav={navData} />
          <Search className="layout__search" />
        </header>
        <aside className="layout__aside">
          <SideNavigation componentCategories={componentCategoryData} components={componentData} />
        </aside>
        <main className="layout__main">
          <Page />
          <Component {...pageProps} />
        </main>
        <footer className="layout__footer">
          Footer
        </footer>
      </page>
    );
  }
}

export default Layout;