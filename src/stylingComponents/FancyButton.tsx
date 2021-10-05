
import React from 'react'
import "./FancyButton.css"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    Text:string
}

const FancyButton:React.FC<ButtonProps>=({Text})=> {
    return (
        <div>
            <button className="link-button" >{Text}</button>
        </div>
    )
}

export default FancyButton
