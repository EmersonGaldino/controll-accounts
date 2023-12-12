import { Box, Divider, Image } from "native-base";
import React, { useEffect } from "react";
import { IStoryModel } from "../../model/storyModel";

interface IStoryProps {
  data: IStoryModel;
}

const Storys: React.FC<IStoryProps> = ({ data }) => {
  return (
    <Box flex={1} key={data.id} marginBottom={4} padding={2} borderRadius={4}>
      <Box
        padding="0.5"
        borderRadius={32}
        bg={{
          linearGradient: {
            colors: ["lightBlue.300", "violet.800"],
          },
        }}
      >
        <Image
          source={{ uri: data.avatarUrl }}
          width={16}
          height={16}
          borderRadius={32}
          alt={data.fullName}
        />
      </Box>
    </Box>
  );
};

export default Storys;
