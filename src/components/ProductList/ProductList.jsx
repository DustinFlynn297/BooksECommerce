import React, { useState } from "react";
import "./ProductList.css";

const ProductList = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="searching">
      <input
        type="text"
        placeholder="Search by Genre or Book Name"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      <table>
        {props.books
          .filter((foundBooks) => {
            if (searchTerm === "") {
              return foundBooks;
            } else if (
              foundBooks.productName
                .toLowerCase()
                .includes(searchTerm.toLocaleLowerCase()) ||
              foundBooks.genre
                .toLowerCase()
                .includes(searchTerm.toLocaleLowerCase())
            ) {
              return foundBooks;
            }
          })
          .map((book) => (
            <tr key={book.id}>
              <td>
                {book.productName}
                {book.price}
                {book.genre}
              </td>
              <td className="buttonCenter">
                <button
                  href="#"
                  className="btn btn-outline-success button-row"
                  onClick={() => props}
                >
                  Like
                </button>
              </td>
            </tr>
          ))}
      </table>
    </div>
  );
};

export default ProductList;
