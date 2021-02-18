/*
Filename: QuoteReducer
Description: Top rated movie listing
*/
const initialState={
    quote: "initialState",
    isLoading: false,
    error: '',
    statuCode: 0,
    topRated: ""
   };

   export default quotes =(state = initialState, action) =>{
     switch (action.type) {
       case "LOAD_QUOTE_START":
         return Object.assign({}, state, {isLoading: true})
       case "LOAD_QUOTE_SUCCESS":
         return Object.assign({}, state, {quote: action.payload, isLoading: false, statusCode: action.statusCode})
       case "LOAD_QUOTE_FAIL":
         return Object.assign({}, state, {error: action.payload, isLoading: false})
         case "TOP_RATED_START":
         return Object.assign({}, state, {isLoading: true})
       case "TOP_RATED_SUCCESS":
         console.log("here am i")
         return Object.assign({}, state, {topRated: action.payload, isLoading: false, statusCode: action.statusCode})
       case "TOP_RATED_FAIL":
         return Object.assign({}, state, {error: action.payload, isLoading: false})
       default:
         return state;
     }
   }
  