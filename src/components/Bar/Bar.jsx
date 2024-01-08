import { AuthNav } from "../../components/AuthNav/AuthNav";
import { useAuth } from "../../Redux/auth/useAuth";
import { Navigation } from "../../components/Navigation/Navigation";
import { UserMenu } from "../../components/UserMenu/UserMenu";
import { Container } from "./Bar.styled";
export const Bar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Container>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Container>
  );
};
