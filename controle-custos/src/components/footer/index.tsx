import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { Avatar, Box, HStack, Icon, Pressable } from "native-base";

const Footer: React.FC = () => {
  const [selected, setSelected] = useState(1);
  return (
    <Box safeAreaTop width="100%" maxW="300px" alignSelf="center">
      <HStack bg="indigo.600" alignItems="center" safeAreaBottom shadow={6}>
        <Pressable
          opacity={selected === 0 ? 1 : 0.5}
          py="3"
          flex={1}
          onPress={() => setSelected(0)}
        >
          <Box alignItems="center" rounded="md">
            <Pressable>
              <Icon
                as={Feather}
                name="home"
                size={6}
                color="#000"
                marginRight={4}
              />
            </Pressable>
          </Box>
          <Box alignItems="center" rounded="md">
            <Pressable>
              <Icon
                as={Feather}
                name="search"
                size={6}
                color="#000"
                marginRight={4}
              />
            </Pressable>
          </Box>
          <Box alignItems="center" rounded="md">
            <Pressable>
              <Icon
                as={Feather}
                name="plus"
                size={6}
                color="#000"
                marginRight={4}
              />
            </Pressable>
          </Box>
          <Box alignItems="center" rounded="md">
            <Pressable>
              <Icon
                as={Feather}
                name="youtube"
                size={6}
                color="#000"
                marginRight={4}
              />
            </Pressable>
          </Box>
          <Box>
            <Pressable>
              <Avatar
                source={{
                  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU",
                }}
                height={6}
                width={6}
              />
            </Pressable>
          </Box>
        </Pressable>
      </HStack>
    </Box>
  );
};

export default Footer;
