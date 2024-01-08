import { useDispatch } from "react-redux";
import { logOut } from "../../Redux/auth/auth-operations";
import { useAuth } from "../../Redux/auth/useAuth";
import Container from "./UserMenu.styled";
export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => dispatch(logOut());

  return (
    <Container>
      <p>Welcome, {user.name}</p>
      <button className="btn" type="button" onClick={handleLogOut}>
        Logout
      </button>
    </Container>
  );
};
