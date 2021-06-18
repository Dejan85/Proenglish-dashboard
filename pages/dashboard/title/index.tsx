import React from "react";
import { getSession } from "next-auth/client";
import dynamic from "next/dynamic";
const Title = dynamic(() =>
  import("src/components/frontend").then((module) => module.Title)
);

const TitlePage: React.FC = () => {
  return <Title />;
};

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default TitlePage;
