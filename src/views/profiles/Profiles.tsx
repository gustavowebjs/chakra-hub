import React from 'react';
import {
  List,
  ListItem,
  Image,
  Flex,
  Box,
  Input,
  Text,
  Button,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { ViewIcon, SearchIcon } from '@chakra-ui/icons';

const Profiles: React.FC = () => {
  return (
    <Flex alignItems="center" justifyContent="center">
      <Box w="100%" maxWidth="600px" p="4">
        <form>
          <InputGroup>
            <InputRightElement pointerEvents="none">
              <SearchIcon color="gray.300" />
            </InputRightElement>
            <Input type="text" placeholder="Search for profiles" />
          </InputGroup>
        </form>

        <Box pt="5">
          <List spacing={3}>
            <ListItem bgColor="#efefef" p="5" borderRadius="10px">
              <Flex alignItems="center">
                <Image
                  fallbackSrc="https://via.placeholder.com/150"
                  borderRadius="full"
                  boxSize="100px"
                  src="https://bit.ly/sage-adebayo"
                  alt="Joseph"
                />
                <Box pl="3">
                  <Text fontWeight="bold" fontSize="20px" color="#666">
                    Joseph Willan
                  </Text>
                  <Text fontSize="14px" color="#333">
                    @josephgithub
                  </Text>
                  <Button
                    variant="solid"
                    mt="2"
                    leftIcon={<ViewIcon />}
                    size="sm"
                    colorScheme="purple"
                  >
                    View Profile
                  </Button>
                </Box>
              </Flex>
            </ListItem>
          </List>
        </Box>
      </Box>
    </Flex>
  );
};

export default Profiles;
