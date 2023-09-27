import styled from "styled-components";

export const SearchBarContainer = styled.form`
  position: relative;

  input {
    width: 100%;
    padding: 0.75rem 1rem;
    background-color: ${(props) => props.theme.colors["base-input"]};
    border: 1px solid ${(props) => props.theme.colors["base-border"]};
    border-radius: 6px;
    color: ${(props) => props.theme.colors["base-text"]};
    font-size: ${(props) => props.theme.fontSizes["fs-16"]};
  }

  svg {
    position: absolute;
    top: 1.1rem;
    right: 1rem;
  }
`;
