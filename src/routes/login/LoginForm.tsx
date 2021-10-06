import React, { useState } from "react";
import { Link } from "react-router-dom";
import FancyButton from "../../stylingComponents/FancyButton";
import "./LoginForm.css";

//This component contains the input elements for the login mask
interface LoginFormProps {
  Login: Function;
  error: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ Login, error }) => {
  const [details, setDetails] = useState<{ author: string; password: string }>({
    author: "",
    password: "",
  });

  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    Login(details);
  };

  const onTextChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="form-inner">
        <h2>Login</h2>
        {error !== "" ? <div id="error">{error}</div> : ""}
        <div className="form-group">
          <label htmlFor="author">Name:</label>
          <input
            type="text"
            name="author"
            id="author"
            onChange={(e) => onTextChange(e)}
            value={details.author}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => onTextChange(e)}
            value={details.password}
          />
          <label id="pw-label">
            It's a dummy! Use password "admin123" to login!
          </label>
        </div>
        <FancyButton type="submit" Text="Login for the chat!" />
        <div>
          <Link to="/random-commands">
            <FancyButton Text="See random socket commands!" />
          </Link>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
