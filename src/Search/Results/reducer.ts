import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reviews: [] as { _id: string; name: string; description: string }[],
  review: { name: "New Review", description: "New Review", _id: "New ID" },
};


const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    setReviews: (state, action) => {
      state.reviews = action.payload;
    },
    setReview: (state: { review: any; }, action: { payload: any; }) => {
      state.review = action.payload;
    },
  },
});

export const { setReview, setReviews } = reviewsSlice.actions;
export default reviewsSlice.reducer;