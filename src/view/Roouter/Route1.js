import {Routes,Route} from "react-router-dom";
import Happy from "../HomeScreen/Happy";
import Login from "../HomeScreen/Login";
import Home from "../HomeScreen/Home";



export default function Route1(){
    return(
    <>
    
    <Routes>
        <Route path="/" Component ={Happy}/>
        <Route path="/Login" Component={Login}/>
        <Route path="/Home" Component={Home}/>
       
    </Routes>
    </>
    )
}