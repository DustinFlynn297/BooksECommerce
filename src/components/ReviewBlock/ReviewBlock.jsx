import React from 'react';
import CreateReview from "../CreateReview/CreateReview";

const ReviewBlock = (props) => {


// const book = props.book;


    return(
        <div>
            <p>Welcome to book reviews</p>
            <CreateReview
                reviews={props.reviews}
                postReview={props.postReview}
                getBooksReviews={props.getBookReviews}
                book={props.book}
                user={props.user}
            />
            {props.reviews?.map((review) => {
                return (
                <ul>
                    <li key={review.productId}> {review.body} </li>
                    <li key={review.productId}> {review.starRating} </li>
                </ul>
                )}
            )}


        </div>
    )
}

export default ReviewBlock;