import React from "react";
import { Feather } from "@expo/vector-icons";
import { IStoryModel } from "../../model/storyModel";
import { Box, Divider, Heading, Icon, Image, Text } from "native-base";
import { StyleSheet } from "react-native";

interface IFeedProps {
  data: IStoryModel;
}
const Feed: React.FC<IFeedProps> = ({ data }) => {
  return (
    <>
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
          <Heading size="sm" paddingBottom={1} color="#000">
            {data.recentText}
          </Heading>
          <Text numberOfLines={2} style={styles.textLabel}>
            {data.fullName}
          </Text>
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
          <Text style={styles.textLabel}>{data.fullName}</Text>
        </Box>
      </Box>
      <Divider marginBottom={2} />
    </>
  );
};

const styles = StyleSheet.create({
  textLabel: {
    color: "#000",
  },
});

export default Feed;
