import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from "@chakra-ui/react";

import React from "react";
import "./Assets.css";

const Assets = () => {
  return (
    <div className="stats">
      <Stat>
        <StatLabel>Assets</StatLabel>
        <StatNumber>
          <span>&#8377;</span>35.5K
        </StatNumber>
        <StatHelpText>
          <StatArrow type="increase" />
          23.36%
        </StatHelpText>
        <StatHelpText>Last Updated: Feb 21, 2023</StatHelpText>
      </Stat>
    </div>
  );
};

export default Assets;
