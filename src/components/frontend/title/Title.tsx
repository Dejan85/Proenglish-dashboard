import dynamic from "next/dynamic";
const SubContainer = dynamic(() =>
  import("src/components/ui").then((module) => module.SubContainer)
);

const pages = [
  { page: "home", title: "Proenglish - home strana" },
  { page: "o nama", title: "Proenglish - o nama strana" },
  { page: "kursevi", title: "Proenglish - kursevi strana" },
  { page: "pripreme za ispite", title: "Proenglish -  pripreme za ispite" },
  { page: "cenovnik", title: "Proenglish -  cenovnik strana" },
  { page: "dogadjaji", title: "Proenglish -  dogadjaji strana" },
  { page: "blog", title: "Proenglish -  blog strana" },
  { page: "kontakt", title: "Proenglish -  kontakt strana" },
];

const renderTableData = () => {
  return pages.map(({ page, title }) => {
    return (
      <tr key={page}>
        <td>{page}</td>
        <td>{title}</td>
      </tr>
    );
  });
};

const Title: React.FC = (): JSX.Element => {
  return (
    <SubContainer>
      <table id="students">
        <tbody>{renderTableData()}</tbody>
      </table>
    </SubContainer>
  );
};

export default Title;
