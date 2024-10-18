import { useEffect, useState } from "react";
import USERIMG from "./IMAGES/image-amyrobson.png"


function Local({fetchLocalItems}) {

  const [userCommand, setUserCommand] = useState({content:"",replies:[]});

  let Local_Ar = JSON.parse(localStorage.getItem("command")) || [];


  // handle change function for handling user input command actions
  const handlechange = (event) => {
    const { name, value } = event.target;
   
    setUserCommand({content:value,replies:[]});
    
  };

  // send function for send the data to local storage
  const send = () => {
    let a=document.getElementById("Usercommand")
   if(a.value!=""){
    Local_Ar.push(userCommand);
    localStorage.setItem("command", JSON.stringify(Local_Ar));
    setUserCommand("");
    fetchLocalItems()
    a.value=""
  }
  else{
    alert("please enter the value")
  }

  };

 



   return (
    <>
      <div id="chat">
      <img src={USERIMG}></img>
      <textarea
        id="Usercommand"
        type="text"
        onChange={handlechange}
        name="command"
        placeholder="Add a command ....."
      />

     <button onClick={send}>send</button>
      </div>
    </>
  );
}

export default Local;
