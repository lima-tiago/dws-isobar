import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  width: 100%;
  padding: 16px 0;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`;

export const BandItem = styled.div`
  width: calc(100% - 16px);
  display: grid;
  grid-template-columns: 50px 1fr;
  gap: 8px;
  align-items: center;
  margin: 8px 0;
  padding: 0 0 8px 0;
  border-bottom: 1px solid #eee;

  img {
    border-radius: 50%;
  }

  > a {
    width: calc(100% - 50px);
    text-decoration: none;
  }

  p {
    margin: 0;
    text-transform: uppercase;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 100%;
    font-weight: 600;
    color: black;
  }

  span {
    margin: 0;
    text-transform: uppercase;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 14px;
    color: #666;
  }
`;
