import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useEffect, useState } from "react";
import "./index";
import { useDispatch, useSelector } from "react-redux";
import {
    setReview,
    setReviews,
} from "./reducer";
import { findReviewsForMovie } from "./client";
import { MovieSiteState } from "../../store";

function ResultsList() {
    const { movieId } = useParams();
    useEffect(() => {
        findReviewsForMovie(movieId)
            .then((reviews: any) =>
                dispatch(setReviews(reviews))
            );
    }, [movieId]);
    const reviewList = useSelector((state: MovieSiteState) =>
        state.reviewsReducer.reviews);
    const dispatch = useDispatch();
    const [selectedModule, setSelectedModule] = useState(reviewList[0]);
    return (
        <>
            <div style={{ textAlign: "right", paddingRight: "10" }}>
                <button>Collapse All</button>
                <button>View Progress</button>
                <select style={{ width: "100px" }}>
                    <option>Publish All</option>
                    <option>Publish All Modules and Items</option>
                    <option>Publish Modules Only</option>
                    <option>Unpublish All</option>
                </select>
                <button className="button-module">+Module</button>
                <hr></hr>
            </div>
            <ul className="list-group wd-modules">
                {reviewList
                    .filter((module: { movie: any; }) => module.movie === movieId)
                    .map((review: { _id: any; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; lessons: any[]; }, index: Key | null | undefined) => (
                        <li
                            key={index}
                            className="list-group-item"
                            onClick={() => setSelectedModule(review)}>
                            <button
                                className="edit-button-module"
                                onClick={() => dispatch(setReview(review))}>
                                Details
                            </button>
                            <div>
                                review:
                                {review.name}
                                <span className="float-end">
                                </span>
                            </div>
                            {selectedModule && selectedModule?._id === review._id && (
                                <ul className="list-group">
                                    {review.lessons?.map((lesson: any, index: any) => (
                                        <li className="list-group-item" key={index}>
                                            lesson:
                                            {lesson.name}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
            </ul>
        </>
    );
}

export default ResultsList;

function useParams(): { movieId: any; } {
    throw new Error("Function not implemented.");
}
