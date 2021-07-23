import '../style/App.scss'
import React from 'react';
import App, { AppInitialProps } from 'next/app';
import { wrapper } from '../redux/store';

class MyApp extends App<AppInitialProps> {
  public static getInitialProps = wrapper.getInitialAppProps(
    store =>
      async ({ Component, ctx }) => {
        store.dispatch({ type: 'TOE', payload: 'was set in _app' });

        return {
          pageProps: {
            // Call page-level getInitialProps
            // DON'T FORGET TO PROVIDE STORE TO PAGE
            ...(Component.getInitialProps
              ? await Component.getInitialProps({ ...ctx, store })
              : {}),
            // Some custom thing for all pages
            pathname: ctx.pathname,
          },
        };
      },
  );

  public render() {
    const { Component, pageProps } = this.props;

    return <Component {...pageProps} />;
  }
}

export default wrapper.withRedux(MyApp);
