import React from "react";
import { TableWrapper, Tbody, Tr, Td, Th } from "./styles";
import { Button } from "src/components/ui";

const renderTableData = (pages) => {
  return pages.map(({ page, title }, index) => {
    return (
      <React.Fragment key={index}>
        {index === 0 && (
          <>
            <Th>Page</Th>
            <Th>Title</Th>
            <Th width="20rem">Rename title</Th>
          </>
        )}

        <Tr>
          <Td width="30rem">{page}</Td>
          <Td>{title}</Td>
          <Td display="flex">
            <Button type="submit">Edit</Button>
          </Td>
        </Tr>
      </React.Fragment>
    );
  });
};

const Table = ({ titles }) => {
  return (
    <TableWrapper>
      <Tbody>{renderTableData(titles)}</Tbody>
    </TableWrapper>
  );
};

export default Table;
