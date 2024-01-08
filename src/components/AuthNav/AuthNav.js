import { NavLink } from "react-router-dom";
import { Container } from "./AuthNav.styled";
export const AuthNav = () => {
  return (
    <Container>
      <NavLink className="text" to="/register">
        Register
      </NavLink>
      <NavLink className="text" to="/login">
        Log In
      </NavLink>
    </Container>
  );
};
