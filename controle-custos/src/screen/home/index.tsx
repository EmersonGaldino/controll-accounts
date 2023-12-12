import React, { useEffect } from "react";
import { Alert, Box, FlatList, HStack, Text } from "native-base";
import Header from "../../components/header";
import Storys from "../../components/storys";
import Feed from "../../components/feed";
import Footer from "../../components/footer";
import { LogBox } from "react-native";

const data = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    fullName: "Aafreen Khan",
    timeStamp: "12:47 PM",
    recentText: "Good Day!",
    avatarUrl:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    fullName: "Sujitha Mathur",
    timeStamp: "11:11 PM",
    recentText: "Cheer up, there!",
    avatarUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    fullName: "Anci Barroco",
    timeStamp: "6:22 PM",
    recentText: "Good Day!",
    avatarUrl: "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg",
  },
  {
    id: "68694a0f-3da1-431f-bd56-142371e29d72z",
    fullName: "Aniket Kumar",
    timeStamp: "8:56 PM",
    recentText: "All the best ",
    avatarUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU",
  },
  {
    id: "28694a0f-3da1-471f-bd96-142456e29d72sas",
    fullName: "Kiara",
    timeStamp: "12:47 PM",
    recentText: "I will call today.",
    avatarUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63kk",
    fullName: "Sujitha Mathur",
    timeStamp: "11:11 PM",
    recentText: "Cheer up, there!",
    avatarUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72a",
    fullName: "Anci Barroco",
    timeStamp: "6:22 PM",
    recentText: "Good Day!",
    avatarUrl: "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg",
  },
];

const Home: React.FC = () => {
  useEffect(() => {
    LogBox.ignoreLogs([
      "In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app.",
    ]);
  }, []);
  const handleGetItensList = () => {
    setInterval(() => {
      data.push(
        ...data,
        {
          id: "68694a0f-3da1-431f-bd56-142371e29d72",
          fullName: "Aniket Kumar",
          timeStamp: "8:56 PM",
          recentText: "All the best ",
          avatarUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU",
        },
        {
          id: "28694a0f-3da1-471f-bd96-142456e29d72",
          fullName: "Kiara",
          timeStamp: "12:47 PM",
          recentText: "I will call today.",
          avatarUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU",
        }
      );
    }, 1500);
  };

  return (
    <Box>
      <Header />
      <Box maxH="450px">
        <Box paddingX={4}>
          <FlatList
            horizontal={true}
            data={data}
            renderItem={({ item }) => <Storys data={item} />}
            showsHorizontalScrollIndicator={false}
          />
        </Box>
        <Box paddingX={4}>
          <FlatList
            data={data}
            renderItem={({ item }) => <Feed data={item} />}
            showsVerticalScrollIndicator={false}
            // onEndReached={() => handleGetItensList()}
          />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;
