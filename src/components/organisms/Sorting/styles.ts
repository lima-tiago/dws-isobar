import styled from "styled-components";

export const Wrapper = styled.div`
  background: #eee;
  color: #666;
  width: 100%;
  font-size: 0.875rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  button {
    padding: 8px;
    border: none;
    background: #333;
    position: relative;
  }
`;

export const Options = styled.span`
  position: absolute;
  bottom: -62px;
  right: 0;
  background: #333;
  display: grid;
  text-align: left;
  color: var(--white);

  span {
    padding: 8px;
    width: 100%;
  }
`;
