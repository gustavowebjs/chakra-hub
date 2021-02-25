import React from 'react';
import { Box, Button, Flex, Heading } from '@chakra-ui/react';
import './styles.css';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => (
  <>
    <Flex
      flexDirection="column"
      alignItems="center"
      marginTop="10%"
      justifyContent="center"
    >
      <Heading as="h1" paddingBottom="5" color="#D8BFD8">
        ChakraHUB
      </Heading>
      <Box
        w="100%"
        className="navigation-box"
        bgColor="light"
        maxWidth="600px"
        p="4"
      >
        <ul className="navigation">
          <Flex alignItems="center">
            <Box>
              <li>
                <Link to="/">
                  <Button>Home</Button>
                </Link>
              </li>
              <li>
                <Link to="/profiles">
                  <Button>Profiles</Button>
                </Link>
              </li>
            </Box>
          </Flex>
        </ul>
      </Box>
    </Flex>
  </>
);

export default Navigation;
