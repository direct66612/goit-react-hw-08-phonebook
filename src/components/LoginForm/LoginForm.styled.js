import styled from "styled-components";
const Container = styled("form")`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 20px;
  align-items: baseline;
  gap: 20px;
  .btn {
    display: block;
    width: 200px;
    background-color: aquamarine;
    border: 1px solid black;
    border-radius: 10px;
    margin-top: 20px;
    cursor: pointer;
  }
`;
export default Container;
