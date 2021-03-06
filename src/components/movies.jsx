import { Star } from ".";
import { Empty, Movie, MovieContainer } from "../styles";

const IMG_URL = "https://image.tmdb.org/t/p/w500";
const PLACEHOLDER_IMG = "https://via.placeholder.com/300";

const MovieItem = ({ movie, onStar, starredMovie }) => (
  <Movie>
    <img
      src={ movie.poster_path ? `${IMG_URL}${movie.poster_path}` : PLACEHOLDER_IMG}
      alt={movie.title}
      loading="lazy"
    />
    <div className="info">
      <h3>{movie.title}</h3>
      <span>{movie.vote_average}</span>
    </div>
    <div className="overview">
      <div>
        <h3>Overview</h3>
        <Star onClick={onStar} starredMovie={starredMovie} movie={movie} />
      </div>
      {movie.overview}
    </div>
  </Movie>
);

const MoviesContent = ({ data, onStar, starredMovie }) => {
  if (data.length === 0) {
    return <Empty>No movies added yet</Empty>;
  }
  return (
    <MovieContainer>
      {data?.map((movie) => {
        return (
          <MovieItem
            key={movie.id}
            movie={movie}
            onStar={onStar}
            starredMovie={starredMovie}
          />
        );
      })}
    </MovieContainer>
  );
};

export { MoviesContent };
