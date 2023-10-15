import React from "react";
import { CardBody } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import "../styles/style.css";

const Register = (props) => {
  const { handleChange } = props;
  const [userName, setUserName] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const [confirmPwd, setConfirmPwd] = React.useState("");

  const onSubmit = async () => {
    try {
      const form = new FormData();
      form.set("userName", userName);
      form.set("password", pwd);
      form.set("confirmPassword", confirmPwd);
      const response = await fetch("http://localhost:4000/signup/user", {
        headers: { "content-type": "application/json" },
        method: "POST",
        body: JSON.stringify({
          userName: userName,
          password: pwd,
          confirmPassword: confirmPwd,
        }),
      });
      const data = await response.json();
      console.log("logs the data", data);
      setUserName("");
      setPwd("");
      setConfirmPwd("");
      handleChange("LOGIN");
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
          <h3> X Register</h3>
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
          <InputGroup size="lg" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm">
              Confirm Password
            </InputGroup.Text>
            <Form.Control
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
              type="password"
              onChange={(e) => {
                setConfirmPwd(e.currentTarget.value);
              }}
              value={confirmPwd}
            />
          </InputGroup>
          <Button variant="primary" onClick={onSubmit}>
            Register
          </Button>
          <a
            href="javascript:void(0)"
            onClick={() => {
              handleChange("LOGIN");
            }}
            style={{ paddingLeft: "5px" }}
          >
            Login Now
          </a>
        </CardBody>
      </Card>
    </div>
  );
};

export default Register;
