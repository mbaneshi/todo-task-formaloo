import React from "react";
import { Heading } from "@chakra-ui/react";
import { VStack, IconButton, useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

function MiniApp() {
  // const initialTodos = [
  //   {
  //     id: 1,
  //     body: "Learn React",
  //   },
  //   {
  //     id: 2,
  //     body: "Learn Chakra UI",
  //   },
  // ];

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <VStack p={4}>
      <IconButton
        icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
        isRound="true"
        size="lg"
        alignSelf="flex-end"
        onClick={toggleColorMode}
      />
      <Heading
        mb="8"
        fontWeight="extrabold"
        size="xl"
        bgGradient="linear(to-r, blue.500, teal.300, blue.500)"
        bgClip="text"
      >
        Todo Task Group
      </Heading>
      {/* <TodoList todos={todos} deleteTodo={deleteTodo} />
      <AddTodo addTodo={addTodo} /> */}
    </VStack>
  );
}

export default MiniApp;
