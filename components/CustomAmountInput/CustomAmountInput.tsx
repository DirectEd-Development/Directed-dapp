import React from "react";

type CustomAmountInputProps = {
  amount: string;
  onChange: (value: string) => void;
};

const CustomAmountInput = ({ amount, onChange }: CustomAmountInputProps) => {
  return (
    <input
      type="text"
      placeholder="Custom Amount"
      onChange={(e) => onChange(e.target.value)}
      value={amount}
    />
  );
};

export default CustomAmountInput;
