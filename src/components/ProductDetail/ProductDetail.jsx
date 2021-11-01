import React, {useEffect} from 'react'
import ReviewBlock from "../ReviewBlock/ReviewBlock";

export const ProductDetail = (props) => {

    useEffect(() => {
        // alert("here 2");
        // alert(props.getBookReviews);

        props.getBookReviews(props.book.id)
    }, [props.book]);


    const book = props.book

    console.log("here line 12 product detail")
    console.log(props.getBookReviews)

    return (
        <div>
            <h1> Title: {book.productName} </h1>
            <p> {book.productDescription} </p>
            <p>Price: {book.price} </p>
            <p> Genre: {book.genre} </p>
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