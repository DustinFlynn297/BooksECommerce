import React, {useEffect} from 'react'

function BookDetails(props) {

    useEffect(() => {
        props.getBookReviews(book.id)
    }, []);

    const book = props.book

    return(
        <div>
            <h1> {book.ProductName} </h1>
            <p> {book.ProductDescription} </p>
            <p> {book.Price} </p>
            <p> {book.Genre} </p>
            <div>
                <button onClick = {() => props.addToCart({
                    UserId: props.user.id,
                    BookId: book.id,
                    Quantity: 1
                })}
                variant = "Success">Add To Cart</button>
            </div>
        </div>
    );
}