import React from 'react';
import { Box, Container } from '@chakra-ui/react';
import './styles.css';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => (
  <Box className="navigation-box" w="100%" p="4">
    <Container maxW="container.xl">
      <ul className="navigation">
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
          <Link to="/profiles"> Profiles </Link>
        </li>
      </ul>
    </Container>
  </Box>
);

export default Navigation;
