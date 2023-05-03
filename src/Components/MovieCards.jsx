import { Flex, Box, Image, Text } from "@chakra-ui/react";

const MovieCards = ({ movies, moviesLoad }) => {
  return (
    <Flex flexWrap="wrap">
      {movies != undefined
        ? movies.map((movie) => (
            <Box
              key={movie.imdbID}
              borderRadius="lg"
              overflow="hidden"
              borderWidth="1px"
              borderColor="gray.200"
              boxShadow="base"
              m="4"
              w="300px"
            >
              <Image src={movie.Poster} alt={movie.Title} />

              <Box p="6">
                <Text fontWeight="bold" fontSize="xl" mb="2">
                  {movie.Title}
                </Text>
                <Text fontSize="md" color="gray.500">
                  Year: {movie.Year}
                </Text>
              </Box>
            </Box>
          ))
        : moviesLoad.map((movie) => (
            <Box
              key={movie.imdbID}
              borderRadius="lg"
              overflow="hidden"
              borderWidth="1px"
              borderColor="gray.200"
              boxShadow="base"
              m="4"
              w="300px"
            >
              <Image src={movie.Poster} alt={movie.Title} />

              <Box p="6">
                <Text fontWeight="bold" fontSize="xl" mb="2">
                  {movie.Title}
                </Text>
                <Text fontSize="md" color="gray.500">
                  Year: {movie.Year}
                </Text>
              </Box>
            </Box>
          ))}
    </Flex>
  );
};

export default MovieCards;
