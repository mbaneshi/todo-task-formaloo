import { Button, Flex, Heading, Spacer } from "@chakra-ui/react";
import Menubar from "./Menubar";
const Navnar = () => {
  return (
    <>
      <Flex p={2} alignItems={"center"}>
        <Heading
          as="h5"
          p={2}
          bgGradient="linear(to-r, blue.500, teal.300, blue.500)"
          bgClip="text"
        >
          Formaloo Task
        </Heading>

        <Spacer />
        <Button>Login</Button>
      </Flex>
    </>
  );
};
export default Navnar;
