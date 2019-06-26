import React from "react";

interface Props {
  label: string;
  backgroundColor: string;
  onClick: () => void;
  size?: number;
}

export default ({ label, backgroundColor, onClick, size }: Props) => {
  return (
    <button
      style={{
        borderRadius: "50%",
        width: size || 50,
        height: size || 50,
        fontSize: 18,
        backgroundColor,
        border: "none",
        color: "white"
      }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
