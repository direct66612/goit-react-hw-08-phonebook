import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Container from "./Layout.styled";
const Layout = () => {
  return (
    <Container>
      <header>
        <ul>
          <li>
            <NavLink className="text" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/registration">Registration</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Log In</NavLink>
          </li>
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
    </Container>
  );
};

export default Layout;
