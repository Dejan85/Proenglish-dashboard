import React from "react";

const renderTableData = (pages) => {
  return pages.map(({ page, title }) => {
    return (
      <tr key={page}>
        <td>{page}</td>
        <td>{title}</td>
      </tr>
    );
  });
};

const Table = ({ data }) => {
  return (
    <table id="students">
      <tbody>{renderTableData(data)}</tbody>
    </table>
  );
};

export default Table;
