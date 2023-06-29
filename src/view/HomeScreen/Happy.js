import { useState } from "react"

export default function Happy()
{
    
    const [username,setusername]=useState("");
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");


    function Registeruser(){
        console.log("register");
        console.log(username);
        console.log(email);
        console.log(password);

    }
            
    return(
        <div className="Header">
            <div className="Registration-form">
                <h1>
                    Registration Form
                </h1>
                <hr></hr>
        <div className="User-Name">
            <h3>
                User Name:
            </h3>
            <input type="text"  value={username} onChange={user=>setusername(user.target.value)}  placeholder="User-Name"/>
        </div>
        <div className="E-mail">
            <h3>
                User E-mail:
            </h3>
            <input type="email" value={email} onChange={email=>setemail(email.target.value)} placeholder="User E-mail"/>
        </div>
        <div className="Password">
            <h3>
                User Password:
            </h3>
            <input type="password" value={password} onChange={password=>setpassword(password.target.value)} placeholder="User Password"/>
        </div>
        <div className="button" value="Registeruser" onClick={Registeruser}>
                
                <button>
                    Register
                </button>
            </div>
            <hr></hr>
            </div>
            

    

        </div>
    )
}