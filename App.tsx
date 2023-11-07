import React from "react";
import { Box, NativeBaseProvider, Text } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <Box>
        <Text>Galdino</Text>
      </Box>
    </NativeBaseProvider>
  );
}
