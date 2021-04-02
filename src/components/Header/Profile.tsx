import { Avatar, Box, Flex, Text } from "@chakra-ui/react";


interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Ronaldo Jose</Text>
          <Text color="gray.300" fontSize="small">
            ronaldo.jrk@gmail.com
            </Text>
        </Box>
      )}


      <Avatar size="md" name="Ronaldo Jose" src="https://github.com/ronaldojrk.png" />
    </Flex>
  );
}