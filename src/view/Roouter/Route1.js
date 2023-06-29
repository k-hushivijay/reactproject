import {Routes,Route} from "react-router-dom";
import Happy from "../HomeScreen/Happy";
import Register from "../HomeScreen/Register";


export default function Route1(){
    return(
    <>
    
    <Routes>
        <Route path="/" Component ={Happy}/>
        <Route path="/register" Component={Register}/>
       
    </Routes>
    </>
    )
}