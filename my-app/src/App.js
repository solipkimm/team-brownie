import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";

import { Route, Switch } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import "./App.css";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import About from "./About";

function App() {
  return (
    <div className="App ">
      <Navbar bg="light" expand="lg">
        <LinkContainer to="/">
          <Navbar.Brand> Vaccine Passport</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/signup">
              <Nav.Link> Sign-up</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/signin">
              <Nav.Link>Sign-In</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container>
        <Row>
          <Col>
            <Switch>
              <Route path="/signup" render={() => <SignUp />} />
              <Route path="/signin" render={() => <SignIn />} />
              <Route path="/about" render={() => <About />} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </div>



    // 원래 하던 거 근데 이게 리엑트가 single page 에서 렌더링하는거라서 안되더라고영

    // <div className="App d-flex  flex-column ">
    //   <h1 className="mt-auto text-center align-self-center">
    //     Vaccine Passport
    //   </h1>
    //   <a href="/signup"  className="mt-auto" >
    //     <Button variant="outline-info" size="lg" block>
    //       Sign-up
    //     </Button>
    //   </a>
    //   <a href="/signin" >
    //   <Button variant="outline-success" size="lg" block>
    //     Sign-In
    //   </Button>
    //   </a>
    //   <div className="mt-auto mb-2 align-self-center">
    //     <Card.Text>
    //       Digital Health Passport <br></br>Team Brownie:
    //       <a href="https://github.com/solipkimm"> Solip</a>,{" "}
    //       <a href="https://github.com/Yongho-Lee">Yongho</a>,{" "}
    //       <a href="https://github.com/yejinkim97">Yejin</a>
    //     </Card.Text>
    //   </div>

    // </div>



  );
}

export default App;
