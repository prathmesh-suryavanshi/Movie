/*
Filename: Search
Description: Search remotely
*/
import _ from "lodash";

export const contains = ({ original_title }, query) => {    
  let title= original_title.toUpperCase()
    if (title.includes(query.toUpperCase())) {
    return true;
    }
  return false;
};

export const getMovies = (movies, query = "") => {
  console.log("here is movie", movies, query)
  return new Promise((resolve, reject) => {
    if (query.length === 0) {
      resolve(_.take(movies));
    } else {
      const results = _.filter(movies, movie => {
        return contains(movie, query);
      });
      resolve(_.take(results));
    }
  });
};

export default getMovies;