import React, { useEffect, useState } from 'react';
import { ListItem, Image, Flex, Box, Text, Button } from '@chakra-ui/react';
import { ViewIcon } from '@chakra-ui/icons';
import axios from 'axios';

const Profile: React.FC<{ query: string }> = ({ query }: { query: string }) => {
  interface User {
    id: string;
    name: string;
  }

  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  async function fetchUsers(): Promise<void> {
    try {
      setLoading(true);

      const response = await axios.get(`https://api.github.com/users/${query}`);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
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
  );
};

export default Profile;
