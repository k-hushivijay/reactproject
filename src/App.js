import { BrowserRouter,Routes,Route } from "react-router-dom"
import Route1 from "./view/Roouter/Route1"
import "./view/style/style.css";

export default function App(){
    return(
        <>
       <BrowserRouter>
       <Routes>
        <Route path="*" Component={Route1}/>
       </Routes>
       </BrowserRouter>

        </>
    )
}