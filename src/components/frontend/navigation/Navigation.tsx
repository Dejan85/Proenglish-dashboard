import dynamic from "next/dynamic";
const Nav = dynamic(() =>
  import("src/components/ui").then((module) => module.Nav)
);

const Navigation: React.FC = () => {
  return <Nav>Navigation</Nav>;
};

export default Navigation;
