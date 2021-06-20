import { Fragment } from "react";
import { TableWrapper, Tbody, Tr, Td, Th } from "./styles";
import { Button } from "src/components/ui";

const renderTableData = (titles, onClick) => {
  return titles?.map(({ page, title, _id: id }, index) => {
    return (
      <Fragment key={id}>
        {index === 0 && (
          <>
            <Th>Page</Th>
            <Th>Title</Th>
            <Th width="20rem">Edit title</Th>
          </>
        )}

        <Tr>
          <Td width="30rem">{page}</Td>
          <Td>{title}</Td>
          <Td display="flex">
            <Button onClick={(): void => onClick(title, page)} type="submit">
              Edit
            </Button>
          </Td>
        </Tr>
      </Fragment>
    );
  });
};

const Table: React.FC<{ titles: object[]; onClick: any }> = ({
  titles,
  onClick,
}) => {
  return (
    <TableWrapper>
      <Tbody>{renderTableData(titles, onClick)}</Tbody>
    </TableWrapper>
  );
};

export default Table;
