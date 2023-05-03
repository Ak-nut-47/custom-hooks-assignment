import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const SearchBar = ({ handleChange }) => {
  return (
    <InputGroup w="30%" mt={10} ml={20}>
      <InputLeftElement
        pointerEvents="none"
        children={<SearchIcon color="gray.800" />}
      />
      <Input
        type="text"
        placeholder="Search"
        border="1px solid gray"
        onChange={handleChange}
      />
    </InputGroup>
  );
};

export default SearchBar;
