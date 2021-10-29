import React, {useEffect} from 'react'
import ReviewBlock from "../ReviewBlock/ReviewBlock";

function ProductDetail(props) {

    useEffect(() => {
        props.getBookReviews(props.book.id)
    }, [props.book]);

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
            <ReviewBlock reviews={props.reviews}
                         postReview={props.postReview}
                         getBooksReviews={props.getBookReviews}
                         book={props.book}
                         user={props.user}  />
        </div>
    );
}
export default ProductDetail;