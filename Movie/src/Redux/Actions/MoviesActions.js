/*
Filename: Quote Action
Description: Action
*/

import axios from 'axios'
export const loadMovie = (flag) => {
  if (flag) {
    return (dispatch, getState) => {
      dispatch({ type: 'LOAD_QUOTE_START' })
      axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed').then(function (response) {
      dispatch({ type: 'LOAD_QUOTE_SUCCESS', payload: response.data.results, statusCode: response.status })
      }).catch(function (error) {
        dispatch({ type: 'LOAD_QUOTE_FAIL', payload: error })
      })
    }
  } else {
    return (dispatch, getState) => {
      dispatch({ type: 'TOP_RATED_START' })
      axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed').then(function (response) {
        console.log("data data", response.data.results)
      dispatch({ type: 'TOP_RATED_SUCCESS', payload: response.data.results, statusCode: response.status })
      }).catch(function (error) {
        dispatch({ type: 'TOP_RATEDE_FAIL', payload: error })
      })
    }
  }
}

