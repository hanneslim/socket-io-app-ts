import TextField from "@material-ui/core/TextField";
import React, { useEffect, useRef, useState } from "react";
import io, { Socket } from "socket.io-client";
import "./Chat.css";
import "../commands/Commands.css";
import { Link } from "react-router-dom";
import FancyButton from "../../stylingComponents/FancyButton";

//You can communicate here with the server and send messages

interface IChatProps {
  Author: string;
}

const Chat: React.FC<IChatProps> = ({ Author }) => {
  const [state, setState] = useState<{ message: string; author: string }>({
    message: "",
    author: Author,
  });
  const [chat, setChat] = useState<{ message: string; author: string }[]>([]);

  const socketRef = useRef<Socket>();

  //conncection to the server
  useEffect((): any => {
    socketRef.current = io("https://demo-chat-server.on.ag/");
    socketRef.current.on("message", ({ author, message }) => {
      setChat([...chat, { author, message }]);
    });
    return () => socketRef.current?.disconnect();
  }, [chat]);

  const onTextChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const onMessageSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    const { author, message } = state;
    socketRef.current?.emit("message", { author, message });
    e.preventDefault();
    setState({ message: "", author });
  };

  //render the response messages from the server
  const renderChat = (): JSX.Element[] => {
    return chat.map(({ author, message }, index: number) => (
      <div key={index}>
        <h3>
          {author}: <span>{message}</span>
        </h3>
      </div>
    ));
  };

  /*
	Two TextFields for author and message
	One Button to send the message
	One Button to go to the server command widgets
	The rest is just for styling
	*/
  return (
    <div>
      <div id="form">
        <div id="form-inner">
          <div className="card">
            <form id="messengerStyle" onSubmit={onMessageSubmit}>
              <h1>Messenger</h1>
              <div className="name-field">
                <TextField
                  name="author"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    onTextChange(e)
                  }
                  value={state.author}
                  label="Name"
                />
              </div>
              <div>
                <TextField
                  name="message"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    onTextChange(e)
                  }
                  value={state.message}
                  id="outlined-multiline-static"
                  variant="outlined"
                  label="Message"
                />
              </div>
              <FancyButton Text="Send Message" />
            </form>
            <div className="render-chat">
              <h1>Chat Log</h1>
              {renderChat()}
            </div>
          </div>

          <div>
            <Link to="/random-commands">
              <FancyButton Text="See random socket commands!" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
