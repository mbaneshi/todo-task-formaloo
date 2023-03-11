import {
  useDisclosure,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
  useColorModeValue,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

const Menubar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Menu isOpen={isOpen}>
      <MenuButton
        variant="ghost"
        mx={1}
        py={[1, 2, 2]}
        px={4}
        borderRadius={5}
        _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
        aria-label="Courses"
        fontWeight="normal"
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
      >
        More {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </MenuButton>
      <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
        <MenuItem>todos</MenuItem>
        <MenuItem>groups</MenuItem>
        <MenuItem>joks</MenuItem>
      </MenuList>
    </Menu>
  );
};
export default Menubar;
