const Star = ({ starredMovie, onClick, movie }) => {
    return (
      <span onClick={() => onClick(movie)} className="star" role="button">
        {starredMovie?.id === movie.id ? '\u2605' : '\u2606'}
      </span>
    );
};

export { Star }