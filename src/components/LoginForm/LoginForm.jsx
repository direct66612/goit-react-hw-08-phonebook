import { useDispatch } from "react-redux";
import { logIn } from "../../Redux/auth/auth-operations";
import Container from "./LoginForm.styled";
export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Container onSubmit={handleSubmit} autoComplete="off">
      <label>
        Email <br />
        <input type="email" name="email" />
      </label>
      <label>
        Password <br />
        <input type="password" name="password" />
      </label>
      <button className="btn" type="submit">
        Log In
      </button>
    </Container>
  );
};
