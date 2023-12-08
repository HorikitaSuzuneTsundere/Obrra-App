import { SearchIcon } from '@chakra-ui/icons';
import { Flex, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { User } from 'firebase/auth';
import React from 'react';

type SearchInputProps = {
    user?: User | null;
};

const SearchInput: React.FC<SearchInputProps> = ({ user }) => {
    return (
        <Flex flexGrow={1} maxWidth={user ? 'auto' : '600px'} mr={2} align="center">
            <InputGroup>
                <InputLeftElement
                    pointerEvents="none"
                >
                    <SearchIcon color="gray.400" mb={3} />
                </InputLeftElement>
                <Input
                    placeholder='Search Obrra'
                    fontSize="10pt"
                    _placeholder={{ color: "gray.500" }}
                    _hover={{
                        bg: "white",
                        border: "1px solid",
                        borderColor: "purple.500",
                    }}
                    _focus={{
                        outline: "none",
                        border: "1px solid",
                        borderColor: "purple.500",
                    }}
                    height="34px"
                    bg="gray.50"
                    padding={{
                        sm: "0px 0px 0px 50px",
                        base: "0px 15px 0px 40px",
                    }}
                />
            </InputGroup>
        </Flex>
    );
};
export default SearchInput;