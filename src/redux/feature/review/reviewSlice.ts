/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IReview {
    review: any[];
  }
  
  const initialState: IReview = {
    review: [],
  };

const reviewSlice = createSlice({
    name: 'review',
    initialState,
    reducers: {
          addToComment: (state, action: PayloadAction<any>) => {
            const existing = state.review.find(
              (review) => review.email === action.payload.email
            );
      
            if (existing) {
              existing.quantity = existing.quantity! + 1;
            } else {
              state.review.push({ ...action.payload, quantity: 1 });
            }
          },
    }
})

export const { addToComment } = reviewSlice.actions; 
export default reviewSlice.reducer;