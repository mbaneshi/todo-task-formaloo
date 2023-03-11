// Home.js file
import { useEffect, useState } from "react";
import supabaseClient from "../supabaseClient";
import { Grid, GridItem, Button, VStack } from "@chakra-ui/react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

const Home = () => {
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem("todos")) || []
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function deleteTodo(id) {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }

  function addTodo(todo) {
    setTodos([...todos, todo]);
  }
  const [group, setGroup] = useState(null);

  useEffect(() => {
    supabaseClient
      .from("group")
      .select("*")
      .then(({ data, error }) => {
        if (!error) {
          // setGroup(data)

          setGroup(data);
        }
      });
  }, []);

  return (
    <>
      <Grid templateColumns={"repeat(12,1fr)"}>
        <GridItem minH={"100vh"} colSpan={{ base: 12, sm: 4, md: 3, xl: 2 }}>
          <VStack>
            {group?.map((e) => {
              return (
                <>
                  <Button
                    p={2}
                    m={2}
                    key={e.id}
                    colorScheme="teal"
                    px="8"
                    type="submit"
                  >
                    {e.title}
                  </Button>
                  <AddTodo addTodo={addTodo} />
                </>
              );
            })}
          </VStack>
        </GridItem>
        <GridItem colSpan={{ base: 12, sm: 8, md: 9, xl: 10 }}>
          <TodoList todos={todos} deleteTodo={deleteTodo} />
        </GridItem>
      </Grid>
    </>
  );
};
export default Home;
