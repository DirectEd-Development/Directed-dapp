import React from "react";

type ButtonType = {
  children?: React.ReactNode;
  loading?: boolean;
  className?: string;
  onCick?(event?: React.MouseEvent): void;
  loadingIndicator?: string | React.ReactNode;
};

const Button = ({
  onCick,
  children,
  loading,
  className,
  loadingIndicator,
}: ButtonType) => {
  return (
    <button
      onClick={onCick}
      className={`btn capitalize ${loading && "loading"} ${className}`}
    >
      {loading ? <>{loadingIndicator}</> : <>{children}</>}
    </button>
  );
};

export default Button;
