import React from "react";
import { Box, Container, Grid, GridItem, HStack, Heading, Text } from "@chakra-ui/react";
import { VStack, IconButton, useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import Navbar from "./components/Navbar";
import Home from "./components/Home";



function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  
// 

return(
  <Home/>
)  

  
}

export default App;




