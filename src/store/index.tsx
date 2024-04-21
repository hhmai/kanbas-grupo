import { configureStore } from "@reduxjs/toolkit";
import reviewsReducer from "../Search/Results/reducer";
export interface MovieSiteState {
  reviewsReducer: {
    reviews: any[];
    review: any;
  };
}
const store = configureStore({
  reducer: {
    reviewsReducer
  }
});


export default store;