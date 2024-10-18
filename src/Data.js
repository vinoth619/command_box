import { useState } from "react";
import Local from "./Local";
import REPLYIMG from "./IMAGES/icon-reply.svg";
import USERIMG from "./IMAGES/image-amyrobson.png";
import DELETEIMG from "./IMAGES/icon-delete.svg";
import EDITIMG from "./IMAGES/icon-edit.svg";
import ur from "./IMAGES/image-juliusomo.png";
import { User2, User2Input ,Head } from "./USER2";

function DATA(props) {
  const [localArray, setLocalArray] = useState(
    JSON.parse(localStorage.getItem("command")) || []
  );

  const [replies, setReplies] = useState({firstreplies :"" });
  const [ind, setin] = useState();

  const [second, setSecond] = useState("");

  const [Userdetails, setUserdetails] = useState({ name: "amyrobson" });

  const fetchLocalItems = () => {
    setLocalArray(JSON.parse(localStorage.getItem("command")));
  };


  // delte function
  const DELETEFUN = (i) => {
    let fil = localArray.filter((e, index) => {
      return i != index;
    });
    setLocalArray(fil);
    localStorage.setItem("command", JSON.stringify(fil));
  };

  // EDITFUN
  const EDITFUN = (i) => {
    let edit = localArray.map((e, index) => {
      if (i == index) {
        setin(i);
      }
    });
  };

  //handle edit

  const handleEdit = (event) => {
    const para2 = document.getElementsByClassName("para2");
    const { name, value } = event.target;
    para2[ind].value = value;
  };
  // onEDIT
  const EDITED = (i) => {
    const para2 = document.getElementsByClassName("para2");
    let row = localArray;
    row[i].content = para2[i].value;

    localStorage.setItem("command", JSON.stringify(row));
    setLocalArray(JSON.parse(localStorage.getItem("command")));
  };

  // handling replies
  const handleReply = (event) => {
    const { name, value } = event.target;
    setReplies({ firstreplies: value });
  };

 

  const REPLY = (i) => {
    const jvl = document.getElementsByClassName("jvl");
    const inp = document.getElementsByClassName("jvl2");


    let DUmmy = localArray;
    
    DUmmy[i].replies.push(replies);
    console.log()
    localStorage.setItem("command", JSON.stringify(DUmmy));
    setLocalArray(JSON.parse(localStorage.getItem("command") || []));
    setReplies({ replies: "" });
    jvl[i].value = "@amyrobson";
  };

let row = localArray.map((e, i) => {
  
  
   

     
   
         
    
     
    let re = localArray[i]?.replies?.map((e, i) => {

      

   


      return (

        
          <div className="seconduser">
        <div>{User2(i)}</div>
     
      <p>{e.firstreplies}</p>
     </div>
        
        
      );
    }
  
  
  );

    const fle = document.getElementsByClassName("crud");
    const fle2 = document.getElementsByClassName("crud2");
    const para = document.getElementsByClassName("para");
    const para2 = document.getElementsByClassName("para2");
    const bt = document.getElementsByClassName("bt");
    const RLIST = document.getElementsByClassName("replylist");
    const jvl = document.getElementsByClassName("jvl");
    const jv2 = document.getElementsByClassName("jvl2");
          
           

    return (
      <div
        className="user"
        key={i}
        onMouseEnter={() => {
          fle[i].style.display = "block";
          fle2[i].style.display = "block";
        }}
        onMouseLeave={() => {
          fle[i].style.display = "none";
          fle2[i].style.display = "none";
        }}
      >
        <div className="commandHead">
          <div className="COMMANDIB">
            <img src={USERIMG}></img>
            <b>{Userdetails.name}</b>
            <small>{"1month ago"}</small>
          </div>
          {/* reply Area */}
          <div className="REPLYAREA">
            <img
              src={DELETEIMG}
              onClick={() => {
                DELETEFUN(i);
              }}
              className="crud"
            ></img>
            <img
              src={EDITIMG}
              onClick={() => {
                para[i].style.display == "none"
                  ? (para[i].style.display = "block")
                  : (para[i].style.display = "none");
                para2[i].style.display == "block"
                  ? (para2[i].style.display = "none")
                  : (para2[i].style.display = "block");
                bt[i].style.display == "block"
                  ? (bt[i].style.display = "none")
                  : (bt[i].style.display = "block");

                EDITFUN(i);
                para2[i].value = e.content;
              }}
              className="crud2"
            ></img>
            <div>
              <img
                src={REPLYIMG}
                alt="Reply"
                onClick={() => {
                  RLIST[i].style.display == "none"
                    ? (RLIST[i].style.display = "block")
                    : (RLIST[i].style.display = "none");
                  //  hide[i].style.display ="block";
                  jvl[i].value = "@amyrobson";
                }}
              ></img>
              <b
                className="b"
                onClick={() => {
                  RLIST[i].style.display == "none"
                    ? (RLIST[i].style.display = "block")
                    : (RLIST[i].style.display = "none");
                  jvl[i].value = "@amyrobson";

                  //  hide[i].style.display ="block";
                }}
              >
                Reply
              </b>
            </div>
          </div>
        </div>
        <div className="commandpara">
          <p className="para">{e.content}</p>

          {/* <div className="minmiz">
            <button onClick={()=>{
              RLIST[i].style.display=="none"?RLIST[i].style.display="block":RLIST[i].style.display="none"
            }}>mini</button>
          </div> */}
          <div className="editpara">
            <textarea className="para2" onChange={handleEdit}></textarea>
            <button
              className="bt"
              onClick={() => {
                para[i].style.display == "none"
                  ? (para[i].style.display = "block")
                  : (para[i].style.display = "none");
                para2[i].style.display == "block"
                  ? (para2[i].style.display = "none")
                  : (para2[i].style.display = "block");
                bt[i].style.display == "block"
                  ? (bt[i].style.display = "none")
                  : (bt[i].style.display = "block");
                EDITED(i);
              }}
            >
              update
            </button>
          </div>
        </div>
        {/* reply section */}

        <div className="replylist">
          <small className="span">Replies</small>
          <div className="replylist1">
            {re}
          </div>

          <div className="reply">
            <img className="ur" src={ur}></img>
            <input type="text" onChange={handleReply} className="jvl" />
            <button className="true"
              onClick={() => {
                REPLY(i);
              }}
            >
              Reply
            </button>
          </div>
        </div>

        {/* reply section finish */}
      </div>
    );
  });

  return (
    <>
      {row}

      <Local fetchLocalItems={fetchLocalItems} />
    </>
  );
}
export default DATA;
