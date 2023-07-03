import {Routes,Route} from "react-router-dom";
import Happy from "../HomeScreen/Happy";
import Login from "../HomeScreen/Login";
import Home from "../HomeScreen/Home";
import Cart from "../HomeScreen/Cart";



export default function Route1(){
    return(
    <>
    
    <Routes>
        <Route path="/" Component ={Happy}/>
        <Route path="/Login" Component={Login}/>
        <Route path="/Home" Component={Home}/>
        <Route path="/Cart" Component={Cart}/>
       
    </Routes>
    </>
    )
}