import React from 'react';
import { Flex, Box, Heading, Text } from '@chakra-ui/react';

const Home: React.FC = () => {
  return (
    <Flex alignItems="center" justifyContent="center">
      <Box w="100%" maxWidth="600px" p="4">
        <Heading as="h3" color="#666">
          Hello, stranger!
        </Heading>
        <Text as="p">You can search for Github Users on profiles page.</Text>
      </Box>
    </Flex>
  );
};
export default Home;
