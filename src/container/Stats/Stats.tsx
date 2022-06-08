import React, { useState } from "react";
import { ParsedFullStats } from "../../types/parsedDataTypes";
import { FullStatsItem } from "../StatsItem/StatsItem";
import { FullStatsButton, FullStatsContainer, FullStatsList } from "./StatsStyle";

export interface FullStatsProp {
  data: ParsedFullStats;
}

const FullStats: React.FC<FullStatsProp> = ({ data }) => {
  const [isOpen, setOpen] = useState(false);

  const openToggle = () => {
    setOpen((state) => !state);
  };

  return (
    <FullStatsContainer>
      <FullStatsButton isOpen={isOpen} onClick={openToggle}>Market Snapshot</FullStatsButton>
      <FullStatsList isOpen={isOpen}>
        {data.map((item) => (
          <FullStatsItem key={item.title} title={item.title} value={item.value} />
        ))}
      </FullStatsList>
    </FullStatsContainer>
  );
};

export { FullStats };
