import { datamovies } from "../../Components/DataMovies";
const initialState = {
   movies : [... datamovies]
};
export const reduce = (state = initialState, action) => {

    switch (action.type) {
        case 'DELETE':
            return {
                movies : state.movies.filter ((movie) => movie.imdbID !== action.payload)
            }
            default : 
            return state;
    }
    
}

