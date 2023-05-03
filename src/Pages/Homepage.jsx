import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { useLocation } from "react-router-dom";
import SearchBar from "../Components/SearchBar";
import { Center, Flex, Text } from "@chakra-ui/react";
import axios from "axios";
import MovieCards from "../Components/MovieCards";

const Homepage = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [moviesLoad, setMoviesLoad] = useState([]);
  // ----------------------------------------
  const debounce = (func, delay) => {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  };

  const handleChange = debounce((e) => {
    axios
      .get(`http://www.omdbapi.com/?apikey=24eb9d30&s=${e.target.value}`)
      .then((res) => setMovies(res.data.Search));
  }, 2000);

  // ----------------------------------
  useEffect(() => {
    axios
      .get(
        `http://www.omdbapi.com/?apikey=24eb9d30
    &s=batman`
      )
      .then((res) => setMoviesLoad(res.data.Search));
  }, [movies]);
  return (
    <div>
      <Navbar />
      <Text fontSize="xl" fontWeight="bold">
        Homepage / Debouncing On Search
      </Text>
      <Flex>
        {location.pathname === "/" && <SearchBar handleChange={handleChange} />}
      </Flex>
      //{" "}
      <Text ml={20} fontSize="6xl">
        Type in Some Queries To search for Movies
      </Text>
      <MovieCards movies={movies} moviesLoad={moviesLoad} />
    </div>
  );
};

export default Homepage;
