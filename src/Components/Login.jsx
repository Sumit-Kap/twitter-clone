import React from "react";
import { CardBody } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import "../styles/style.css";
const Login = (props) => {
  const { handleChange, history } = props;
  const [userName, setUserName] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const navigate = useNavigate();
  const onSubmit = async () => {
    try {
      const response = await fetch("http://localhost:4000/login/user", {
        headers: { "content-type": "application/json" },
        method: "POST",
        body: JSON.stringify({
          userName: userName,
          password: pwd,
        }),
      });
      const data = await response.json();
      document.cookie = `authToken=${data.authToken}; SameSite=None; Secure`;
      console.log("logs the data", data);
      setUserName("");
      setPwd("");
      navigate(`/profile/${data.id}`);
      // document.setCookie()
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <Card>
        <Card.Title
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h3> X Login</h3>
        </Card.Title>
        <CardBody>
          <InputGroup size="lg" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm">
              Username
            </InputGroup.Text>
            <Form.Control
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
              onChange={(e) => {
                setUserName(e.currentTarget.value);
              }}
              value={userName}
            />
          </InputGroup>
          <InputGroup size="lg" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm">
              Password
            </InputGroup.Text>
            <Form.Control
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
              type="password"
              onChange={(e) => {
                setPwd(e.currentTarget.value);
              }}
              value={pwd}
            />
          </InputGroup>
          <Button variant="primary" onClick={onSubmit}>
            Login
          </Button>
          <a
            href="javascript:void(0)"
            onClick={() => {
              handleChange("REGISTER");
            }}
            style={{ paddingLeft: "5px" }}
          >
            Register here
          </a>
        </CardBody>
      </Card>
    </div>
  );
};

export default Login;
