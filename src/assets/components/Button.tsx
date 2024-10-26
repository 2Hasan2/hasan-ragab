import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  color?: "primary" | "secondary";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  color = "primary",
  className,
}) => {
  const colorClasses = {
    primary: "bg-theme1-primary text-theme1-light",
    secondary: "bg-theme1-secondary text-theme1-light",
  };

  return (
    <button
      onClick={onClick}
      className={`flex flex-row gap-2 rounded-full py-2 px-4 font-semibold text-shadow-lg ${colorClasses[color]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
