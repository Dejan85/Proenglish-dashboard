import React from "react";
import { getSession } from "next-auth/client";
import dynamic from "next/dynamic";
const TableWidget = dynamic(() =>
  import("src/components/widgets").then((module) => module.TableWidget)
);
import { server } from "config/server";
const url = "/api/titles/update-title";

const TitlePage: React.FC<{ titles: object[] }> = ({ titles }) => {
  return <TableWidget data={titles} url={url} />;
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
