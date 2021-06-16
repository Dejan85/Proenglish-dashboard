import { Layout } from "src/components/frontend";
import { createGlobalStyle } from "styled-components";
import { Provider } from "next-auth/client";

const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
}

body {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

`;

function MyApp({ Component, pageProps }) {
  console.log("test pageProps", pageProps);

  return (
    <Provider session={pageProps.session}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
