import React from "react";
import { Flex } from "@chakra-ui/react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  return (
    <Flex>
      {/* Header */}
      <Header />
      {/* Main */}
      <Main />
    </Flex>
  );
}

export default App;
