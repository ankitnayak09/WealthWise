import { VStack, IconButton } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";
import { BiSun } from "react-icons/bi";
import { BsMoonStarsFill } from "react-icons/bs";
import React from "react";

const Assets = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <VStack>
      <IconButton
        className="mode-btn"
        icon={isDark ? <BiSun /> : <BsMoonStarsFill />}
        isRound="true"
        onClick={toggleColorMode}
      />
    </VStack>
  );
};

export default Assets;
