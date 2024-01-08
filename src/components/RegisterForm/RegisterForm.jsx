import { useDispatch } from "react-redux";
import { register } from "../../Redux/auth/auth-operations";
import Container from "./RegisterForm.styled";
export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <h1>Page of registration</h1>

      <Container onSubmit={handleSubmit} autoComplete="off">
        <label>
          Username
          <br />
          <input type="text" name="name" />
        </label>
        <label>
          Email <br />
          <input type="email" name="email" />
        </label>
        <label>
          Password <br />
          <input type="password" name="password" />
        </label>
        <button className="btn" type="submit">
          Register
        </button>
      </Container>
    </>
  );
};
