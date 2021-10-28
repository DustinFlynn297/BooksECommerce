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
                <td className="buttonCenter"><button href = "#" className = "btn btn-outline-success button-row" onClick={() => props} >Like</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
