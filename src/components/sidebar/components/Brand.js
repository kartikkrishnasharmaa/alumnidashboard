import React from "react";

// Chakra imports
import { Flex, useColorModeValue } from "@chakra-ui/react";
import Illustration from "assets/img/auth/logo.png";

// Custom components
import { HorizonLogo } from "components/icons/Icons";
import { HSeparator } from "components/separator/Separator";

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue("navy.700", "white");

  return (
    <Flex align='center' direction='column'>
      {/* <Illustration h='26px' w='175px' my='32px' color={logoColor} /> */}
      <img src={Illustration} />
      <HSeparator mb='20px' />
    </Flex>
  );
}

export default SidebarBrand;
