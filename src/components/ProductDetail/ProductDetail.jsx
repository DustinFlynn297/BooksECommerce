import React, {useEffect} from 'react'

function ProductDetail(props) {

    useEffect(() => {
        props.getBookReviews(book.id)
    }, []);

    const book = props.book
    console.log(props.book)

    return(
        <div>
            <h1> {book.productName} </h1>
            <p> {book.productDescription} </p>
            <p> {book.price} </p>
            <p> {book.genre} </p>
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
export default ProductDetail;