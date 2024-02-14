import Plug from "../assets/theplug.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Project from "../components/UI/Project";
export default function PortfolioPage() {
    const projects = [
      
      {
        img: Plug,
        text: "",
        title: "The Plug",
        link: "https://sleepy-bayou-35337-4939ad58a73e.herokuapp.com/",
      },
      {
        img: "",
        text: "",
        title: "",
        link: "",
        repo: "",
      },
      {
        img: "",
        text: "",
        title: "",
        link: "",
        repo: "",
      },
    
      
    ];

   return (
    <Container className= "align-items-center">
      <Row xs={1} sm={2} md={3}>
        {projects.map((project,index)=>(
          <div key={index} className="col-auto px-2 py-2">
            <Project {...project}/>
          </div>
        ))}
      </Row>
    </Container>
   );
   
}