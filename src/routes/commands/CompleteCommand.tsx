import React from "react";
import { Link } from "react-router-dom";
import FancyButton from "../../stylingComponents/FancyButton";
import "./Commands.css";

function refreshPage() {
  window.location.reload();
}
//A widget which simply asks you if you want to stay or leave the page

interface IButtonProps {
  button1Text: string;
  button2Text: string;
}

const CompleteCommand: React.FC<IButtonProps> = ({
  button1Text,
  button2Text,
}) => {
  return (
    <div id="App">
      <div id="form">
        <div id="form-inner">
          <h2>Do you want to close this conversation and go back to login?</h2>

          <div id="form-group">
            <Link to="/">
              <FancyButton Text={button1Text} />
            </Link>
          </div>
          <div id="form-group">
            <FancyButton onClick={refreshPage} Text={button2Text} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompleteCommand;
