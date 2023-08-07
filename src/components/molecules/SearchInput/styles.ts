import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;

  input {
    padding-right: 40px;
  }

  button {
    position: absolute;
    right: 4px;
    background: #eee;
    border: none;
    border-radius: 4px;
    display: grid;
    place-items: center;
    height: 32px;
    cursor: pointer;
  }

  img {
    object-fit: contain;
  }
`;
