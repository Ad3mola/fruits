import styled from "styled-components/macro";

export default styled.div`
  .form-group {
    height: 40px;
  }
  input,
  button {
    height: 80%;
  }
  input {
    width: 30%;
    border: 1px solid #777;
    border-radius: 5px;
  }
  button {
    border: 0;
    border-radius: 5px;
    padding: 0 2em;
    margin: 0 1em;
    background-color: tomato;
    color: white;
    &:hover {
      opacity: 0.9;
    }
  }
`;
