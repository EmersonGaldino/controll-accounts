import React from "react";
import { View } from "react-native";
import {
  NativeBaseProvider,
  useColorMode,
  Text,
  Button,
  Center,
  Box,
  useColorModeValue,
} from "native-base";
// import { Container } from './styles';

const ColorMode: React.FC = () => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue("Light", "Dark");
  const bg = useColorModeValue("warmGray.50", "coolGray.800");
  return (
    <Center>
      <Box p="4" flex="1" bg={bg} maxW="100%" w="100%" mt={10} safeArea>
        <Text fontSize="lg" display="flex" mb={20}>
          The active color mode is{" "}
          <Text bold fontSize="18px">
            {text}
          </Text>
        </Text>
        <Button onPress={toggleColorMode} h={10}>
          Toggle
        </Button>
      </Box>
    </Center>
  );
};

export default ColorMode;
