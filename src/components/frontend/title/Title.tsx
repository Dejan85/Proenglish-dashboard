import dynamic from "next/dynamic";
const SubContainer = dynamic(() =>
  import("src/components/ui").then((module) => module.SubContainer)
);

const Title: React.FC = (): JSX.Element => {
  return <SubContainer>title body</SubContainer>;
};

export default Title;
