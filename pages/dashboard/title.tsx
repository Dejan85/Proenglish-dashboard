import React from "react";
import { getSession } from "next-auth/client";

const Title = () => {
  return <div>Title page</div>;
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

export default Title;
