import Head from "next/head";
import { Container } from "src/components/ui";

const Layout: React.FC = ({ children }): JSX.Element => {
  return (
    <Container height="100vh" column justifyContent="center" alignItem="center">
      <Head>
        {/* <title>{pageTitle}</title> */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {children}
    </Container>
  );
};

export default Layout;
