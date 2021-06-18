import React from "react";
import { getSession } from "next-auth/client";
import dynamic from "next/dynamic";
const Title = dynamic(() =>
  import("src/components/frontend").then((module) => module.Title)
);
import { server } from "config/server";

const TitlePage: React.FC<{ titles: object[] }> = ({ titles }) => {
  return <Title titles={titles} />;
};

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  const apiUrl = `${server}/api/titles`;
  const titles = await fetch(apiUrl).then((res) => res.json());

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { titles },
  };
}

export default TitlePage;
