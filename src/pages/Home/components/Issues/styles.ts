import styled from "styled-components";

export const IssuesContainer = styled.section`
  & > div:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      color: ${(props) => props.theme["base-subtitle"]};
      font-size: 1.125rem;
      font-weight: 700;
    }

    span {
      color: ${(props) => props.theme["base-span"]};
      font-size: 0.875rem;
    }
  }

  & > div:last-child {
    display: grid;
    grid-template-columns: repeat(auto-fill, 26rem);
    justify-content: center;
    gap: 2rem;
  }
`;
