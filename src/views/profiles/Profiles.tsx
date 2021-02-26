import React, { useState } from 'react';
import {
  List,
  Flex,
  Box,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import Profile from '../../components/profiles/Profile';

const Profiles: React.FC = () => {
  return (
    <Flex alignItems="center" justifyContent="center">
      <Box w="100%" maxWidth="600px" p="4">
        <form>
          <InputGroup>
            <InputRightElement pointerEvents="none">
              <SearchIcon color="gray.300" />
            </InputRightElement>
            <Input
              name="query"
              defaultValue=""
              type="text"
              placeholder="Search for profiles"
            />
          </InputGroup>
        </form>

        <Box pt="5">
          <List spacing={3}>
            {/* PROFILE */}
            <Profile query="" />
          </List>
        </Box>
      </Box>
    </Flex>
  );
};

export default Profiles;
