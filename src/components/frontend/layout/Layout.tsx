import Head from "next/head";
import dynamic from "next/dynamic";
import { Container } from "src/components/ui";
const Navigation = dynamic(() =>
  import("src/components/frontend").then((module) => module.Navigation)
);
import { useSession } from "next-auth/client";

const Layout: React.FC = ({ children }): JSX.Element => {
  const [session, loading] = useSession();
  console.log("test", session);

  return (
    <Container height="100vh" justifyContent="center" alignItem="center">
      <Head>
        {/* <title>{pageTitle}</title> */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {session && <Navigation />}
      {children}
    </Container>
  );
};

export default Layout;
