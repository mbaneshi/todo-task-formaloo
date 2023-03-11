import React from "react";
import { Heading } from "@chakra-ui/react";
import { VStack, IconButton, useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

function MiniApp() {

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <VStack p={2}>
      <IconButton
        icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
        isRound="true"
        size="lg"
        alignSelf="flex-end"
        onClick={toggleColorMode}
      />
      <Heading
        mb="4"
        fontWeight="extrabold"
        size="xl"
        bgGradient="linear(to-r, blue.500, teal.300, blue.500)"
        bgClip="text"
      >
        Todo Task Group
      </Heading>

    </VStack>
  );
}

export default MiniApp;
