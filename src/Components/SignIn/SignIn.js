import React, { useState } from "react";
import "./SignIn.css";
import { Button, Form, Spinner } from "react-bootstrap";
import UseAuth from "../../Hooks/UseAuth";
import { useLocation, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [userName, setUserName] = useState("");
  const [takeEmail, setTakeEmail] = useState("");
  const [takePassword, setTakePassword] = useState("");
  const [haveAccount, setHaveAccount] = useState(false);

  const {
    signInWithGoogle,
    signInWithEmailPass,
    createNewUserWithEmailAndPass,
    logOut,
    newUser,
    handleUserName,
  } = UseAuth();

  const handleEmail = (e) => {
    setTakeEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setTakePassword(e.target.value);
  };

  const handleAlreadyHavingAccount = () => {
    setHaveAccount(!haveAccount);
  };

  // const handleUserName = (e) => {
  //   setUserName(e.target.value);
  //   const auth = getAuth();
  //   updateProfile(auth.currentUser, {
  //     displayName: { userName }.then((result) => {}),
  //   });
  // };

  const history = useNavigate();
  const location = useLocation();
  const redirect_url = location.state?.from || "/";
  const handleSignInWithGoogle = () => {
    signInWithGoogle().then((result) => {
      // const user = result.user;
      history(redirect_url);
    });
  };

  const handleForm = (e) => {
    e.preventDefault();

    haveAccount
      ? signInWithEmailPass(takeEmail, takePassword)
      : createNewUserWithEmailAndPass(takeEmail, takePassword);

    console.log("email", takeEmail, "password", takePassword);
  };
  return (
    <Form onSubmit={handleForm} className="loginStyle">
      {!haveAccount && (
        <Form.Group
          style={{ width: "95%", margin: "auto" }}
          className="mb-3"
          controlId="formBasicEmail"
        >
          <Form.Label>User Name</Form.Label>
          <Form.Control
            onBlur={() => handleUserName()}
            required
            type="text"
            placeholder="Enter your user name"
          />
        </Form.Group>
      )}

      <Form.Group
        style={{ width: "95%", margin: "auto" }}
        className="mb-3"
        controlId="formBasicEmail"
      >
        <Form.Label>Email address</Form.Label>
        <Form.Control
          onBlur={handleEmail}
          type="email"
          placeholder="Enter email"
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group
        style={{ width: "95%", margin: "auto" }}
        className="mb-3"
        controlId="formBasicPassword"
      >
        <Form.Label>Password</Form.Label>
        <Form.Control
          onBlur={handlePassword}
          type="password"
          placeholder="Password"
        />
      </Form.Group>
      <Form.Group
        style={{ width: "95%", margin: "auto" }}
        className="mb-3"
        controlId="formBasicCheckbox"
      >
        <Form.Check
          onChange={handleAlreadyHavingAccount}
          type="checkbox"
          label="Already have an Account?"
        />
      </Form.Group>
      <Button style={{ marginLeft: "35px" }} variant="primary" type="submit">
        {haveAccount ? "Sign in" : "Sign up"}
      </Button>
      {newUser.email ? (
        <Button
          onClick={logOut}
          style={{ marginLeft: "35px" }}
          variant="primary"
        >
          Log out
        </Button>
      ) : (
        <Button
          onClick={handleSignInWithGoogle}
          style={{ marginLeft: "35px" }}
          variant="primary"
        >
          sign in with google
        </Button>
      )}
    </Form>
  );
};

export default SignIn;
