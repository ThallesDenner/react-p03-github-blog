import styled from "styled-components";

export const IssueCardContainer = styled.article`
  width: 26rem;
  height: 15.75rem;
  padding: 2rem;
  border: 2px solid transparent;
  border-radius: 10px;
  background-color: ${(props) => props.theme["base-post"]};

  a {
    text-decoration: none;
  }

  &:hover {
    border: 2px solid ${(props) => props.theme["base-label"]};
  }

  header {
    height: 4rem;
    margin-bottom: 1.25rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;

    h3 {
      width: 17rem;
      color: ${(props) => props.theme["base-title"]};
      font-size: 1.25rem;
      font-weight: 700;
    }

    span {
      color: ${(props) => props.theme["base-span"]};
      font-size: 0.875rem;
    }
  }

  p {
    width: 22rem;
    height: 6.5rem;
    color: ${(props) => props.theme["base-text"]};
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    display: -webkit-box;
  }
`;
