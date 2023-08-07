import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Cover = styled.div`
  position: relative;
  width: 100%;

  img {
    object-fit: cover;
  }

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: 0;
    left: 0;
    background: linear-gradient(to top, #333, transparent);
    z-index: 2;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  position: relative;
  margin-top: 8px;

  > div {
    position: absolute;
    bottom: -10px;
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    object-fit: cover;
    border-radius: 50%;
  }

  span {
    font-size: 0.875rem;
    color: #999;
    font-weight: 600;
    text-transform: uppercase;
  }

  h1 {
    display: -webkit-box;
    font-size: 2rem;
    overflow: hidden;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    color: var(--white);
  }
`;

export const Biography = styled.p`
  width: 100%;
  padding: 32px 0;
`;

export const Albums = styled.div`
  width: 100%;
  margin-bottom: 40px;

  h1 {
    width: 100%;
    font-size: 1.5rem;
    text-align: center;
  }

  > div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    img {
      width: 100%;
      object-fit: cover;
    }
  }
`;
