import { SubContainer, Table, Container } from "src/components/ui";

const titles = [
  { page: "home", title: "Proenglish - home strana" },
  { page: "o nama", title: "Proenglish - o nama strana" },
  { page: "kursevi", title: "Proenglish - kursevi strana" },
  { page: "pripreme za ispite", title: "Proenglish -  pripreme za ispite" },
  { page: "cenovnik", title: "Proenglish -  cenovnik strana" },
  { page: "dogadjaji", title: "Proenglish -  dogadjaji strana" },
  { page: "blog", title: "Proenglish -  blog strana" },
  { page: "kontakt", title: "Proenglish -  kontakt strana" },
];

const Title: React.FC = (): JSX.Element => {
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
