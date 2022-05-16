import React from "react";
import { Box, Heading, Link } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import avatarImg from "../../assets/user.jpeg";
import { useSelector } from "react-redux";

function Proflle() {
  const curTheme = useSelector((state) => state.theme.curTheme);
  const Links = [
    {
      name: "Frontend Mentor Profile ",
      href: "https://www.frontendmentor.io/profile/AmritPant",
    },
    {
      name: "Follow Me on Twitter",
      href: "https://twitter.com/Amrit41424619",
    },
    {
      name: "Visit the Solution",
      href: "https://github.com/AmritPant/invoice-app",
    },
  ];
  return (
    <Box
      bgColor={`var(--theme-${curTheme}-secondaryBg)`}
      color={curTheme === "dark" ? "#fff" : "#0c0e16"}
      position="absolute"
      top={{ base: "30%", sm: "50%" }}
      left="50%"
      padding="2rem 4rem"
      width="30rem"
      transform="translate(-50% ,-50%)"
      borderRadius="8px"
      zIndex="600"
      display="flex"
      flexDir="column"
      justifyContent="center"
    >
      <Image
        src={avatarImg}
        alt="creator Photo"
        h="20rem"
        w="20rem"
        borderRadius="50%"
      />
      <Heading ml="4rem" mt="2rem">
        Amrit Pant{" "}
      </Heading>
      <Box>
        {Links.map((link) => {
          return (
            <Link
              style={{ fontSize: "1.5rem", display: "block" }}
              href={link.href}
            >
              {link.name}
            </Link>
          );
        })}
      </Box>
    </Box>
  );
}

export default Proflle;
