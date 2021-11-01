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
            {/*<div>*/}
            {/*    /!*Should not even see unless user is logged in *!/*/}
            {/*    <button onClick = {() => props.addToCart({*/}
            {/*        UserId: props.user.id,*/}
            {/*        BookId: book.id,*/}
            {/*        Quantity: 1*/}
            {/*    })}*/}
            {/*    variant = "Success">Add To Cart</button>*/}
            {/*</div>*/}
            {/*<ReviewBlock reviews={props.reviews}*/}
            {/*             postReview={props.postReview}*/}
            {/*             getBooksReviews={props.getBookReviews}*/}
            {/*             book={props.book}*/}
            {/*             user={props.user}  />*/}
            <LoggedInReviewAndCart getBookReviews={props.getBookReviews} />
        </div>
    );
}

const LoggedInReviewAndCart = (props) => {

    const currentUser = props.user;
    const book = props.book


    useEffect(() => {
        // alert("here 2");
        // alert(props.getBookReviews);
        console.log("line 58 prodcut detail" );

        props.getBookReviews(props.book?.id);
        console.log("line 58 prodcut detail" );
    }, [props.book]);



    console.log("here line 12 product detail")


    if (!currentUser) {
        console.log("user is not logged in ");
        alert("spoiler alert");
        // use either return
        // return <>Please Log in to view our Shopping carts and to leave a review</>;
        return null;
    }

    return(
        <div>
            <div>
                {/*Should not even see unless user is logged in */}
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