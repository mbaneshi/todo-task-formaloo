import { Box, Button, Flex, Heading, Spacer } from "@chakra-ui/react"
import Menubar from "./Menubar"
const Navnar =()=>{
    return(
        <>
        
        <Flex as="navbar" p={2} alignItems={"center"}>

            <Heading bg={"blackAlpha.50"}  as="h3" p={2}>Keep My Todo Orgnize !</Heading>
            <Menubar/>
            
            <Spacer/>
            <Box p={3}>M</Box>
            <Button bg={"gray.200"}>Login</Button>
        </Flex>
        </>
    )
}
export default Navnar;