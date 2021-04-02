import { Box, Drawer, useBreakpointValue, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerBody } from "@chakra-ui/react";
import React from "react";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { SideBarNav } from "./SidebarNav";

export function SideBar() {
  const { isOpen, onClose } = useSidebarDrawer()
  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  })
  if (isDrawerSidebar) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>

        <DrawerOverlay>
          <DrawerContent bg="gray.800" p="4">
            <DrawerCloseButton mt="6" />
            <DrawerHeader>Navegação</DrawerHeader>

            <DrawerBody>
              <SideBarNav />
            </DrawerBody>

          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    );
  }
  return (
    <Box as="aside" w="64" mr="8">
      <SideBarNav />
    </Box>
  );
}