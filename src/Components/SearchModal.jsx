import { useState } from "react";
import { RxMagnifyingGlass } from "react-icons/rx";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
} from "@chakra-ui/react";

function SearchModal() {
  const OverlayTwo = () => (
    <ModalOverlay bg="none" backdropFilter="auto" backdropBlur="2px" />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<OverlayTwo />);

  return (
    <>
      <Button
        ml="4"
        borderRadius="full"
        display={{ base: "block", lg: "none" }}
        onClick={() => {
          setOverlay(<OverlayTwo />);
          onOpen();
        }}
      >
        <RxMagnifyingGlass className="text-2xl" />
      </Button>

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <input
              type="text"
              placeholder="Search devUp..."
              className="w-full mt-8 p-2 border-b font-poppins text-darkGray focus:outline-0"
            />
            <button className="bg-blue mt-4 text-white w-full rounded-lg py-2 font-poppins font-semibold">
              Search
            </button>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default SearchModal;
