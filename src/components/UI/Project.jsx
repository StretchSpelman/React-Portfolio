import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";

export default function Project({ title, img, text, link, repo }) {
    const backgroundImg={
        background:`url(${img})`,
        width:"400px",
        height:"300px",
        backgroundSize: "cover",
    };
    return(
        <Col>
        <Card style={{maxHeight: "350px", width:"100%",minWidth:"320px"}}>
            <div style={backgroundImg}></div>
            <Card.Body>
                <Card.title>{title}</Card.title>
                <Card.Text>{text}</Card.Text>
                <Button variant="outline-primary" href={link}>
                    Go to {title}
                </Button>
                {repo &&(
                    <Button variant="outline-primary" href={repo}>
                        Repository
                    </Button>
                )}
            </Card.Body>
        </Card>
        </Col>
    );
};

