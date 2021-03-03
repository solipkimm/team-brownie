import React, {useState} from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Signin() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
        
    function handleSubmit(event) {
      event.preventDefault();
    }
  
    return (
      <div className="Login">
        <Form onSubmit={handleSubmit}>
          <Form.Group size="sm" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button size="sm" type="submit">
            Login
          </Button>
        </Form>
      </div>
    );
}

export default Signin
