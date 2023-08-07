import styled from "styled-components";

export const Wrapper = styled.nav`
  width: 100%;
  padding: 16px 0;
  display: flex;
  justify-content: center;
  background-color: var(--orange);
  position: sticky;
  top: 0;
  z-index: 999;

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

export const ButtonBack = styled.button`
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background: transparent;
  transition: background-color 0.3s;

  &:hover {
    background: rgba(0, 0, 0, 0.3);
  }

  img {
    object-fit: contain;
  }
`;
