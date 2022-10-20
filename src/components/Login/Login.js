import React from 'react';
import styled  from 'styled-components';
import bg from '../images/bg.jpg';
import image1 from '../images/vegies.jpg'

export const Login = () => {

    const Maine = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${bg});
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100vh;
    `
    const Dave = styled.div`
    width: 55rem;
    height: 35rem;
    background-color: #fff;
    box-shadow: 2px 4px 10px rgba(0, 0, 0, .3);
    display: grid;
    grid-template-columns: 1fr 1fr;
    overflow: hidden;
    `
    const Dave2 = styled.div`
      display: flex;
      flex-direction: column;
      gap: 2rem;
      padding: 2.3rem 3rem;
    `
    const Para = styled.p`
      font-size: .85rem;
      margin-top: .3rem;
      color: #bbb;
    `
    const Dave3 = styled.div`
    display:flex;
    flex-direction: column;
    gap: .35rem;
    margin-bottom: 1rem;
    `
    const Label = styled.label`
    font-size: .75rem;
    color: #bbb;
    `
  const Input = styled.input`
  width: 19rem;
  height: 2.2rem;
  border: 1px solid #ddd;
  background-color: #eaedef;
  
  `

  return (
    <Maine>
        <Dave>
            <Dave2>
              <h1>Urbee</h1>
              <div>
                <h2>Welcome Back</h2>
                <Para>Sign in with your email address and password</Para>
              </div>
              <form>
                <Dave3>
                  <Label>Email Address</Label>
                  <Input type="email"  />
                </Dave3>
                <Dave3>
                  <Label>Password</Label>
                  <Input type="password" />
                </Dave3>
                <div>
                </div>
              </form>
            </Dave2>
            <div>
                  <img src={image1} width="100%" height="100%" alt="vegies"/>
            </div>
        </Dave>
    </Maine>
  )
}
