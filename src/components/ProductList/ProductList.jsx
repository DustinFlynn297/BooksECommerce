import React, { useState } from "react";
import "./ProductList.css";
import { Link } from "react-router-dom";

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
                <Link to = {`/bookDetails/${book.id}`}>
                  <button
                    className="btn btn-outline-success button-row"
                    onClick={() => props.getSingleBook(book.id)}
                  >
                    Book Info
                  </button>
                </Link>
              </td>
            </tr>
          ))}
      </table>
    </div>
  );
};

export default ProductList;
