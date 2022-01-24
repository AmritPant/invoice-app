import React from "react";
import { Box } from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";

import iconSun from "../../assets/icon-sun.svg";
import iconMoon from "../../assets/icon-moon.svg";
import avatar from "../../assets/user.jpeg";

function ThemeBox() {
  return (
    <Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        pb="2rem"
        mb="1rem"
        borderBottom="1px solid #494E6E"
        cursor="pointer"
      >
        <Image src={iconSun} />
      </Box>
      <Box
        cursor="pointer"
        mb="2rem"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Image h="4rem" w="4rem" borderRadius="50%" src={avatar} />
      </Box>
    </Box>
  );
}

export default ThemeBox;
