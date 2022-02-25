import React from "react";
import { Box } from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";
import { useSelector, useDispatch } from "react-redux";
import { ThemeSliceActions } from "../../store/store";
import iconSun from "../../assets/icon-sun.svg";
import iconMoon from "../../assets/icon-moon.svg";
import avatar from "../../assets/user.jpeg";

function ThemeBox() {
  const curTheme = useSelector((state) => state.theme.curTheme);
  const dispatch = useDispatch();

  const themeIconClickHandler = () => {
    if (curTheme === "dark") {
      dispatch(ThemeSliceActions.setCurTheme("light"));
      return;
    }
    dispatch(ThemeSliceActions.setCurTheme("dark"));
  };
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
        <Image
          onClick={themeIconClickHandler}
          src={curTheme === "dark" ? iconSun : iconMoon}
          alt={curTheme === "light" ? "Moon Icon" : "Sun Icon"}
        />
      </Box>
      <Box
        cursor="pointer"
        mb="2rem"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Image h="4rem" w="4rem" borderRadius="50%" src={avatar} alt="Avatar" />
      </Box>
    </Box>
  );
}

export default ThemeBox;
