import { Box, NativeBaseProvider, extendTheme } from "native-base";
import Home from "./src/screen/home";
import { LinearGradient } from "expo-linear-gradient";

const config = {
  dependencies: {
    "linear-gradient": LinearGradient,
  },
  useSystemColorMode: false,
  initialColorMode: "dark",
};

export default function App() {
  const customTheme = extendTheme({ config });
  return (
    <NativeBaseProvider config={config} theme={customTheme}>
      <Box safeArea flex={1} flexDirection="column">
        <Home />
      </Box>
    </NativeBaseProvider>
  );
}
