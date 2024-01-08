import React from "react";

const TableComponent = ({ products }) => {
  console.log("a", products);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>PRICE</th>
            <th>STOCK</th>
          </tr>
        </thead>
        <tbody>
          {products.map((el) => {
            return (
              <tr key={el.id}>
                <td>{el.id}</td>
                <td>{el.name}</td>
                <td>{el.unitPrice}</td>
                <td>{el.discontinued ? "on stock" : "not on stock"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default TableComponent;
