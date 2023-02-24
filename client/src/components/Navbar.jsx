import "./Navbar.css";

import { FaHome } from "react-icons/fa";
import { AiFillPlusCircle } from "react-icons/ai";
import { MdSpaceDashboard } from "react-icons/md";
import { NavLink } from "react-router-dom";

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
} from "@chakra-ui/react";
import { useRef } from "react";

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <div className="footer">
      <NavLink to="/" className="icon">
        <div>
          <FaHome />
        </div>
      </NavLink>
      <div className="icon">
        <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
          {/* Open */}
          <AiFillPlusCircle />
        </Button>
        <Drawer
          isOpen={isOpen}
          placement="bottom"
          onClose={onClose}
          finalFocusRef={btnRef}
          size="full"
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create your account</DrawerHeader>

            <DrawerBody>
              <Input placeholder="Type here..." />
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="blue">Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
      <NavLink to="/dashboard" className="icon">
        <div>
          <MdSpaceDashboard />
        </div>
      </NavLink>
    </div>
  );
}

export default Navbar;
