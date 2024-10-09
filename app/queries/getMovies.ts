export const GET_MOVIES = gql`
    query getMovies {
        movies {
            file {
                name
            }
            _id
        }
    }
`;