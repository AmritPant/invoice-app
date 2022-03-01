import React from "react";
import { Box } from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";
import { useSelector, useDispatch } from "react-redux";
import {
  ThemeSliceActions,
  ProfileSliceActions,
  ModalSliceActions,
} from "../../store/store";
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

  const onClickImageHandler = () => {
    dispatch(ProfileSliceActions.setProfileStatus(true));
    dispatch(ModalSliceActions.setModalStatus(true));
  };
  return (
    <Box
      display="flex"
      flexDir={{
        base: "row",
        xl: "column",
      }}
      alignItems="center"
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height={{ base: "100%", xl: "auto" }}
        width={{ base: "auto", xl: "100%" }}
        p={{ base: "0 2rem", xl: "2rem 0" }}
        m={{ base: "0 1rem", xl: "1rem 0" }}
        borderBottom={{ xl: "1px solid #494E6E" }}
        borderRight={{ base: "1px solid #494E6E", xl: "none" }}
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
        p={{ base: "0 2rem", xl: "2rem 0" }}
        m={{ base: "0 1rem", xl: "1rem 0" }}
      >
        <Image
          h="4rem"
          w="4rem"
          borderRadius="50%"
          src={avatar}
          alt="Avatar"
          onClick={onClickImageHandler}
        />
      </Box>
    </Box>
  );
}

export default ThemeBox;
