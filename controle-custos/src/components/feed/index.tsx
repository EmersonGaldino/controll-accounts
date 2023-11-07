import React from "react";
import { Feather } from "@expo/vector-icons";
import { IStoryModel } from "../../model/storyModel";
import { Box, Heading, Icon, Image, Text } from "native-base";

interface IFeedProps {
  data: IStoryModel;
}
const Feed: React.FC<IFeedProps> = ({ data }) => {
  return (
    <Box
      flex={1}
      flexDirection="column"
      marginBottom={4}
      backgroundColor="#fff"
      padding={2}
    >
      <Box>
        <Image
          source={{ uri: data.avatarUrl }}
          alt={data.fullName}
          w="100%"
          h={120}
        />
      </Box>
      <Box marginY={3}>
        <Heading size="sm" paddingBottom={1}>
          {data.fullName}
        </Heading>
        <Text numberOfLines={2}>{data.recenteText}</Text>
      </Box>
      <Box
        marginY={1}
        flexDir="row"
        backgroundColor="rgba(226,232,240,0.4)"
        alignSelf="flex-start"
        borderRadius={6}
        paddingX={3}
        paddingY={1}
      >
        <Icon as={Feather} name="user" color="#000" marginRight={2} />
        <Text numberOfLines={1}>{data.fullName}</Text>
      </Box>
    </Box>
  );
};

export default Feed;
