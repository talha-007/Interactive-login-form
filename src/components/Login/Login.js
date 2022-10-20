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
    width: 45rem;
    height: 30rem;
    background-color: #fff;
    border-radius: 1rem;
    box-shadow: 2px 4px 10px rgba(0, 0, 0, .3);
    display: grid;
    grid-template-columns: 1fr 1fr;
    overflow: hidden;
    `
    const Dave2 = styled.div`
      display: flex;
      flex-direction: column;
      gap: 2rem;
      padding: 2rem 3rem
    `

  return (
    <Maine>
        <Dave>
            <Dave2>
              <h1>Urbee</h1>
              <div>
                <h2>Welcome Back</h2>
                <p>Sign in with your email address and password</p>
              </div>
              <form>
                <div>
                  <label>Email Address</label>
                  <input type="email"  />
                </div>
                <div>
                  <label>Password</label>
                  <input type="password" />
                </div>
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
