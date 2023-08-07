import styled from "styled-components";

export const Wrapper = styled.nav`
  width: 100%;
  padding: 16px 0;
  display: flex;
  justify-content: center;
  background-color: var(--orange);

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;

    @media screen and (min-width: 768px) {
      > div {
        max-width: 500px;
      }
    }
  }

  span {
    font-size: 18px;
    color: #fff;
    font-weight: 600;
  }
`;
