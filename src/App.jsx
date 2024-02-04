import { Outlet} from "react-router-dom";
import Background from "./components/Background";
import Header from "./components/Header";
export default function App(){
  return (
    <>
    <Header />
    <Background>
    <Outlet />
    </Background>
    </>
  )
}
