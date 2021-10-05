
import React, { useEffect, useState } from "react"
import io, { Socket} from "socket.io-client"
import CompleteCommand from "../pages/commandPages/CompleteCommand"
import DateCommand from "../pages/commandPages/DateCommand"
import MapCommand from "../pages/commandPages/MapCommand"
import RateCommand from "../pages/commandPages/RateCommand"

//This component handles the different server commands for the widgets


interface ICommandProps {
    author:string;
    command:{
        type:{
            date:string
            map:string 
            complete:string
            rate:string
        }
        data:any
    }
}

const GetCommands:React.FC<ICommandProps>= ()=> {

    const [commandData, setCommandData ] = useState<ICommandProps|null>()
    

    //connection to the server
	useEffect(
		():any => {
			const socket:Socket = io("https://demo-chat-server.on.ag/")
            socket.emit('command');
			socket.on('command', ( data)=> {setCommandData(data)});
			return () => socket.disconnect()
		},
		[]
	)
    
    
    let typeData:string= commandData?.command.type as unknown as string
    

    //console.log(commandData?.command.data)

   
    

    let render:JSX.Element;

    //Depending on the type of data from the server the corresponding widget gets rendered
    if(typeData==="map"){
        let lat:number=commandData?.command.data.lat
        let lng:number=commandData?.command.data.lng     
        render=<MapCommand lat={lat} lng={lng}/>}
    else if(typeData==="complete") {
        let button1:string = commandData?.command.data[0]
        let button2:string = commandData?.command.data[1]
        render= <CompleteCommand button1Text={button1} button2Text={button2}/>}
    else if(typeData==="date") {
        let date:string= commandData?.command.data
        render= <DateCommand date={date}/>}
    else {render=<RateCommand/>}


    return (
        <div>
            {render}
        </div>
    )
}

export default GetCommands
