import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loading } from "../../components";
import { MoviesContent } from "../../components/movies";
import {
  addFavoriteMovie,
  getAllMovies,
  removeFavoriteMovie,
} from "../../redux/features/movieSlice";
import { GetMovies } from "../../redux/services/movie";
import { Container, Section, SectionContainer } from "../../styles";

function Movies() {
  const dispatch = useDispatch();

  const { movies, favoriteMovies, loading } = useSelector(getAllMovies);

  const [clickedTab, setClickedTab] = useState("all");
  const [data, setData] = useState([]);
  const [starredMovie, setStarredMovie] = useState({});

  useEffect(() => {
    dispatch(GetMovies());
  }, [dispatch]);

  useEffect(() => {
    if (clickedTab === "all") {
      setData(movies);
    } else {
      setData(favoriteMovies);
    }
  }, [clickedTab, favoriteMovies, movies]);

  const onStar = (movie) => {
    setStarredMovie(movie);
    const alreadyAdded = favoriteMovies.some((movie_) => movie_.id === movie.id)

    if(clickedTab === "my") {
        // Additional feature for fun
        dispatch(removeFavoriteMovie(movie.id));
      } else {
        if(alreadyAdded) {
            return;
        } else {
            dispatch(addFavoriteMovie(movie)); 
        }
      }
    
  };


  if (loading) {
    return <Loading />;
  }
  return (
    <Container>
      <SectionContainer>
        <Section
          className={`${clickedTab === "all" ? "active" : ""}`}
          onClick={() => setClickedTab("all")}
        >
          All Movies
        </Section>
        <Section
          className={`${clickedTab === "my" ? "active" : ""}`}
          onClick={() => setClickedTab("my")}
        >
          My Movies
        </Section>
      </SectionContainer>
      <MoviesContent
        data={data}
        onStar={onStar}
        starredMovie={starredMovie}
      />
    </Container>
  );
}

export default Movies;
