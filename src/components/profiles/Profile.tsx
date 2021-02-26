import React, { useEffect, useState } from 'react';
import { ListItem, Image, Flex, Box, Text, Button } from '@chakra-ui/react';
import { ViewIcon } from '@chakra-ui/icons';

interface ProfileProps {
  profile: {
    name?: string;
    login?: string;
    avatarUrl?: string;
    url?: string;
  };
}

const Profile: React.FC<ProfileProps> = ({ profile }: ProfileProps) => {
  return (
    <ListItem bgColor="#efefef" p="5" borderRadius="10px">
      <Flex alignItems="center">
        <Image
          fallbackSrc="https://via.placeholder.com/150"
          borderRadius="full"
          boxSize="100px"
          src={profile.avatarUrl}
          alt="Joseph"
        />
        <Box pl="3">
          <Text fontWeight="bold" fontSize="20px" color="#666">
            {profile.name}
          </Text>
          <Text fontSize="14px" color="#333">
            {profile.login}
          </Text>
          <Button
            variant="solid"
            mt="2"
            leftIcon={<ViewIcon />}
            size="sm"
            colorScheme="purple"
          >
            <a
              rel="noreferrer"
              href={`https://github.com/${profile.login}`}
              target="_blank"
            >
              View Profile
            </a>
          </Button>
        </Box>
      </Flex>
    </ListItem>
  );
};

export default Profile;
