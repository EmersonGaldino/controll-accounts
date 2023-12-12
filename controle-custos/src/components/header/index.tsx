import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import {
  Avatar,
  Box,
  Button,
  FormControl,
  HStack,
  Icon,
  Input,
  Menu,
  Modal,
  Pressable,
  VStack,
  Text,
  Badge,
} from "native-base";

const Header: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleModal = (open: boolean) => {
    return (
      <Modal
        isOpen={modalVisible}
        onClose={() => setModalVisible(false)}
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
                setModalVisible(false);
              }}
            >
              Proceed
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    );
  };
  return (
    <>
      <HStack
        padding={4}
        w="100%"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Menu
            shadow={2}
            w="190"
            trigger={(triggerProps) => {
              return (
                <Pressable accessibilityLabel="Mais opcoes" {...triggerProps}>
                  <Icon as={Feather} name="menu" size={7} color="#000" />
                </Pressable>
              );
            }}
          >
            <Menu.Item>Home</Menu.Item>
            <Menu.Group title="Usuário">
              <Menu.Item>Perfil</Menu.Item>
              <Menu.Item>Sair</Menu.Item>
            </Menu.Group>
          </Menu>
        </Box>
        <Box flexDir="row" alignItems="center" rounded="md">
          <Pressable>
            <Badge
              colorScheme="danger"
              rounded="full"
              mb={-3}
              mr={3}
              zIndex={1}
              variant="solid"
              alignSelf="flex-end"
              _text={{ fontSize: 2, color: "danger.600" }}
            >
              5
            </Badge>

            <Icon
              as={Feather}
              name="bell"
              size={7}
              color="#000"
              marginRight={4}
            />
          </Pressable>
          <Pressable>
            <Badge
              colorScheme="danger"
              rounded="full"
              mb={-5}
              mr={0.4}
              zIndex={1}
              variant="solid"
              alignSelf="flex-end"
              _text={{ fontSize: 12 }}
            >
              4
            </Badge>
            <Icon
              as={Feather}
              name="message-circle"
              size={8}
              color="#000"
              marginRight={4}
            />
          </Pressable>
        </Box>
      </HStack>
    </>
  );
};

export default Header;
