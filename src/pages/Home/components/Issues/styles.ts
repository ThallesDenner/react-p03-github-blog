import styled from "styled-components";

export const IssuesContainer = styled.section`
  & > div:first-child {
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      color: ${(props) => props.theme.colors["base-subtitle"]};
      font-size: ${(props) => props.theme.fontSizes["fs-18"]};
      font-weight: 700;
    }

    span {
      color: ${(props) => props.theme.colors["base-span"]};
      font-size: ${(props) => props.theme.fontSizes["fs-14"]};
    }
  }

  & > div:last-child {
    margin: 3rem auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, 26rem);
    justify-content: center;
    gap: 2rem;
  }
`;
