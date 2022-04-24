import { HOTELS_ACTION } from "../types";

const initialState = {
    checkIn: null,
    daysAmount: null,
    location: 'Москва',
    hotels: []
}
  
export const hotelsReducer = (state = initialState, action) => {
    switch (action.type) {
        case HOTELS_ACTION: {
            return {
                ...state,
                checkIn: action.payload.checkIn,
                daysAmount: action.payload.daysAmount,
                location: action.payload.location,
                hotels: [
                ...action.payload.data
                ]
            }
        }
        default: {
            return state;
        }
    }
}