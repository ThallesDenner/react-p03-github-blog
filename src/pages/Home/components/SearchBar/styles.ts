import styled from "styled-components";

export const SearchBarContainer = styled.form`
  input {
    margin-top: 1rem;
    margin-bottom: 3rem;
    width: 100%;
    padding: 0.75rem 1rem;
    background-color: ${(props) => props.theme["base-input"]};
    border: 1px solid ${(props) => props.theme["base-border"]};
    border-radius: 6px;
    color: ${(props) => props.theme["base-text"]};
    font-size: 1rem;
  }
`;
