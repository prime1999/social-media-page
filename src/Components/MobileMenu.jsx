import { useRef } from "react";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  Box,
} from "@chakra-ui/react";

const MobileMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const drawerStyles = {
    bg: "rgba(0, 0, 0, 0.4)",
    opacity: "0.4",
  };
  return (
    <div className="container mx-auto w-10/12">
      <Button
        as="button"
        className="lg:hidden"
        display={{ base: "block", lg: "none" }}
        bg="red"
        onClick={onOpen}
      >
        Open
      </Button>

      <div className="absolute bg-white lg:hidden">
        <Drawer
          as="div"
          display={{ base: "block", lg: "none" }}
          className="lg:hidden"
          sx={drawerStyles}
          isOpen={isOpen}
          onClose={onClose}
          placement="left"
        >
          <DrawerOverlay sx={drawerStyles} />
          <DrawerContent>
            <DrawerCloseButton mt="10px" />
            <div className="p-8">
              <DrawerHeader>Example</DrawerHeader>
              <DrawerBody>My test drawer</DrawerBody>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
};

export default MobileMenu;
