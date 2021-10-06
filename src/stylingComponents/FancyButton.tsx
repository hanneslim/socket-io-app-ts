import React from "react";
import styled from "styled-components";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  Text: string;
}

const Button = styled.button`
  appearance: none;
  background: none;
  border: none;
  outline: none;
  display: inline-block;
  padding: 10px 15px;
  border-radius: 8px;
  background-image: linear-gradient(
    to right,
    #ffce00 50%,
    #ffce00 50%,
    #fe4880
  );
  background-size: 200%;
  background-position: 0%;
  transition: 0.4s;
  color: #fff;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    background-position: 100% 0%;
  }
`;

const FancyButton: React.FC<ButtonProps> = ({ Text }) => {
  return (
    <div>
      <Button>{Text}</Button>
    </div>
  );
};

export default FancyButton;
