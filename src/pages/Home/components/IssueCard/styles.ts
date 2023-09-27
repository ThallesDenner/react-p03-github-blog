import styled from "styled-components";

export const IssueCardContainer = styled.article`
  width: 26rem;
  height: 15.75rem;
  border: 2px solid transparent;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors["base-post"]};

  a {
    display: block;
    padding: 2rem;
    text-decoration: none;
  }

  &:hover {
    border: 2px solid ${(props) => props.theme.colors["base-label"]};
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
      color: ${(props) => props.theme.colors["base-title"]};
      font-size: ${(props) => props.theme.fontSizes["fs-20"]};
      font-weight: 700;
    }

    time {
      color: ${(props) => props.theme.colors["base-span"]};
      font-size: ${(props) => props.theme.fontSizes["fs-14"]};
    }
  }

  p {
    width: 22rem;
    height: 6.5rem;
    color: ${(props) => props.theme.colors["base-text"]};
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    display: -webkit-box;
  }
`;
