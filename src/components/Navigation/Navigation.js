import { NavLink } from "react-router-dom";
import { useAuth } from "../../Redux/auth/useAuth";
import Container from "./Navigation.styled";
export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Container>
      <NavLink className="text" to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className="text" to="/contacts">
          Contacts
        </NavLink>
      )}
    </Container>
  );
};
