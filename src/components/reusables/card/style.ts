import styled from "styled-components/macro";

export default styled.div`
  .card {
    box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.1);
    border: 0;
    height: 100%;
    display: flex;
    justify-content: space-between;
    .fruit-name {
      color: tomato;
    }
  }
  .recipes-container {
    height: 100%;
  }
  .recipe-list {
    padding-left: 0.5em;
    li {
      color: #777;
      margin: 0.1em 0;
    }
    small {
      font-size: 50%;
    }
  }
`;
