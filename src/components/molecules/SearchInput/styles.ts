import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;

  input {
    padding-right: 32px;
  }

  img {
    position: absolute;
    right: 8px;
    object-fit: contain;
  }
`;
