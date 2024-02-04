import { Outlet} from "react-router-dom";
import Background from "./components/Background";

export default function App(){
  return (
    <>
    <Background>
    <Outlet />
    </Background>
    </>
  )
}
