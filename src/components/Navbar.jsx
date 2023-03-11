import { Button, Divider, Flex, Heading, Spacer } from "@chakra-ui/react";

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

      </Flex>
      <Divider />
    </>
  );
};
export default Navnar;
