import React, { useState } from "react";
import { Box, Text, Heading } from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";
import DownArrow from "../../../assets/icon-arrow-down.svg";
import TopBarButton from "./TopBarButton";
import FIlterInvoices from "./FIlterInvoices";

function TopNavigation() {
  const [filterBoxStatus, setFilterBoxStatus] = useState(false);

  const onClickFilterHandler = () => {
    setFilterBoxStatus((prevStatus) => !prevStatus);
  };

  document.addEventListener("click", (event) => {
    if (
      event.target.closest("#filterStatusBox")?.id === "filterStatusBox" ||
      event.target.closest("#filterText")?.id === "filterText"
    )
      return;
    setFilterBoxStatus(false);
  });

  return (
    <Box ml="auto" display="flex" alignItems="center" position="relative">
      <Box
        display="flex"
        alignItems="center"
        mr={{ base: "1.5rem", sm: "3rem" }}
        cursor="pointer"
        onClick={onClickFilterHandler}
        id="filterText"
      >
        <Heading
          fontSize="1.2rem"
          letterSpacing="-0.25px"
          fontWeight="bold"
          mr="1rem"
        >
          Filter
          <Text display={{ base: "none", sm: "inline-block" }}>
            &nbsp; By Status
          </Text>
        </Heading>
        <Image
          src={DownArrow}
          className={filterBoxStatus ? "rotate" : "notRotate"}
          h="4.23px"
          w="8.26px"
          alt="Down Arrow"
        />
      </Box>
      <FIlterInvoices display={filterBoxStatus ? "block" : "none"} />
      <TopBarButton />
    </Box>
  );
}

export default TopNavigation;
