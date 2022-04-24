import { useTheme } from "@emotion/react";
import useSortedData from "./use-sorted-data";

function DataGrid(props) {
  const { columns, data } = props;

  const theme = useTheme();
  const { sortedData, orders, changeOrder } = useSortedData(data);

  function handleColumnHeaderClick(column) {
    if (column.sortable) {
      changeOrder(column.field);
    }
  }

  function renderSortIcon(column) {
    if (!column.sortable || !orders[column.field]) {
      return null;
    }

    return (
      <span css={{ fontSize: "0.5em" }}>
        {" "}
        {orders[column.field] === "asc" ? <>▲</> : <>▼</>}
      </span>
    );
  }

  return (
    <table
      css={{
        borderSpacing: theme.spacing(1),
        userSelect: "none",
      }}
    >
      <thead>
        <tr>
          {columns.map((column) => {
            return (
              <th
                key={column.name}
                css={{ cursor: column.sortable ? "pointer" : "" }}
                onClick={() => handleColumnHeaderClick(column)}
              >
                {column.name}
                {renderSortIcon(column)}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {sortedData.map((item) => {
          return (
            <tr key={item.id}>
              {columns.map((column) => {
                return (
                  <td key={item.id + "_" + column.name}>
                    {column.formatter
                      ? column.formatter(item[column.field], item)
                      : item[column.field]}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default DataGrid;
