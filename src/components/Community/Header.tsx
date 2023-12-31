import React from "react";
import { Community } from "../../atoms/communitiesAtom";
import { Box, Button, Flex, Icon, Image, Text } from "@chakra-ui/react";
import { FaYarn } from "react-icons/fa";
import useCommunityData from "../../hooks/useCommunityData";

type HeaderProps = {
  communityData: Community;
};

const Header: React.FC<HeaderProps> = ({ communityData }) => {
  const { communityStateValue, onJoinOrLeaveCommunity, loading } =
    useCommunityData();
  const isJoined = !!communityStateValue.mySnippets.find(
    (item) => item.communityId === communityData.id
  );

  return (
    <Flex direction="column" width="100%" height="146px">
      <Box height="50%" bg="purple.400" />
      <Flex justify="center" bg="white" flexGrow={1}>
        <Flex width="95%" maxWidth="860px">
          {communityStateValue.currentCommunity?.imageURL ? (
            <Image
              borderRadius="full"
              boxSize="66px"
              src={communityStateValue.currentCommunity.imageURL}
              alt="Community Picture"
              position="relative"
              top={-3}
              color="purple.500"
              border="4px solid white"
            />
          ) : (
            <Icon
              as={FaYarn}
              fontSize={66}
              position="relative"
              top={-3}
              color="purple.500"
              border="4px solid white"
              borderRadius="500"
            />
          )}
          <Flex padding={{ base: "10px 0px", sm: "10px 16px" }}>
            <Flex direction="column" mr={6}>
              <Text fontWeight={800} fontSize={{ base: "12pt", sm: "16pt" }}>
                {communityData.id}
              </Text>
              <Text
                fontWeight={600}
                fontSize={{ base: "8pt", sm: "10pt" }}
                color="gray.400"
              >
                o/{communityData.id}
              </Text>
            </Flex>
            <Button
              variant={isJoined ? "outline" : "solid"}
              height="30px"
              pr={6}
              pl={6}
              isLoading={loading}
              onClick={() => onJoinOrLeaveCommunity(communityData, isJoined)}
            >
              {isJoined ? "Joined" : "Join"}
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Header;
