import React from "react";

type NextthousandProps = {
  balance: number;
};

const Nextthousand: React.FC<NextthousandProps> = ({ balance }) => {
  const amountNeeded = Math.max((Math.floor(balance / 1000) + 1) * 1000 - balance, 0);

  return <p>{`₳${amountNeeded} needed to reach the next 1,000 ADA`}</p>;
};

export default Nextthousand;
