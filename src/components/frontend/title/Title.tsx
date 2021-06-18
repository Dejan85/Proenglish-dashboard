import { SubContainer, Table, Container } from "src/components/ui";

const Title: React.FC<{ titles: object[] }> = ({ titles }): JSX.Element => {
  return (
    <SubContainer>
      <Container
        maxWidth="150rem"
        alignItem="center"
        justifyContent="center"
        height="100%"
      >
        <Table titles={titles} />
      </Container>
    </SubContainer>
  );
};

export default Title;
