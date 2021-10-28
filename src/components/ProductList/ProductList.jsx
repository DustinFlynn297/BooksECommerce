import React from "react";
import { SearchBar } from "../SearchBar/SearchBar";
// import Product from "../Product/Product";

const ProductList = (props) => {
  return (
    <div>
        <SearchBar />
      <table>
        <tbody>
          {props.books.map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.productName}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
