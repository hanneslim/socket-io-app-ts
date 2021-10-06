import React, { useState } from "react";
import DatePicker from "react-date-picker";
import { Link } from "react-router-dom";
import FancyButton from "../../stylingComponents/FancyButton";
import "./Commands.css";

//A datepicker wich displays at the beginning the date which was sent by the server

interface IDateProps {
  date: string;
}

const DateCommand: React.FC<IDateProps> = ({ date }) => {
  const year: number = +date.substring(0, 4);
  const month: number = +date.substring(5, 7);
  const day: number = +date.substring(8, 10);

  const [value, onChange] = useState<Date>(new Date(year, month, day));

  return (
    <div id="App">
      <div id="form">
        <div id="form-inner">
          <h2>Please choose a date:</h2>

          <div>
            <DatePicker onChange={onChange} value={value} />
          </div>
          <div id="form-group">
            <Link to="/">
              <FancyButton Text="Go back to Login" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateCommand;
