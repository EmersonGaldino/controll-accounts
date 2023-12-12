import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import {
  Avatar,
  Box,
  HStack,
  Icon,
  Pressable,
  Modal,
  FormControl,
  Button,
  Input,
} from "native-base";

const Footer: React.FC = () => {
  const [selected, setSelected] = useState(1);
  const [open, setOpen] = useState(false);

  const handleCreateNewPost = () => {};
  return (
    <View style={styles.footer}>
      <Box
        width="100%"
        maxW="300px"
        alignSelf="center"
        marginTop="90px"
        flex={1}
        flexDirection="row"
        justifyContent="space-between"
        backgroundColor="#000"
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
          <Pressable
            onPress={() => {
              setOpen(true);
            }}
          >
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
      </Box>
      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        avoidKeyboard
        justifyContent="flex-end"
        bottom="4"
        size="lg"
      >
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Forgot Password?</Modal.Header>
          <Modal.Body>
            Enter email address and we'll send a link to reset your password.
            <FormControl mt="3">
              <FormControl.Label>Email</FormControl.Label>
              <Input />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button
              flex="1"
              onPress={() => {
                setOpen(false);
              }}
            >
              Proceed
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  cursor: {},
  footer: {},
});

export default Footer;
