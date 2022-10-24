import { useState } from "react";
import React from "react";
import styled from "styled-components";
import bg from "../images/bg.jpg";
import image1 from "../images/vegies.jpg";
import { isDisabled } from "@testing-library/user-event/dist/utils";
// import { PropTypes } from "react";

const Maine = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${bg});
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100vh;
`;
const Dave = styled.div`
  width: 55rem;
  height: 35rem;
  background-color: #fff;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.3);
  display: grid;
  grid-template-columns: 1fr 1fr;
  overflow: hidden;
`;
const Dave2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.3rem 3rem;
`;
const Para = styled.p`
  font-size: 0.85rem;
  margin-top: 0.3rem;
  color: #bbb;
`;
const Dave3 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  margin-bottom: 1rem;
  label {
    font-size: 0.7rem;
    color: #bbb;
  }
`;

const Input = styled.input`
  width: 19rem;
  height: 2.2rem;
  border: 1px solid #ddd;
  background-color: #eaedef;
  padding: 0rem 1rem;
  font-weight: bold;
`;
const Warn = styled.p`
  color: red;
  font-size: 0.7rem;
  display: none;
`;
const Inf = styled.p`
  color: #bbb;
  font-size: 0.7rem;
`;
const Dave4 = styled.div`
  display: flex;
  width: 21rem;
  justify-content: space-between;
`;
const Dave5 = styled.div`
  display: flex;
  gap: 0.3rem;
  align-items: center;
`;
const Boxi = styled.input`
  border-radius: 1rem;
`;
const Span = styled.span`
  font-weight: 500;
  font-size: 0.85rem;
`;
const A = styled.a`
  text-decoration: none;
  color: #bbb;
  font-size: 0.8rem;
`;
const Button = styled.button`
  margin-top: 2.5rem;
  width: 7rem;
  height: 2.3rem;
  background-color: #5e9044;
  border: none;
  outline: none;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background-color: #5e9012;
  }
`;
const Par = styled.p`
  font-size: 0.8rem;
  color: #bbb;
  margin-top: 1rem;
`;
const Ab = styled.a`
  text-decoration: none;
  font-weight: 500;
  color: #5e9044;
`;











export const Login = ({setToken}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  if(email & password == ""){
    
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // localStorage.setItem('name' ,email);
    setToken("Token")
    setEmail("");
    setPassword("");
  };

  const setData = ()=>{
  
  }







  return (
    <Maine>
      <Dave>
        <Dave2>
          <h1>Urbee</h1>
          <div>
            <h2>Welcome Back</h2>
            <Para>Sign in with your email address and password</Para>
          </div>
          <form onSubmit={handleSubmit}>
            <Dave3>
              <label>Email Address</label>
              <Input 
              onChange={(e) => setEmail(e.target.value)} 
              value={email}
              pattern="[a-z|A-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              placeholder="Enter your Email"
              />
              <Warn>Please enter a valid email</Warn>
            </Dave3>
            <Dave3>
              <label>Password</label>
              <Input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                placeholder="Enter your Password"
              />
              <Inf>
                Password should be One letter, one number, one special character
                and 8 digit long
              </Inf>
            </Dave3>
            <Dave4>
              <Dave5>
                <Boxi type="checkbox" />
                <Span>Remember me</Span>
              </Dave5>
              <A href="#">Forgot Password?</A>
            </Dave4>
            <Button type="submit" onClick={setData}>Sign In</Button>
            <Par>
              Don't have an account?<Ab href="#">Sign Up</Ab>
            </Par>
          </form>
        </Dave2>
        <div>
          <img src={image1} width="100%" height="100%" alt="vegies" />
        </div>
      </Dave>
    </Maine>
  );
};

