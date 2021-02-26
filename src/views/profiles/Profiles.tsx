import React, { useEffect, useState } from 'react';
import {
  List,
  Flex,
  Box,
  Input,
  InputGroup,
  InputRightElement,
  Spinner,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import axios from 'axios';
import Profile from '../../components/profiles/Profile';

const Profiles: React.FC = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState({});

  async function fetchUser(): Promise<void> {
    if (query === '') return;
    try {
      setLoading(true);

      const response = await axios.get(`https://api.github.com/users/${query}`);
      setProfile(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUser();
  }, [query]);

  return (
    <Flex alignItems="center" justifyContent="center">
      <Box w="100%" maxWidth="600px" p="4">
        <form>
          <InputGroup>
            <InputRightElement pointerEvents="none">
              <SearchIcon color="gray.300" />
            </InputRightElement>
            <Input
              onChange={(event) => setQuery(event.target.value)}
              name="query"
              value={query}
              type="text"
              placeholder="Search for profiles"
            />
          </InputGroup>
        </form>

        <Box pt="5">
          <List spacing={3}>
            {loading ? (
              <Spinner />
            ) : (
              <>
                {profile !== {} ? (
                  <Profile profile={profile} />
                ) : (
                  <h2>Nenhum resultado</h2>
                )}
              </>
            )}
            {/* PROFILE */}
          </List>
        </Box>
      </Box>
    </Flex>
  );
};

export default Profiles;
