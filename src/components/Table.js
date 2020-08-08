import React, {useState} from "react";
import useTable from "react-bootstrap/Table";



//data = from API
export default function Table({columns, data}) {
    const [filterInput, setFilterInput] = useState("");

    const {
        getTableProps, getTableBodyProps, headerGroups, rows, prepareRow
    } = useTable ({
        columns, data
    },
        useFilters,
    );

    const handleFilterUpdate = e => {
        const value = e.target.value || undefined;
        setFilter("results.name.first", value);
        setFilterInput(value);
    };
    return (
        <input value={filterInput} onChange={handleFilterUpdate} placeholder={"Search"}/>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
    );
    
}

{rows.map((row, i) => {
    prepareRow(row); // This line is necessary to prepare the rows and get the row props from react-table dynamically
  
    // Each row can be rendered directly as a string using the react-table render method
    return (
      <tr {...row.getRowProps()}>
        {row.cells.map(cell => {
          return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
        })}
      </tr>
    );
  })}


//**SEARCH *//




const {
    getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, setFilter
} = useTable (
    {columns, data}, useFilters
);

